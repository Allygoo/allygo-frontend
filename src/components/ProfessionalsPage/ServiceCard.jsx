import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/Professionals/ServiceCard.css'
import { api } from '../../api/client'

/*
  Este componente ahora obtiene la info del servicio desde /api/services-management/:serviceId
  Suposición de respuesta (adaptar a tu backend real):
  {
    id_service: number,
    service_name: string,
    category_name: string,
    average_duration_minutes?: number,
    average_rating?: number,
    badge?: string,
    description?: string
  }
*/

const ServiceCard = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    api.get(`/api/services-management/${serviceId}`)
      .then(data => { if (!cancelled) setService(data); })
      .catch(err => { if (!cancelled) setError(err.message || 'Error cargando servicio'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [serviceId]);

  const title = service?.service_name || 'Servicio';
  const category = service?.category_name || 'Categoría';
  const rating = typeof service?.average_rating === 'number' ? service.average_rating : 4.8; // fallback
  const durationMin = service?.average_duration_minutes || 90; // fallback 90 min
  const durationLabel = durationMin <= 60 ? `${durationMin} min aprox` : `${Math.round(durationMin/60)} h aprox`;
  const badgeExtra = service?.badge || 'Urgencias y programado';
  const serviceImage = service?.service_photo || null;

  return (
    <div className="service-card">
      <div className="service-header">
        <div className="service-icon">
          {serviceImage ? (
            <img
              src={serviceImage}
              alt={title}
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.remove(); }}
              style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 12 }}
            />
          ) : (
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M20 8L28 16L20 24L12 16L20 8Z" fill="#6B7280"/>
              <path d="M8 20L16 28L24 20L16 12L8 20Z" fill="#9CA3AF"/>
              <path d="M32 20L40 28L32 36L24 28L32 20Z" fill="#6B7280"/>
              <path d="M20 32L28 40L20 48L12 40L20 32Z" fill="#9CA3AF"/>
            </svg>
          )}
        </div>
        <div className="service-info">
          <div className="service-title-row">
            <h1 className="service-title">{loading ? 'Cargando...' : error ? 'Error' : title}</h1>
            {!loading && !error && (
              <div className="service-badges">
                <span className="badge">{category}</span>
                <span className="badge">{badgeExtra}</span>
              </div>
            )}
          </div>
          <div className="service-details">
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                <path d="M8 4v4l2.5 2.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{loading ? '...' : 'Cerca de ti'}</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                <path d="M8 4v4l2.5 2.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{loading ? '...' : durationLabel}</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.5 7.5L8 1L1.5 7.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{loading ? '...' : 'Garantía AllyGo promedio'}</span>
            </div>
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.545 4.755h5l-4.045 2.94 1.545 4.755L8 10.51l-4.045 2.94L5.5 8.695 1.455 5.755h5L8 1Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1"/>
              </svg>
              <span>{loading ? '...' : `${rating.toFixed(1)} promedio`}</span>
            </div>
          </div>
        </div>
        <div className="service-actions">
          <button className="btn-outline" disabled={loading || !!error}>Ver detalles</button>
        </div>
      </div>
      <div className="service-pricing">
        <div className="pricing-section">
          <h3>Desde $</h3>
          <p className="pricing-note">Precio final tras evaluación</p>
        </div>
        <div className="service-includes">
          <div className="includes-section">
            <h4>Incluye</h4>
            <ul>
              <li>{loading ? '...' : 'Diagnóstico básico • Mano de obra'}</li>
            </ul>
          </div>
          <div className="includes-section">
            <h4>Hasta 1 h</h4>
            <ul>
              <li>{loading ? '...' : 'Materiales'}</li>
              <li>{loading ? '...' : 'No incluidos • A cotizar'}</li>
            </ul>
          </div>
        </div>
      </div>
      {error && (
        <div style={{ padding: '12px 16px', color: '#b91c1c', fontSize: 14 }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
