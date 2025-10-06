import React from 'react'
import '../../styles/MyServiceOrders/Sidebar.css'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Filtros</h3>
        <p className="sidebar-subtitle">Permitirán una búsqueda de orden de una manera más sencilla</p>
        
        <div className="filter-group">
          <label className="filter-label">Estado</label>
          <div className="filter-dropdown">
            <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="dropdown-text">Todos</span>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">Rango de fecha</label>
          <div className="date-filter">
            <svg className="calendar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6667 1.33333V4" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.33333 1.33333V4" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 6.66667H14" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="date-text">Últimos 30 días</span>
          </div>
        </div>

        {/* <div className="filter-group">
          <label className="filter-label">Ubicación</label>
          <div className="location-filter">
            <svg className="location-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54925 3.75736 2.42403C4.88258 1.29881 6.40869 0.666672 8 0.666672C9.59131 0.666672 11.1174 1.29881 12.2426 2.42403C13.3679 3.54925 14 5.07536 14 6.66667Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="location-text">Cualquiera</span>
          </div>
        </div> */}

        <div className="filter-group">
          <label className="filter-label">Profesional</label>
          <div className="professional-filter">
            <svg className="user-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44772 10.781C2.94762 11.2811 2.66667 11.9594 2.66667 12.6667V14" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33333 3.19391 5.33333 4.66667C5.33333 6.13943 6.52724 7.33333 8 7.33333Z" stroke="#6B7280" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="professional-text">Todos</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
