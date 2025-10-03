import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Breadcrumb.css'

function Breadcrumb() {
  const navigate = useNavigate()

  return (
    <div className="breadcrumb-container">
      <nav className="breadcrumb">
        <button 
          onClick={() => navigate('/')} 
          className="breadcrumb-link"
        >
          Inicio
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Accede o crea tu cuenta</span>
      </nav>
      <div className="security-badge">
        <svg className="security-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <span>Seguridad garantizada</span>
      </div>
    </div>
  )
}

export default Breadcrumb