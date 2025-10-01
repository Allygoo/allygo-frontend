import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#" className="footer-link">Términos</a>
          <a href="#" className="footer-link">Privacidad</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>
        <div className="footer-copyright">
          © 2025 AllyGo
        </div>
      </div>
    </footer>
  )
}

export default Footer
