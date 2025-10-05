import React from 'react'
import MainContent from './ServiceContent'
import Sidebar from './Sidebar'
import '../../styles/Services/ServicePage.css'

const ServicePage = () => {
    return (
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    )
}

export default ServicePage