import React from 'react'
import camila from '../assets/camila.jpg'
import sergio from '../assets/sergio.jpg'
import ambar from '../assets/ambar.jpg'
import '../styles/ReviewsSection.css'

const reviews = [
  {
    name: 'Camila',
    service: 'Plomería',
    review: 'Excelente servicio, resolvieron la fuga en menos de una hora.',
    avatar: camila
  },
  {
    name: 'Sergio',
    service: 'Electricidad',
    review: 'Rápidos y profesionales, muy recomendado.',
    avatar: sergio
  },
  {
    name: 'Ambar',
    service: 'Aseo',
    review: 'Dejaron el departamento impecable.',
    avatar: ambar
  }
]

const ReviewsSection = () => {
  return (
    <section id="opiniones" className="reviews">
      <h2 className="reviews-title">Opiniones recientes</h2>
      
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="review-avatar"
                referrerpolicy="no-referrer"
              />
              <div className="review-info">
                <h4 className="review-name">{review.name}</h4>
                <span className="review-service">{review.service}</span>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection
