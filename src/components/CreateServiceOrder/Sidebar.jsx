import React from 'react'
import '../../styles/CreateServiceOrder/Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Consejos</h3>
        <p className="sidebar-text">
          Verifica los datos antes de generar la orden.
        </p>
        <h4 className="sidebar-subtitle">Resumen rápido</h4>
        <div className="sidebar-status">
          <svg className="status-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#6c757d" strokeWidth="2"/>
            <path d="M8 4V8L10.5 10.5" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="status-text">Sin completar</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
