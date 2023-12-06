// src/components/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/logoo.jpg';

const Login = () => {
  return (
    <div className="login-container">
      <img src={logo} alt="Exercise Logo" className="exercise-logo" />
      <h2 class="text-primary-emphasis text-opacity-75">Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control"placeholder="example@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="**********" id="exampleInputPassword1" />
        </div>
        <button type="button" class="btn btn-outline-primary">Iniciar Sesión</button>
      </form>

      <p>
        ¿Nuevo aquí? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
