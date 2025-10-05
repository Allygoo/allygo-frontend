import React, { useState } from 'react'
import '../styles/PasswordResetModal.css'

function PasswordResetModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Enviar email de restablecimiento
  const handleSendResetEmail = async () => {
    if (!email) {
      alert('Por favor ingresa tu correo')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      })

      if (response.ok) {
        alert('Se ha enviado un enlace de restablecimiento a tu correo electrónico. Revisa tu bandeja de entrada.')
        onClose()
        resetForm()
      } else {
        throw new Error('Error al enviar email')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al enviar el email. Intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  // Resetear formulario
  const resetForm = () => {
    setEmail('')
    setIsLoading(false)
  }

  // Cerrar modal
  const handleClose = () => {
    resetForm()
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <>
          <h2 className="modal-title">Restablecer contraseña</h2>

          <div className="reset-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="reset-input"
                disabled={isLoading}
              />
            </div>

            <p className="reset-description">
              Te enviaremos un enlace para restablecer tu contraseña
            </p>

            <button 
              className="send-code-btn"
              onClick={handleSendResetEmail}
              disabled={isLoading}
            >
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m4 4 16 8-16 8Z"/>
              </svg>
              {isLoading ? 'Enviando...' : 'Enviar enlace'}
            </button>

            <button 
              className="back-to-login"
              onClick={handleClose}
            >
              ¿Recordaste tu contraseña? Volver al login
            </button>
          </div>
        </>
      </div>
    </div>
  )
}

export default PasswordResetModal