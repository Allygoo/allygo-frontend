import React from 'react'
import Sidebar from './Sidebar'
import FormContent from './FormContent'
import '../../styles/CreateServiceOrder/ServiceOrderForm.css'

const ServiceOrderForm = ({ professional, onClose, onSuccess }) => {
  return (
    <div className="service-order-container">
      <Sidebar />
      <FormContent 
        professional={professional}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    </div>
  )
}

export default ServiceOrderForm
