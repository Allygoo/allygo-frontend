import React from 'react'
import '../../styles/Professionals/ServiceCard.css'

const ServiceCard = () => {
  return (
    <div className="service-card">
      <div className="service-header">
        <div className="service-icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M20 8L28 16L20 24L12 16L20 8Z" fill="#6B7280"/>
            <path d="M8 20L16 28L24 20L16 12L8 20Z" fill="#9CA3AF"/>
            <path d="M32 20L40 28L32 36L24 28L32 20Z" fill="#6B7280"/>
            <path d="M20 32L28 40L20 48L12 40L20 32Z" fill="#9CA3AF"/>
          </svg>
        </div>
        
        <div className="service-info">
          <div className="service-title-row">
            <h1 className="service-title">Reparación de fuga</h1>
            <div className="service-badges">
              <span className="badge">Plomería</span>
              <span className="badge">Urgencias y programado</span>
            </div>
          </div>
          
          <div className="service-details">
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                <path d="M8 4v4l2.5 2.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Cerca de ti</span>
            </div>
            
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 14.5c3.59 0 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5Z" stroke="#6B7280" strokeWidth="1.5"/>
                <path d="M8 4v4l2.5 2.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>1-2 h promedio</span>
            </div>
            
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.5 7.5L8 1L1.5 7.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Garantía AllyGo promedio</span>
            </div>
            
            <div className="detail-item">
              <svg className="detail-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.545 4.755h5l-4.045 2.94 1.545 4.755L8 10.51l-4.045 2.94L5.5 8.695 1.455 5.755h5L8 1Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1"/>
              </svg>
              <span>4.8 promedio</span>
            </div>
          </div>
        </div>
        
        <div className="service-actions">
          <button className="btn-outline">Ver detalles</button>
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
              <li>Diagnóstico básico • Mano de obra</li>
            </ul>
          </div>
          
          <div className="includes-section">
            <h4>Hasta 1 h</h4>
            <ul>
              <li>Materiales</li>
              <li>No incluidos • A cotizar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
