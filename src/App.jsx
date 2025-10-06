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
import Services from './components/ServicesPage/ServicePage'
import Professionals from './components/ProfessionalsPage/Professionals'
import MyServiceOrders from './components/MyServiceOrders/MyServiceOrders'
import UserPage from './components/UserSection'
import CreateService from './components/CreateService'
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/:categoryId" element={<Services />} />
          <Route path="/services/:categoryId/professionals/:serviceId" element={<Professionals />} />
          <Route path="/my-service-orders" element={<MyServiceOrders />} />

          <Route path="/user" element={<UserPage />} />
          <Route path="/create-service" element={<CreateService />} />

        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
