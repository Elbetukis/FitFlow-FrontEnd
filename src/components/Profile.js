// src/components/Profile.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/Profile.css';
import logo from '../images/logoo.jpg';

const Profile = () => {
  return (
    <div>
      <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <Link to="/Home" className="menu-item">Inicio</Link>
        <Link to="/profile" className="menu-item">Perfil</Link>
        <Link to="/community" className="menu-item">Comunidad</Link>
        <Link to="/progress-tracking" className="menu-item">Mi Progreso</Link>
      </div>

      <div className="profile-container">
        <h2 className="text-primary-emphasis text-opacity-75">Mi Perfil</h2>
        <div className="user-info">
          <FaUser className="user-icon" />
          <p className="user-name">Jesus Alberto</p>
          <p className="user-email">albert@gmail.com</p>
        </div>

        <div className="user-stats">
          <div className="stat">
            <p className="stat-label">Rutinas Completadas</p>
            <p className="stat-value">15</p>
          </div>
          <div className="stat">
            <p className="stat-label">Tiempo Total de Entrenamiento</p>
            <p className="stat-value">10 horas</p>
          </div>
          {/* Agrega más estadísticas según sea necesario */}
        </div>

        <Link to="/Home" className="btn btn-primary">Volver a Inicio</Link>
        <Link to="/" className="btn btn-danger">Cerrar Sesion</Link>
      </div>
    </div>
  );
};

export default Profile;
