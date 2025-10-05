import React, { useState } from 'react'
import '../../styles/Professionals/Sidebar.css'

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')

  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h3 className="filter-title">Filtrar profesionales</h3>
        
        <div className="search-box">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" stroke="#9CA3AF" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            type="text"
            placeholder="Buscar profesionales"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {/* <div className="filter-section">
        <h3 className="filter-title">Rango de precio</h3>
        <div className="price-inputs">
          <div className="price-input-group">
            <span className="price-label">Desde</span>
            <input
              type="text"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              className="price-input"
            />
          </div>
          <div className="price-input-group">
            <span className="price-label">Hasta</span>
            <input
              type="text"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              className="price-input"
            />
          </div>
        </div>
      </div> */}

      <div className="filter-section">
        <h3 className="filter-title">Calificación</h3>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          4.5+ estrellas
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          Con reseñas verificadas
        </label>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Disponibilidad</h3>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          Hoy
        </label>
        <label className="checkbox-label">
          <input type="checkbox" className="checkbox" />
          Esta semana
        </label>
      </div>
    </aside>
  )
}

export default Sidebar
