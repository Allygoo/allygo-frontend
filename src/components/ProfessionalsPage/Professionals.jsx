import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sidebar from './Sidebar'
import ServiceCard from './ServiceCard'
import ProfessionalsList from './ProfessionalsList'
import '../../styles/Professionals/Professionals.css'

function App() {
  return (
    <div className="app">
      {/* <Breadcrumb /> */}
      <div className="professionals-layout">
        <Sidebar />
        <div className="professionals-content">
          <ServiceCard />
          <ProfessionalsList />
        </div>
      </div>
    </div>
  )
}

export default App
