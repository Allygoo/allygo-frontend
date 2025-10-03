import React from 'react'
import Breadcrumb from './Breadcrumb'
import LoginSection from './LoginSection'
import BenefitsSection from './BenefitsSection'
import '../styles/MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-container">
        <Breadcrumb />
        <div className="content-grid">
          <BenefitsSection />
          <LoginSection />
        </div>
      </div>
    </main>
  )
}

export default MainContent