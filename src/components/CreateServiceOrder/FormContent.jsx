import React from 'react'
import FormField from './FormField'
import '../../styles/CreateServiceOrder/FormContent.css'

const FormContent = () => {
  return (
    <main className="form-content">
      <div className="form-header">
        <h1 className="form-title">Generar orden de servicio</h1>
      </div>

      <form className="service-form">
        <FormField
          label="Nombre de Usuario solicitante"
          type="text"
          placeholder="Ej.: Juan Pérez"
          icon="user"
        />

        <div className="form-row">
          <FormField
            label="Fecha y hora inicio"
            type="datetime-local"
            placeholder="Seleccionar fecha y hora"
            icon="calendar"
          />
          <FormField
            label="Fecha y hora fin"
            type="datetime-local"
            placeholder="Seleccionar fecha y hora"
            icon="calendar"
          />
        </div>

        <FormField
          label="Dirección del servicio"
          type="text"
          placeholder="Ej.: Carrea 15 Este # 20 b Sur, Bogotá, Piso 3"
          icon="location"
        />

        <FormField
          label="Trabajador asignado"
          type="text"
          placeholder="Ej.: Carlos Ramírez"
          icon="worker"
        />

        <div className="form-actions">
          <button type="submit" className="generate-button">
            <svg className="button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Generar orden de servicio
          </button>
        </div>
      </form>
    </main>
  )
}

export default FormContent
