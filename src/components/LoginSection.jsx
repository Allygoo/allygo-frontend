import React, { useState } from 'react'
import '../styles/LoginSection.css'

function LoginSection() {
  const [activeTab, setActiveTab] = useState('login')
  
  // Estados para login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  // Estados para registro
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = useState('consumer') 
  const [acceptTerms, setAcceptTerms] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (activeTab === 'login') {
      handleLogin()
    } else {
      handleRegister()
    }
  }
  
  const handleLogin = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          rememberMe: rememberMe
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Login exitoso:', data)
        alert('¡Inicio de sesión exitoso!')
        // Aquí puedes manejar el token, redireccionar, etc.
        // localStorage.setItem('token', data.token)
      } else if (response.status === 401) {
        alert('Credenciales inválidas. Por favor verifica tu email y contraseña.')
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error en login:', error)
      alert('Error al iniciar sesión. Por favor intenta nuevamente.')
    }
  }
  
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones')
      return
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          userType: userType,
          acceptTerms: acceptTerms
        })
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Registro exitoso:', data)
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.')
        // Cambiar automáticamente a la pestaña de login
        setActiveTab('login')
        // Limpiar formulario
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setUserType('consumer')
        setAcceptTerms(false)
      } else if (response.status === 400) {
        alert('Datos de usuario inválidos. Por favor verifica la información.')
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error en registro:', error)
      alert('Error al registrar usuario. Por favor intenta nuevamente.')
    }
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
              <div className="form-group form-row">
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
              </div>
              
              <div className="form-group">
                <div className="input-container">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <path d="M20 8v6M23 11h-6"></path>
                  </svg>
                  <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-input form-select"
                    required
                  >
                    <option value="consumer">Persona que consume servicios</option>
                    <option value="professional">Profesional que ofrece servicios</option>
                  </select>
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
      </div>
    </section>
  )
}

export default LoginSection
