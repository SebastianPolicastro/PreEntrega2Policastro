import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cantidadCarrito }) => {
  return (
    <div className="widget-carrito">
      <FaShoppingCart size={30} />
      <Badge pill variant="light">{cantidadCarrito}</Badge>
    </div>
  );
};

export default CartWidget;