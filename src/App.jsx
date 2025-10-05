import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoriesSection from './components/CategoriesSection'
import ServicesSection from './components/ServicesSection'
import ReviewsSection from './components/ReviewsSection'
import ProfessionalSection from './components/ProfessionalSection'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserPage from './components/UserSection'
import './styles/App.css'

const HomePage = () => (
  <>
    <HeroSection />
    <CategoriesSection />
    <ServicesSection />
    <ReviewsSection />
    <ProfessionalSection />
  </>
)

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<MainContent />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
