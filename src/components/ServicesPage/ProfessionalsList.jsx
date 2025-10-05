import React from 'react'
import '../../styles/Services/ProfessionalsList.css'

const ProfessionalsList = () => {
  const professionals = [
    {
      id: 1,
      name: "Carlos R.",
      profession: "Plomero",
      rating: 4.9,
      reviews: 120,
      distance: "3 km",
      avatar: "https://dummyimage.com/60x60/6b7280/ffffff?text=CR"
    },
    {
      id: 2,
      name: "María L.",
      profession: "Técnica",
      rating: 4.8,
      reviews: 86,
      distance: "5 km",
      avatar: "https://dummyimage.com/60x60/6b7280/ffffff?text=ML"
    }
  ]

  return (
    <div className="professionals-section">
      <h2>Profesionales destacados</h2>
      <div className="professionals-grid">
        {professionals.map(professional => (
          <div key={professional.id} className="professional-card">
            <div className="professional-info">
              <img 
                src={professional.avatar} 
                alt={professional.name}
                referrerpolicy="no-referrer"
                className="professional-avatar"
              />
              <div className="professional-details">
                <h3>{professional.name} • {professional.profession}</h3>
                <div className="professional-stats">
                  <div className="rating">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{professional.rating} ({professional.reviews})</span>
                  </div>
                  <div className="distance">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{professional.distance}</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="view-profile-btn">Ver perfil</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalsList
