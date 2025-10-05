import React from 'react'
import '../../styles/CreateServiceOrder/Breadcrumb.css'

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <span className="breadcrumb-item">Inicio</span>
      <svg className="breadcrumb-separator" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="breadcrumb-item">Órdenes</span>
      <svg className="breadcrumb-separator" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="breadcrumb-item active">Nueva orden de servicio</span>
    </nav>
  )
}

export default Breadcrumb
