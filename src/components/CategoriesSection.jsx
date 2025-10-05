import React from 'react'
import plumbingImg from '../assets/plumbing.jpg'
import keysImg from '../assets/keys.jpg'
import cleaningImg from '../assets/cleaning.jpg'
import lightsImg from '../assets/lights.jpg'
import constructionImg from '../assets/construction.jpg'
import '../styles/CategoriesSection.css'
import { useNavigate } from 'react-router-dom'

const categories = [
  {
    name: 'Plomería',
    image: plumbingImg,
    subcategories: [
      'Reparación de tuberías',
      'Instalación de grifos',
      'Destape de desagües',
      'Reparación de inodoros',
      'Instalación de calentadores'
    ],
    route: '/services'
  },
  {
    name: 'Electricidad',
    image: lightsImg,
    subcategories: [
      'Instalación de luminarias',
      'Reparación de tomas',
      'Instalación de ventiladores',
      'Reparación de breakers',
      'Cableado eléctrico'
    ],
    route: '/services'
  },
  {
    name: 'Cerrajería',
    image: keysImg,
    subcategories: [
      'Apertura de puertas',
      'Cambio de chapas',
      'Duplicado de llaves',
      'Instalación de cerraduras',
      'Reparación de candados'
    ],
    route: '/services'
  },
  {
    name: 'Albañilería',
    image: constructionImg,
    subcategories: [
      'Reparación de muros',
      'Instalación de pisos',
      'Pintura de paredes',
      'Reparación de techos',
      'Construcción de divisiones'
    ],
    route: '/services'
  },
  {
    name: 'Aseo',
    image: cleaningImg,
    subcategories: [
      'Limpieza profunda',
      'Limpieza de ventanas',
      'Desinfección',
      'Limpieza de alfombras',
      'Limpieza post-construcción'
    ],
    route: '/services'
  }
]


function CategoryCard({ name, image, subcategories, route}, index) {
  const navigate = useNavigate();

  const go = () => {
    navigate(route);
  };

  return (
    <div key={index} className="category-card" onClick={go} onKeyDown={(e) => { if (e.key === 'Enter') go(); }}>
      <img 
        src={image} 
        alt={name}
        className="category-image"
        referrerPolicy="no-referrer"
      />
      <div className="category-content">
        <h3 className="category-name">{name}</h3>
      </div>

      {/* Subcategorías SIEMPRE visibles */}
      <div className="category-subcategories">
        <h4 className="subcategories-title">Servicios disponibles:</h4>
        <ul className="subcategories-list">
          {subcategories.map((sub, i) => (
            <li key={i} className="subcategory-item">{sub}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CategoriesSection = () => {
  return (
    <section id="servicios" className="categories">
      <h2 className="categories-title">Explora categorías</h2>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard
            name={category.name}
            image={category.image}
            subcategories={category.subcategories}
            route={category.route}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoriesSection
