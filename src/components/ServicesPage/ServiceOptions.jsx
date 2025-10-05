import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Services/ServiceOptions.css';
import { api } from '../../api/client';

function ServiceOptions({ categoryId }) {
  // Si no hay categoryId, podemos decidir no llamar al API todavía.
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId == null || Number.isNaN(Number(categoryId))) {
      setServices([]);
      setLoading(false);
      setError('Categoría no especificada');
      return;
    }
    let abort = new AbortController();
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const qs = new URLSearchParams({ category_id: categoryId }).toString();
        const data = await api.get(`/api/services-management/by-category?${qs}`, { signal: abort.signal });
        // Aseguramos array:
        setServices(Array.isArray(data) ? data : []);
        console.log('Fetched services:', data);
      } catch (err) {
        if (err.name === 'AbortError') return; // navegación rápida
        console.error('Error fetching services:', err);
        setError(err.message || 'Error al cargar servicios');
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => abort.abort();
  }, [categoryId]);

  if (loading) {
    return <div className="service-options loading">Cargando servicios...</div>;
  }

  if (error) {
    return <div className="service-options error">{error}</div>;
  }

  if (!services.length) {
    return <div className="service-options empty">No hay servicios disponibles.</div>;
  }

  return (
    <div className="service-options">
      {services.map(svc => (
        <div key={svc.id_service} className="service-option">
          <h3>{svc.service_name}</h3>
          <div className='service-icon-container'>
            {svc.service_photo && <img src={svc.service_photo} alt={svc.service_name} className="service-icon" loading="lazy" />}
          </div>
          <div className="option-details">
            <div className="detail-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Cerca de ti • Desde $</span>
            </div>
          </div>
          <button
            className="select-btn"
            onClick={() => {
              if (categoryId == null) {
                console.warn('categoryId no definido; no se puede navegar');
                return;
              }
              navigate(`/services/${categoryId}/professionals/${svc.id_service}`);
            }}
          >
            Seleccionar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ServiceOptions;
