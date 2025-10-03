import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'
import agLogo from '../assets/ag.png'

const Header = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
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
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#opiniones" className="nav-link">Opiniones</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <div className="header-actions">
          <button className="publish-btn" onClick={handleLoginClick}>
            Iniciar Sesión / Registro
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
