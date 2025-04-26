import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './styles/custom.css';

function ItemListContainer() {
  const { categoryId } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      setCargando(true);

      const productosMock = [
        { id: 1, nombre: 'Smartphone', categoria: 'electronica', imagen: '/smartphone.jpg', precio: 699 },
        { id: 2, nombre: 'Camiseta', categoria: 'moda', imagen: '/camiseta.jpg', precio: 25 },
        { id: 3, nombre: 'Sofá', categoria: 'hogar', imagen: '/sofa.jpg', precio: 1200 },
        { id: 4, nombre: 'Balón de basket', categoria: 'deportes', imagen: '/balon.jpg', precio: 35 },
        { id: 5, nombre: 'Libro', categoria: 'libros', imagen: '/libro.jpg', precio: 10 },
      ];

      const productosFiltrados = categoryId
        ? productosMock.filter((producto) => producto.categoria === categoryId)
        : productosMock;

      setProductos(productosFiltrados);
      setCargando(false);
    };

    obtenerProductos();
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <div className="products-grid">
        <h2 className="section-title">
          {categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}
        </h2>
        {cargando ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="row g-4">
            {productos.map((producto) => (
              <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card product-card">
                  <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/item/${producto.id}`} className="btn btn-secondary">
                        Ver detalles
                      </Link>
                      <button
                        className="btn btn-primary"
                        onClick={() => agregarAlCarrito(producto)}
                      >
                        Añadir al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!cargando && productos.length === 0 && (
          <p>No se encontraron productos en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;