import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Carrito() {
  const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {carrito.map((producto) => (
            <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
              {producto.nombre}
              <div>
                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => eliminarDelCarrito(producto.id)}
                >
                  -
                </button>
                {producto.cantidad}
                <button
                  className="btn btn-sm btn-primary ms-2"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrito;