import React, { useState } from 'react'
import camila from '../assets/camila.jpg'
import { 
  User, Mail, Phone, MapPin, Calendar, 
  Briefcase, Edit2, Shield, Bell, CreditCard 
} from 'lucide-react'
import '../styles/UserSection.css' // CSS externo para estilos profesionales

function UserPage() {
  const [user] = useState({
    name: "Maria Camila",
    email: "maria@gmail.com",
    address: "Calle 123, Bogotá, Colombia",
    phone: "+57 300 1234567",
    dob: "1995-08-20",
    role: "Usuario registrado",
    bio: "Hola mi nombre es Maria Camila.",
    avatar: "https://i.pravatar.cc/150?img=3",
    memberSince: "2023-01-15",
    servicesCompleted: 12,
    activeServices: 2
  })

  const handleEdit = () => {
    alert(`Editar perfil de ${user.name}`)
  }

  return (
    <div className="user-page">
  

      {/* Header Card */}
      <div className="user-card-header">
        <div className="bg-gradient"></div>
        <div className="user-card-content">
          <div className="user-card-top">
            <div className="user-avatar">
              <img src={camila} alt={user.name} />
              <div className="user-avatar-status"></div>
            </div>

            <div className="user-details">
              <h1>{user.name}</h1>
              <p className="user-role">
                <Shield className="icon" /> {user.role}
              </p>
              <p className="user-bio">{user.bio}</p>
            </div>

            <button onClick={handleEdit} className="edit-btn">
              <Edit2 className="icon" /> Editar perfil
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <div>
            <p className="stat-label">Servicios completados</p>
            <p className="stat-value">{user.servicesCompleted}</p>
          </div>
          <div className="icon-container bg-blue">
            <Briefcase className="icon" />
          </div>
        </div>

        <div className="stat-card green">
          <div>
            <p className="stat-label">Servicios activos</p>
            <p className="stat-value">{user.activeServices}</p>
          </div>
          <div className="icon-container bg-green">
            <Bell className="icon" />
          </div>
        </div>

        <div className="stat-card purple">
          <div>
            <p className="stat-label">Miembro desde</p>
            <p className="stat-value">
              {new Date(user.memberSince).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
            </p>
          </div>
          <div className="icon-container bg-purple">
            <Calendar className="icon" />
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="info-grid">
        {/* Contact Info */}
        <div className="info-card">
          <h2>
            <User className="icon" /> Información de contacto
          </h2>
          <div className="info-list">
            <div className="info-item">
              <div className="icon bg-blue"><Mail className="icon" /></div>
              <div>
                <p>Email</p>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon bg-green"><Phone className="icon" /></div>
              <div>
                <p>Teléfono</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon bg-orange"><MapPin className="icon" /></div>
              <div>
                <p>Dirección</p>
                <p>{user.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="info-card">
          <h2>
            <Calendar className="icon" /> Información personal
          </h2>
          <div className="info-list">
            <div className="info-item">
              <div className="icon bg-purple"><Calendar className="icon" /></div>
              <div>
                <p>Fecha de nacimiento</p>
                <p>{new Date(user.dob).toLocaleDateString('es-ES', { day:'numeric', month:'long', year:'numeric'})}</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon bg-blue"><User className="icon" /></div>
              <div>
                <p>Edad</p>
                <p>{new Date().getFullYear() - new Date(user.dob).getFullYear()} años</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon bg-indigo"><Shield className="icon" /></div>
              <div>
                <p>Tipo de cuenta</p>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="info-card quick-actions-card">
          <h2>Acciones rápidas</h2>
          <div className="quick-actions">
            <button className="quick-action-btn">
              <div className="icon-btn bg-blue"><Edit2 className="icon" /></div>
              Editar perfil
            </button>
            <button className="quick-action-btn">
              <div className="icon-btn bg-green"><Shield className="icon" /></div>
              Seguridad
            </button>
            <button className="quick-action-btn">
              <div className="icon-btn bg-purple"><CreditCard className="icon" /></div>
              Pagos
            </button>
            <button className="quick-action-btn">
              <div className="icon-btn bg-orange"><Bell className="icon" /></div>
              Notificaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage
