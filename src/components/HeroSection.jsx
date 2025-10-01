import React from 'react'
import '../styles/HeroSection.css'
import professional from '../assets/mujeryhombre.jpg'

const HeroSection = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <div className="verified-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
              <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
            </svg>
            Profesionales verificados
          </div>
          
          <h1 className="hero-title">Servicios del hogar en minutos</h1>
          <p className="hero-subtitle">Ingresa tu ubicación y servicio</p>
          
          <div className="search-form">
            <div className="search-inputs">
              <input 
                type="text" 
                placeholder="¿Qué necesitas? (plomería, electricidad, limpieza...)"
                className="service-input"
              />
              <input 
                type="text" 
                placeholder="Dirección o zona"
                className="location-input"
              />
              <button className="search-button">Buscar</button>
            </div>
          </div>
          
          <div className="features">
            <div className="feature">Pagos protegidos</div>
            <div className="feature">Chat con el profesional</div>
            <div className="feature">Respuesta en minutos</div>
          </div>
        </div>
        
        <div className="hero-right">
          <img 
            src={professional}
            alt="Profesional trabajando"
            className="hero-image"
            referrerpolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
