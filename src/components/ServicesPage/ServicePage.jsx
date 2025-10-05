import React from 'react'
import { useParams } from 'react-router-dom'
import MainContent from './ServiceContent'
import Sidebar from './Sidebar'
import '../../styles/Services/ServicePage.css'

const ServicePage = () => {
  const { categoryId } = useParams();
  // Normalizamos a número si existe
  const numericCategoryId = categoryId ? Number(categoryId) : undefined;
  return (
    <div className="app-body">
      <Sidebar categoryId={numericCategoryId} />
      <MainContent categoryId={numericCategoryId} />
    </div>
  )
}

export default ServicePage