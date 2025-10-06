import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormField from './FormField'
import '../../styles/CreateServiceOrder/FormContent.css'
import { api } from '../../api/client'

const FormContent = ({ professional, onClose, onSuccess }) => {
  const { serviceId } = useParams();

  // Estados controlados del formulario
  const [requesterName, setRequesterName] = useState('');
  const [dateBegin, setDateBegin] = useState('');
  const [dateFinish, setDateFinish] = useState('');
  const [address, setAddress] = useState('');
  const [workerName, setWorkerName] = useState(professional?.name || '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // TODO: id_user fijo 1 según contexto actual
  const USER_ID = 1;
  const workerId = professional?.id; // esperado del objeto professional

  function validate() {
    if (!requesterName.trim()) return 'Ingresa el nombre del solicitante';
    if (!dateBegin) return 'Selecciona fecha/hora de inicio';
    if (!dateFinish) return 'Selecciona fecha/hora de fin';
    if (new Date(dateFinish) < new Date(dateBegin)) return 'La fecha fin no puede ser anterior al inicio';
    if (!address.trim()) return 'Ingresa la dirección';
    if (!workerId) return 'No se pudo determinar el trabajador';
    if (!serviceId) return 'No se pudo determinar el servicio';
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const payload = {
        id_user: USER_ID,
        id_service: Number(serviceId),
        id_worker: workerId,
        requester_name: requesterName.trim(),
        service_date_begin: new Date(dateBegin).toISOString(),
        service_date_finish: new Date(dateFinish).toISOString(),
        address: address.trim()
      };

      const base = (import.meta.env.VITE_SERVICES_MS_URL || '').replace(/\/+$/, '');
      if (!base) {
        throw new Error('VITE_SERVICE_MS_URL no está definida');
      }
      const url = base + '/api/services-management/order';

      console.log('[create-order] POST', url, payload);
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        let details;
        try { details = await res.json(); } catch { details = { message: res.statusText }; }
        throw new Error(`HTTP ${res.status}: ${details.message || 'Error'}`);
      }
      const ct = res.headers.get('content-type') || '';
      let data;
      if (ct.includes('application/json')) {
        try { data = await res.json(); } catch { data = null; }
      } else {
        data = await res.text();
      }
      console.log('[create-order] OK respuesta:', data);
      onSuccess && onSuccess();
    } catch (err) {
      console.error('Error creando la orden', err);
      const msg = /CORS/i.test(err.message) ? 'Error CORS: el servidor no permite este origen.' : (err.message || 'Error creando la orden');
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="form-content">
      <div className="form-header">
        <h1 className="form-title">Generar orden de servicio</h1>
      </div>

      <form className="service-form" onSubmit={handleSubmit} noValidate>
        {error && <div className="form-error" role="alert">{error}</div>}
        <FormField
          label="Nombre de Usuario solicitante"
          type="text"
          placeholder="Ej.: Juan Pérez"
          icon="user"
          value={requesterName}
          onChange={e => setRequesterName(e.target.value)}
        />

        <div className="form-row">
          <FormField
            label="Fecha y hora inicio"
            type="datetime-local"
            placeholder="Seleccionar fecha y hora"
            icon="calendar"
            value={dateBegin}
            onChange={e => setDateBegin(e.target.value)}
          />
          <FormField
            label="Fecha y hora fin"
            type="datetime-local"
            placeholder="Seleccionar fecha y hora"
            icon="calendar"
            value={dateFinish}
            onChange={e => setDateFinish(e.target.value)}
          />
        </div>

        <FormField
          label="Dirección del servicio"
          type="text"
          placeholder="Ej.: Carrea 15 Este # 20 b Sur, Bogotá, Piso 3"
          icon="location"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <FormField
          label="Trabajador asignado"
          type="text"
          placeholder="Ej.: Carlos Ramírez"
          icon="worker"
          value={workerName}
          readOnly
          onChange={() => {}}
        />

        <div className="form-actions">
          <button type="submit" className="generate-button" disabled={submitting}>
            <svg className="button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {submitting ? 'Creando...' : 'Generar orden de servicio'}
          </button>
          <button type="button" className="cancel-button" onClick={onClose} disabled={submitting}>Cancelar</button>
        </div>
      </form>
    </main>
  )
}

export default FormContent
