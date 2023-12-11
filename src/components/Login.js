import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/logoo.jpg';

const Login = () => {
  // Obtén el objeto history de react-router-dom
  const history = useHistory();

  // Función para manejar el clic en el botón de inicio de sesión
  const handleLogin = () => {
    // Puedes realizar lógica de autenticación aquí si es necesario

    // Redirige a la página de inicio (Home) después de iniciar sesión
    history.push('/home');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Exercise Logo" className="exercise-logo" />
      <h2 className="text-primary-emphasis text-opacity-75">Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" placeholder="**********" id="exampleInputPassword1" />
        </div>
        {/* Cambia el tipo de botón a "submit" y agrega un manejador de clic */}
        <button type="button" className="btn btn-outline-primary" onClick={handleLogin}>Iniciar Sesión</button>
      </form>

      <p>
        ¿Nuevo aquí? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
};

export default Login;
