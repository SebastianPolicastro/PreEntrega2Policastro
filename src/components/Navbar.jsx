import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './styles/custom.css';


function Navbar() {
  const { cantidadCarrito } = useContext(CartContext);

  const categorias = [
    { id: 'electronica', nombre: 'Electrónica' },
    { id: 'ropa', nombre: 'Ropa' },
    { id: 'hogar', nombre: 'Hogar' },
    { id: 'deportes', nombre: 'Deportes' },
    { id: 'libros', nombre: 'Libros' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/logo.webp" alt="Logo" className="navbar-logo me-2" />
          <span className="brand-name">MiTienda</span>
        </Link>

        <div className="cart-container">
          <Link to="/carrito" className="btn btn-outline-primary d-flex align-items-center">
            <i className="bi bi-cart me-2"></i>
            Carrito <span className="badge bg-danger ms-2">{cantidadCarrito}</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link styled-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link styled-link">
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link styled-link">
                Contáctanos
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle styled-link"
                href="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                {categorias.map((categoria) => (
                  <li key={categoria.id}>
                    <Link to={`/categoria/${categoria.id}`} className="dropdown-item">
                      {categoria.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;