import React from 'react'
import '../../styles/Services/Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-section">
        <h3>Filtrar</h3>
        <div className="search-box">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Buscar en Plomería" />
        </div>
      </div>

      <div className="filter-section">
        <h4>Rango de precio</h4>
        <div className="price-range">
          <input type="number" placeholder="Desde" />
          <span>-</span>
          <input type="number" placeholder="Hasta" />
        </div>
      </div>

      <div className="filter-section">
        <h4>Tipo de trabajo</h4>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Urgente
          </label>
          <label className="checkbox-item">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Programado
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h4>Garantía</h4>
        <label className="checkbox-item">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Con garantía AllyGo
        </label>
      </div>
    </aside>
  )
}

export default Sidebar
