import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./components/App";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <BrowserRouter>
      <div>

        <h1>Paradise Nursery 🌱</h1>

        <Link to="/shop">
          <button>Get Started</button>
        </Link>

        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;