import React from 'react'
import '../styles/ProfessionalSection.css'

const ProfessionalSection = () => {
  return (
    <section id="contacto" className="professional">
      <div className="professional-content">
        <h2 className="professional-title">¿Eres profesional o te interesa algún servicio?</h2>
        <p className="professional-subtitle">
          Crea tu perfil, recibe o crea solicitudes y gestiona tus pagos en un solo lugar.
        </p>
        
        <div className="professional-features">
          <div className="professional-feature">Verificación</div>
          <div className="professional-feature">Pagos seguros</div>
          <div className="professional-feature">Estadísticas</div>
        </div>
        
        <div className="professional-actions">
          <button className="register-btn">Regístrate!</button>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSection
