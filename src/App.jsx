import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <div className="nav-brand">Paradise Nursery 🌱</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
              Cart <span className="cart-count">{totalItems > 0 ? `(${totalItems})` : ''}</span>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="landing">
              <div className="landing-content">
                <h1>Paradise Nursery</h1>
                <div className="about-us-container">
                  <AboutUs />
                </div>
                <Link to="/shop">
                  <button className="get-started-btn">Get Started</button>
                </Link>
              </div>
            </div>
          } />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;