import React from 'react'
import plumbingImg from '../assets/plumbing.jpg'
import keysImg from '../assets/keys.jpg'
import cleaningImg from '../assets/cleaning.jpg'
import lightsImg from '../assets/lights.jpg'
import constructionImg from '../assets/construction.jpg'
import '../styles/CategoriesSection.css'

const categories = [
  {
    name: 'Plomería',
    image: plumbingImg,
    link: 'Ver servicios'
  },
  {
    name: 'Electricidad',
    image: lightsImg,
    link: 'Ver servicios'
  },
  {
    name: 'Cerrajería',
    image: keysImg,
    link: 'Ver servicios'
  },
  {
    name: 'Albañilería',
    image: constructionImg,
    link: 'Ver servicios'
  },
  {
    name: 'Aseo',
    image: cleaningImg,
    link: 'Ver servicios'
  }
]

const CategoriesSection = () => {
  return (
    <section id="servicios" className="categories">
      <h2 className="categories-title">Explora categorías</h2>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img 
              src={category.image} 
              alt={category.name}
              className="category-image"
              referrerpolicy="no-referrer"
            />
            <div className="category-content">
              <h3 className="category-name">{category.name}</h3>
              <div className="category-actions">
                <span className="category-services">Ver servicios</span>
                <a href="#" className="category-link">Ver</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoriesSection
