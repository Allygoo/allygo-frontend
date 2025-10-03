import React, { useState } from 'react'
import '../styles/LoginSection.css'

function LoginSection() {
  const [activeTab, setActiveTab] = useState('login')
  
  // Estados para login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  // Estados adicionales para registro
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeTab === 'login') {
      handleLogin()
    } else {
      handleRegister()
    }
  }
  
  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe })
    // Aquí implementarías la lógica de login
  }
  
  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones')
      return
    }
    console.log('Register attempt:', { 
      firstName, 
      lastName, 
      email, 
      password,
      acceptTerms 
    })
    // Aquí implementarías la lógica de registro
  }

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-tabs">
          <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <>
              <div className="form-group">
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="form-group">
            <div className="input-container">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-container">
              <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>
          </div>
          
          {activeTab === 'register' && (
            <div className="form-group">
              <div className="input-container">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="form-options">
            {activeTab === 'login' ? (
              <>
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Recordarme
                </label>
                <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
              </>
            ) : (
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                Acepto los <a href="#" className="terms-link">términos y condiciones</a>
              </label>
            )}
          </div>
          
          <button type="submit" className="login-button">
            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {activeTab === 'login' ? (
                <>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10,17 15,12 10,7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </>
              ) : (
                <>
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </>
              )}
            </svg>
            {activeTab === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
          </button>
        </form>
        
        <div className="signup-prompt">
          {activeTab === 'login' ? (
            <>
              <span>¿Nuevo en AllyGo? </span>
              <button 
                type="button" 
                className="signup-link" 
                onClick={() => setActiveTab('register')}
              >
                Crear cuenta
              </button>
            </>
          ) : (
            <>
              <span>¿Ya tienes cuenta? </span>
              <button 
                type="button" 
                className="signup-link" 
                onClick={() => setActiveTab('login')}
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
        
        <div className="terms">
          <span>Al continuar aceptas los </span>
          <a href="#" className="terms-link">Términos</a>
          <span> y la </span>
          <a href="#" className="terms-link">Política de privacidad</a>
          <span>.</span>
        </div>
      </div>
    </section>
  )
}

export default LoginSection
