import React from 'react'
import Breadcrumb from './Breadcrumb'
import ServiceOrderForm from './ServiceOrderForm'
import '../../styles/CreateServiceOrder/CreateServiceOrder.css'

function CreateServiceOrder({ professional, onClose, onSuccess }) {
  return (
    <div className="create-order-root">
      {/* <Breadcrumb /> */}
      <div className="app-content">
        <ServiceOrderForm 
          professional={professional}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      </div>
    </div>
  )
}

export default CreateServiceOrder