import React, { useState } from 'react'
import '../styles/CreateService.css'

function CreateService() {
  const [serviceData, setServiceData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
    duration: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setServiceData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Servicio creado:', serviceData)
    alert('¡Servicio creado exitosamente!')
    // Aquí implementarías la lógica para enviar a la API
  }

  return (
    <div className="create-service-container">
      <div className="create-service-header">
        <h1>Crear Nuevo Servicio</h1>
        <p>Completa la información para ofrecer tu servicio</p>
      </div>

      <form className="create-service-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="title">Título del Servicio</label>
            <input
              type="text"
              id="title"
              name="title"
              value={serviceData.title}
              onChange={handleInputChange}
              placeholder="Ej: Plomería Residencial"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={serviceData.category}
              onChange={handleInputChange}
              className="form-input form-select"
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="plomeria">Plomería</option>
              <option value="electricidad">Electricidad</option>
              <option value="carpinteria">Carpintería</option>
              <option value="limpieza">Limpieza</option>
              <option value="jardineria">Jardinería</option>
              <option value="pintura">Pintura</option>
              <option value="construccion">Construcción</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio (€)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={serviceData.price}
              onChange={handleInputChange}
              placeholder="0.00"
              min="0"
              step="0.01"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duración estimada</label>
            <select
              id="duration"
              name="duration"
              value={serviceData.duration}
              onChange={handleInputChange}
              className="form-input form-select"
              required
            >
              <option value="">Selecciona duración</option>
              <option value="30min">30 minutos</option>
              <option value="1h">1 hora</option>
              <option value="2h">2 horas</option>
              <option value="4h">4 horas</option>
              <option value="1day">1 día</option>
              <option value="custom">Personalizada</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="location">Ubicación</label>
            <input
              type="text"
              id="location"
              name="location"
              value={serviceData.location}
              onChange={handleInputChange}
              placeholder="Ciudad, región"
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Descripción del Servicio</label>
          <textarea
            id="description"
            name="description"
            value={serviceData.description}
            onChange={handleInputChange}
            placeholder="Describe detalladamente tu servicio, experiencia y lo que incluye..."
            className="form-textarea"
            rows="5"
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary">
            Guardar como Borrador
          </button>
          <button type="submit" className="btn-primary">
            <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Publicar Servicio
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateService