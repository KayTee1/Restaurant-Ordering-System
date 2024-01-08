import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NavBar from "./components/NavBar";

import { CartProvider } from "./context/CartContext";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <CartProvider>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </Container>
    </>
  );
};

export default App;
