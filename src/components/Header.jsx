import React from 'react'
import '../styles/Header.css'
import agLogo from '../assets/ag.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="#inicio" className="logo-icon">
            <img className="logo-image" src={agLogo} alt="allygoicon" />
          </a>
        </div>
        
        <nav className="nav">
          <a href="#inicio" className="nav-link">Inicio</a>
          <a href="#servicios" className="nav-link">Servicios</a>
          <a href="#opiniones" className="nav-link">Opiniones</a>
          <a href="#contacto" className="nav-link">Contacto</a>
        </nav>

        <div className="header-actions">
          <button className="publish-btn">Iniciar Sesión / Registro</button>
        </div>
      </div>
    </header>
  )
}

export default Header
