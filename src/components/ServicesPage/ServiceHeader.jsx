import React from 'react'
import plumbingImg from '../../assets/plumbing.jpg'
import '../../styles/Services/ServiceHeader.css'

const ServiceHeader = () => {
  return (
    <div className="service-header">
      <div className="service-image">
        <img 
          src={plumbingImg}
          alt="Plomería"
          referrerpolicy="no-referrer"
        />
      </div>
      <div className="service-info">
        <h1>Plomería</h1>
        <div className="service-tags">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span>Reparaciones</span>
          <span>•</span>
          <span>Instalaciones</span>
          <span>•</span>
          <span>Emergencias</span>
        </div>
        <div className="service-categories">
          <span className="category">Fugas</span>
          <span className="category">Grifos</span>
          <span className="category">Desagües</span>
          <span className="category">Calentadores</span>
        </div>
      </div>
      <button className="request-professional-btn">
        Solicitar profesional
      </button>
    </div>
  )
}

export default ServiceHeader
