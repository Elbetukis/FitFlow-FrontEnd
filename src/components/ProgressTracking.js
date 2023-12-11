// src/components/ProgressTracking.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosFitness } from 'react-icons/io';  // Importa el ícono de react-icons/io
import '../styles/ProgressTracking.css';  // Asegúrate de importar tus estilos
import logo from '../images/logoo.jpg';

const ProgressTracking = () => {
  const routines = [
    { name: 'Rutina A', progress: 75 },
    { name: 'Rutina B', progress: 50 },
  ];

  const overallProgress =
    routines.reduce((total, routine) => total + routine.progress, 0) /
    routines.length;

  return (
    <div>
     <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <Link to="/Home" className="menu-item">Inicio</Link>
        <Link to="/profile" className="menu-item">Perfil</Link>
        <Link to="/community" className="menu-item">Comunidad</Link>
        <Link to="/progress-tracking" className="menu-item">Mi Progreso</Link>
      </div>
      <div className="progress-container">
        <h2 className="text-primary-emphasis text-opacity-75">
          Seguimiento de Progreso
        </h2>
        <p>Mis rutinas</p>

        {routines.map((routine, index) => (
          <div key={index} className="routine-progress">
            <p>{routine.name}: {routine.progress}%</p>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${routine.progress}%` }}
              >
                <IoIosFitness className="progress-icon" />
              </div>
            </div>
          </div>
        ))}

        <div className="overall-progress">
          <p>Progreso General: {overallProgress.toFixed(2)}%</p>
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{ width: `${overallProgress}%` }}
            >
              <IoIosFitness className="progress-icon" />
            </div>
          </div>
        </div>

        <Link to="/Home" className="btn btn-primary">
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default ProgressTracking;
