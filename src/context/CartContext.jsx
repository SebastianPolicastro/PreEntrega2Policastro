import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (idProducto) => {
    const productoExistente = carrito.find((item) => item.id === idProducto);
    if (productoExistente.cantidad > 1) {
      setCarrito(
        carrito.map((item) =>
          item.id === idProducto ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    } else {
      setCarrito(carrito.filter((item) => item.id !== idProducto));
    }
  };

  const cantidadCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;