import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './styles/custom.css';

function ItemDetailContainer() {
  const { id } = useParams();
  const { agregarAlCarrito } = useContext(CartContext);
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      const data = await mockFetchItemById(id);
      setProducto(data);
    };
    obtenerProducto();
  }, [id]);

  if (!producto) {
    return <p className="text-center">Cargando...</p>;
  }

  return (
    <div className="container mt-5 text-center">
      <div className="card item-detail-card">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h2 className="card-title">{producto.nombre}</h2>
          <p className="card-text">{producto.descripcion}</p>
          <p className="price">Precio: ${producto.precio}</p>
          <button
            className="btn btn-primary"
            onClick={() => agregarAlCarrito(producto)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

const mockFetchItemById = async (itemId) => {
  const mockData = [
    { id: 1, nombre: 'Smartphone', descripcion: 'Smartphone de alta gama Nokia de 1998.', precio: 999, imagen: '/smartphone.jpg' },
    { id: 2, nombre: 'Camiseta', descripcion: 'Camiseta de algodón cómoda.', precio: 25, imagen: '/camiseta.jpg' },
    { id: 3, nombre: 'Sofá', descripcion: 'Sofá de lujo de cuero.', precio: 1200, imagen: '/sofa.jpg' },
    { id: 4, nombre: 'Balon de basket', descripcion: 'Balon firmado por Lebron.', precio: 35, imagen: '/sofa.jpg' },
    { id: 5, nombre: 'Libro', descripcion: 'Libro de mitologia romana.', precio: 10, imagen: '/sofa.jpg' },
  ];
  return mockData.find((producto) => producto.id === Number(itemId));
};

export default ItemDetailContainer;