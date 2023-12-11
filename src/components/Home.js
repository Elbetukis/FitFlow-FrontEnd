// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import CreateRoutineModal from './modals/CreateRoutineModal';
import logo from '../images/logoo.jpg';

const Home = () => {
  const [isCreateRoutineModalOpen, setCreateRoutineModalOpen] = useState(false);

  const openCreateRoutineModal = () => {
    setCreateRoutineModalOpen(true);
  };

  const closeCreateRoutineModal = () => {
    setCreateRoutineModalOpen(false);
  };

  return (
    <div>
      <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <Link to="/Home" className="menu-item">Inicio</Link>
        <Link to="/profile" className="menu-item">Perfil</Link>
        <Link to="/community" className="menu-item">Comunidad</Link>
        <Link to="/progress-tracking" className="menu-item">Mi Progreso</Link>
      </div>

      <div className="home-container">
        <h2 className="text-primary-emphasis text-opacity-75">Bienvenido a FitFlow</h2>
        <p>Descubre nuevas rutinas, sigue tu progreso y alcanza tus metas de bienestar.</p>

        <div className="cta-buttons">
          <button onClick={openCreateRoutineModal} className="btn btn-primary">Crear Rutina</button>
          <Link to="/progress-tracking" className="btn btn-secondary">Seguimiento de Progreso</Link>
        </div>

        <div className="wellness-tips">
          <h3>Consejos de Bienestar</h3>
          <p>Consume una dieta equilibrada y rica en nutrientes.</p>
          <p>Realiza ejercicios de estiramiento antes y después del entrenamiento.</p>
        </div>

        <div className="community-section">
          <h3>Comunidad FitFlow</h3>
          <p>Únete a nuestra comunidad, comparte tu progreso y motiva a otros.</p>
          <Link to="/community" className="btn btn-outline-primary">Ir a la Comunidad</Link>
        </div>
      </div>

      {isCreateRoutineModalOpen && <CreateRoutineModal onClose={closeCreateRoutineModal} />}
    </div>
  );
};

export default Home;
