import React from 'react'
import '../../styles/MyServiceOrders/Breadcrumb.css'

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <span className="breadcrumb-item">Inicio</span>
      <svg className="breadcrumb-separator" width="6" height="10" viewBox="0 0 6 10" fill="none">
        <path d="M1 1L5 5L1 9" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="breadcrumb-item">Órdenes</span>
      <svg className="breadcrumb-separator" width="6" height="10" viewBox="0 0 6 10" fill="none">
        <path d="M1 1L5 5L1 9" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="breadcrumb-item active">Todas las órdenes de servicio</span>
    </nav>
  )
}

export default Breadcrumb
