import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/Header.css'
import agLogo from '../assets/ag.png'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [location]) 

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleLogoutClick = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
    alert('Sesión cerrada exitosamente')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

    return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <button onClick={handleLogoClick} className="logo-icon">
            <img className="logo-image" src={agLogo} alt="allygoicon" />
          </button>
        </div>
        
        <nav className="nav">
          <button className="nav-link" onClick={handleLogoClick}>Inicio</button>
          <a href = "#servicios" className="nav-link" >Servicios</a>
          <a href="#opiniones" className="nav-link">Opiniones</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <div className="header-actions">
          {user ? (
            <div className="user-menu">
              <span className="user-greeting">
                Hola, {user.firstName || user.email.split('@')[0]}
              </span>
              <button className="logout-btn" onClick={handleLogoutClick}>
                <svg className="logout-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16,17 21,12 16,7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <button className="publish-btn" onClick={handleLoginClick}>
              Registrarse / Iniciar Sesión
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
