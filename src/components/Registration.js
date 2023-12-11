// src/components/Registration.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/registration.css';
import logo from '../images/logoo.jpg';

const Registration = () => {
  return (
    <div className="registration-container">
      <img src={logo} alt="Exercise Logo" className="exercise-logo" />
      <h2 className="text-primary-emphasis text-opacity-75">Registro</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Nombre" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="example@gmail.com" id="exampleInputEmail" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="**********" id="exampleInputPassword" />
        </div>
        <button type="button" className="btn btn-outline-primary">Registrarse</button>
      </form>

      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
      </p>
    </div>
  );
};

export default Registration;

