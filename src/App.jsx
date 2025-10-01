import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import ServicesSection from './components/ServicesSection'
import ReviewsSection from './components/ReviewsSection'
import ProfessionalSection from './components/ProfessionalSection'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ServicesSection />
        <ReviewsSection />
        <ProfessionalSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
