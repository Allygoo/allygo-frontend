import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProfessionalCard from './ProfessionalCard'
import '../../styles/Professionals/ProfessionalsList.css'
import { api } from '../../api/client'

const ProfessionalsList = () => {
  const { serviceId } = useParams();
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) {
      setError('Servicio no especificado');
      setLoading(false);
      return;
    }
    let abort = new AbortController();
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.get(`/api/services-management/${serviceId}/workers`, { signal: abort.signal });
        // Normalizamos estructura esperando campos (id, name, type, rating, reviewCount, availability, image)
        const mapped = (Array.isArray(data) ? data : []).map(w => ({
          id: w.id || w.worker_id || w.id_worker || Math.random(),
          name: w.worker_name || 'Profesional',
            // rating: usar promedio si existe; fallback a 0
          rating: Number(w.rating ?? w.average_rating ?? 0).toFixed(1),
          reviewCount: w.reviewCount || w.reviews_count || w.total_reviews || 0,
          availability: w.availability || w.available_text || 'Esta semana',
          image: w.worker_photo || 'https://dummyimage.com/48x48/e5e7eb/6b7280?text=PG'
        }));
        setProfessionals(mapped);
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error('Error cargando profesionales:', err);
        setError(err.message || 'Error al cargar profesionales');
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => abort.abort();
  }, [serviceId]);

  if (loading) {
    return <div className="professionals-list">Cargando profesionales...</div>;
  }

  if (error) {
    return <div className="professionals-list error">{error}</div>;
  }

  if (!professionals.length) {
    return <div className="professionals-list empty">No hay profesionales para este servicio.</div>;
  }

  return (
    <div className="professionals-list">
      <h2 className="professionals-title">Profesionales Disponibles</h2>
      <div className="professionals-grid">
        {professionals.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  )
}

export default ProfessionalsList
