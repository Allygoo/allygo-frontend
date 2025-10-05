import React from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceOptions from './ServiceOptions'
import ProfessionalsList from './ProfessionalsList'
import '../../styles/Services/ServiceContent.css'

const MainContent = () => {
  return (
    <main className="main-content">
      <ServiceHeader />
      <ServiceOptions />
      <ProfessionalsList />
    </main>
  )
}

export default MainContent
