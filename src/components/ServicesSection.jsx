import React from 'react'
import '../styles/ServicesSection.css'

const services = [
  {
    title: 'Reparación de fuga',
    location: 'En tu zona',
    price: 'Desde $',
    action: 'Solicitar profesional'
  },
  {
    title: 'Cambio de grifo',
    duration: '1-2 horas',
    price: 'Precio estimado',
    action: 'Solicitar profesional'
  },
  {
    title: 'Destape de desagüe',
    warranty: 'Garantía AllyGo',
    action: 'Solicitar profesional'
  }
]

const ServicesSection = () => {
  return (
    <section className="services">
      <h2 className="services-title">Plomería, fugas, grifos y desagües</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <div className="service-details">
              {service.location && <span className="service-detail">{service.location}</span>}
              {service.duration && <span className="service-detail">{service.duration}</span>}
              {service.warranty && <span className="service-detail">{service.warranty}</span>}
              {service.price && <span className="service-price">{service.price}</span>}
            </div>
            <button className="service-button">{service.action}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
