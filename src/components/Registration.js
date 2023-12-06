import React from 'react';

const Registration = () => {
  return (
    <div className="container mt-5">
      <h2>Crear una cuenta en FitFlow</h2>
      {/* Formulario de registro con estilos de Bootstrap */}
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" />
        </div>
        {/* Otros campos del formulario */}
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
    </div>
  );
};

export default Registration;
