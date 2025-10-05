import React from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceOptions from './ServiceOptions'
import ProfessionalsList from './ProfessionalsList'
import '../../styles/Services/ServiceContent.css'

const MainContent = ({ categoryId }) => {
  return (
    <main className="main-content">
      <ServiceHeader categoryId={categoryId} />
      <ServiceOptions categoryId={categoryId} />
      <ProfessionalsList categoryId={categoryId} />
    </main>
  )
}

export default MainContent
