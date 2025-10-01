import React from 'react'
import '../styles/ProfessionalSection.css'

const ProfessionalSection = () => {
  return (
    <section id="contacto" className="professional">
      <div className="professional-content">
        <h2 className="professional-title">¿Eres profesional?</h2>
        <p className="professional-subtitle">
          Crea tu perfil, recibe solicitudes y gestiona tus pagos en un solo lugar.
        </p>
        
        <div className="professional-features">
          <div className="professional-feature">Verificación</div>
          <div className="professional-feature">Pagos seguros</div>
          <div className="professional-feature">Estadísticas</div>
        </div>
        
        <div className="professional-actions">
          <button className="register-btn">Registrarme como profesional</button>
          <button className="info-btn">Más información</button>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSection
