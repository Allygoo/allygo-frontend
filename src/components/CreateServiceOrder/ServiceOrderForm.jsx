import React from 'react'
import Sidebar from './Sidebar'
import FormContent from './FormContent'
import '../../styles/CreateServiceOrder/ServiceOrderForm.css'

const ServiceOrderForm = () => {
  return (
    <div className="service-order-container">
      <Sidebar />
      <FormContent />
    </div>
  )
}

export default ServiceOrderForm
