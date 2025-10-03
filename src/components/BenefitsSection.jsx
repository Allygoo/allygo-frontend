import React from 'react'
import image from '../assets/loginimage.jpg'
import '../styles/BenefitsSection.css'

function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="hero-image">
        <img 
          src={image}
          alt="Professional working on roof"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="benefits-content">
        <h2 className="benefits-title">¿Cómo funciona?</h2>
        
        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5,4.21 12,6.81 16.5,4.21"></polyline>
                <polyline points="7.5,19.79 7.5,14.6 3,12"></polyline>
                <polyline points="21,12 16.5,14.6 16.5,19.79"></polyline>
              </svg>
            </div>
            <span>Busca el servicio que necesitas</span>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <span>Conversa con profesionales verificados</span>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <span>Paga seguro y califica el trabajo</span>
          </div>
        </div>
        
        <div className="rating-section">
          <div className="rating-stars">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffd700" stroke="#ffd700">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
            </svg>
            4.9/5 promedio
          </div>
          <div className="verification-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            Identidad verificada
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
