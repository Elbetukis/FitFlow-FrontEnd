// src/components/modals/CreateRoutineModal.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CreateRoutineModal.css';

const CreateRoutineModal = ({ onClose }) => {
  const [routineName, setRoutineName] = useState('');
  const [intensity, setIntensity] = useState('');
  const [time, setTime] = useState('');

  const handleRoutineNameChange = (e) => {
    setRoutineName(e.target.value);
  };

  const handleIntensityChange = (e) => {
    setIntensity(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para guardar la rutina con los valores de nombre, intensidad y tiempo
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="create-routine-modal">
        <h2>Crear Rutina</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="routineName" className="form-label">Nombre de la Rutina</label>
            <input
              type="text"
              className="form-control"
              id="routineName"
              value={routineName}
              onChange={handleRoutineNameChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="intensity" className="form-label">Intensidad</label>
            <input
              type="text"
              className="form-control"
              id="intensity"
              value={intensity}
              onChange={handleIntensityChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">Tiempo</label>
            <input
              type="text"
              className="form-control"
              id="time"
              value={time}
              onChange={handleTimeChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Crear Rutina</button>
        </form>
        <p>
          <Link to="/Home" onClick={onClose}>Cancelar</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateRoutineModal;
