import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import plumbingImg from '../../assets/plumbing.jpg'
import '../../styles/Services/ServiceHeader.css'
import { api } from '../../api/client'

/*
 Estructura esperada de la categoría (suposición):
 {
   id: number,
   name: string,
   description?: string,
   tags?: string[]
 }
 Ajusta si tu backend devuelve campos distintos; he añadido defensas.
*/

const ServiceHeader = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryId) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    api.get(`/api/services-management/categories/${categoryId}`)
      .then(data => {
        if (cancelled) return;
        setCategory(data);
      })
      .catch(err => {
        if (cancelled) return;
        setError(err.message || 'Error cargando categoría');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [categoryId]);

  // Backend real devuelve: { category_description, category_name, id_category, photo_url }
  const name = category?.category_name || 'Servicio';
  const description = category?.category_description || '';
  const photo = category?.photo_url || plumbingImg;

  // Derivar tags básicos desde la descripción: tomar palabras clave separadas por espacio, filtrar muy cortas
  let derivedTags = [];
  if (description) {
    derivedTags = description
      .split(/[,.;\s]+/)
      .filter(w => w.length > 3)
      .slice(0, 5); // máximo 5
  }
  const tags = derivedTags.length ? derivedTags : [name];

  return (
    <div className="service-header">
      <div className="service-image">
        <img
          src={photo}
          alt={name}
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = plumbingImg; }}
        />
      </div>
      <div className="service-info">
        {loading && <h1>Cargando...</h1>}
        {error && !loading && <h1 style={{ color: '#b91c1c', fontSize: '1.1rem' }}>Error</h1>}
        {!loading && !error && <h1>{name}</h1>}
        {!loading && !error && description && (
          <p style={{ marginTop: 8, color: '#475569', maxWidth: 640, lineHeight: 1.4 }}>{description}</p>
        )}
        <div className="service-tags">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          {loading && <span>Cargando datos...</span>}
          {error && !loading && <span style={{ color: '#b91c1c' }}>{error}</span>}
          {!loading && !error && tags.map((t, i) => (
            <React.Fragment key={i}>
              <span>{t}</span>
              {i < tags.length - 1 && <span>•</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="service-categories">
          {/* Placeholder: si tu backend provee subcategorías u opciones específicas, mapéalas aquí */}
          {!loading && !error && tags.slice(0,4).map((t,i) => (
            <span key={i} className="category">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
