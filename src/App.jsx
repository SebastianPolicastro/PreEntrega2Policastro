import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Carrito from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';
import './components/styles/custom.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container my-5">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div className="hero">
                      <h1>Bienvenido a MiTienda</h1>
                    </div>
                    <ItemListContainer />
                  </>
                }
              />
              <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/about" element={<h1>Sobre Nosotros</h1>} />
              <Route path="/contact" element={<h1>Contáctanos</h1>} />
            </Routes>
          </div>
          <footer className="footer">
            <p>&copy; 2025 MiTienda. Todos los derechos reservados.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;