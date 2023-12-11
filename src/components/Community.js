// src/components/Community.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import '../styles/Community.css';
import logo from '../images/logoo.jpg';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newComment, setNewComment] = useState('');

  return (
    <div className="community-container">
      <div className="menu">
        <img src={logo} alt="Logo" className="menu-logo" />
        <Link to="/Home" className="menu-item">Inicio</Link>
        <Link to="/profile" className="menu-item">Perfil</Link>
        <Link to="/community" className="menu-item">Comunidad</Link>
        <Link to="/progress-tracking" className="menu-item">Mi Progreso</Link>
      </div>

      <h2 className="text-primary-emphasis">Comunidad FitFlow</h2>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar en la comunidad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button><FiSearch /></button>
      </div>

      {/* Publicaciones en la comunidad */}
      <div className="card community-post">
  <div className="card-body">
    <h3 className="card-title">¡Hola FitFlow!</h3>
    <p className="card-text">Hoy completé mi primera rutina. ¡Fue increíble!</p>
    <p className="card-text post-author">Publicado por: Usuario1</p>
    <button type="button" className="btn btn-outline-success">Responder</button>
  </div>

    

        {/* Más publicaciones y comentarios aquí */}
      </div>
      <br></br>

      {/* Formulario para agregar comentario */}
      <div className="form-floating">
  <textarea
    className="form-control"
    placeholder="Añade tu comentario..."
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    style={{ height: '100px' }}
  ></textarea>
  <label htmlFor="floatingTextarea2">Comentario</label>
  <button className="reply-button">publicar</button>
</div>


      <Link to="/Home" className="btn btn-primary">Volver a Inicio</Link>
    </div>
  );
};

export default Community;
