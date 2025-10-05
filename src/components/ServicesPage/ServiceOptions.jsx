import React from 'react'
import '../../styles/Services/ServiceOptions.css'

const ServiceOptions = () => {
  return (
    <div className="service-options">
      <div className="service-option">
        <h3>Reparación de fuga</h3>
        <div className="option-details">
          <div className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Cerca de ti • Desde $</span>
          </div>
        </div>
        <button className="select-btn">Seleccionar</button>
      </div>

      <div className="service-option">
        <h3>Cambio de grifo</h3>
        <div className="option-details">
          <div className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span>1-2 horas • Precio estimado</span>
          </div>
        </div>
        <button className="select-btn">Seleccionar</button>
      </div>

      <div className="service-option">
        <h3>Destape de desagüe</h3>
        <div className="option-details">
          <div className="detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
            </svg>
            <span>Garantía AllyGo</span>
          </div>
        </div>
        <button className="select-btn">Seleccionar</button>
      </div>
    </div>
  )
}

export default ServiceOptions
