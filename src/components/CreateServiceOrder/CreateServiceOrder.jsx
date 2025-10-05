import React from 'react'
import Breadcrumb from './Breadcrumb'
import ServiceOrderForm from './ServiceOrderForm'
import '../../styles/CreateServiceOrder/CreateServiceOrder.css'

function App() {
  return (
    <div className="app">
      {/* <Breadcrumb /> */}
      <div className="app-content">
        <ServiceOrderForm />
      </div>
    </div>
  )
}

export default App