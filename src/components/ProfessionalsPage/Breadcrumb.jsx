import React from 'react'
import '../../styles/Professionals/Breadcrumb.css'

const Breadcrumb = () => {
  const breadcrumbItems = [
    { text: 'Inicio', active: false },
    { text: 'Servicios', active: false },
    { text: 'Plomería', active: false },
    { text: 'Reparación de fuga', active: true }
  ]

  return (
    <nav className="breadcrumb">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
            {item.text}
          </span>
          {index < breadcrumbItems.length - 1 && (
            <span className="breadcrumb-separator">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 1L5 5L1 9" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

export default Breadcrumb
