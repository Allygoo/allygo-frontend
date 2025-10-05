import React, { useState } from 'react'
import '../../styles/Professionals/ProfessionalCard.css'
import Modal from '../Modal/Modal'
import CreateServiceOrder from '../CreateServiceOrder/CreateServiceOrder'

const ProfessionalCard = ({ professional }) => {
  const { name, type, rating, reviewCount, availability, image } = professional

  // Estado del modal: inicia cerrado
  const [open, setOpen] = useState(false)

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Hoy':
        return '#10b981'
      case 'Esta semana':
        return '#f59e0b'
      case 'Próxima semana':
        return '#6b7280'
      default:
        return '#6b7280'
    }
  }

  return (
    <div className="professional-card">
      <div className="professional-header">
        <img 
          src={image} 
          alt={name}
          className="professional-avatar"
          referrerPolicy="no-referrer"
        />
        <div className="professional-info">
          <h3 className="professional-name">{name}</h3>
          <span className="professional-type">{type}</span>
        </div>
  <button className="btn-profile" onClick={() => setOpen(true)}>Solicitar Servicio</button>
      </div>
      
      <div className="professional-stats">
        <div className="stat-item">
          <div className="rating">
            <svg className="star-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.545 4.755h5l-4.045 2.94 1.545 4.755L8 10.51l-4.045 2.94L5.5 8.695 1.455 5.755h5L8 1Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1"/>
            </svg>
            <span className="rating-value">{rating}</span>
            <span className="review-count">({reviewCount})</span>
          </div>
        </div>
        
        <div className="stat-item">
          <div className="availability">
            <svg className="clock-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke={getAvailabilityColor(availability)} strokeWidth="1.5"/>
              <path d="M8 4v4l2.5 2.5" stroke={getAvailabilityColor(availability)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="availability-text" style={{ color: getAvailabilityColor(availability) }}>
              {availability}
            </span>
          </div>
        </div>
      </div>
      {/* Modal para crear orden */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateServiceOrder />
      </Modal>
    </div>
  )
}

export default ProfessionalCard
