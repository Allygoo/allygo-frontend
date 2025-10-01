import React from 'react'
import '../styles/ReviewsSection.css'

const reviews = [
  {
    name: 'Andrea',
    service: 'Plomería',
    review: 'Excelente servicio, resolvieron la fuga en menos de una hora.',
    avatar: 'https://dummyimage.com/40x40/0066cc/ffffff?text=A'
  },
  {
    name: 'Luis',
    service: 'Electricidad',
    review: 'Rápidos y profesionales, muy recomendado.',
    avatar: 'https://dummyimage.com/40x40/e76f51/ffffff?text=L'
  },
  {
    name: 'Marta',
    service: 'Aseo',
    review: 'Dejaron el departamento impecable.',
    avatar: 'https://dummyimage.com/40x40/2a9d8f/ffffff?text=M'
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
