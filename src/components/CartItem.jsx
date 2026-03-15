import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total amount for all products in cart
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });
    return totalAmount;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckout = () => {
    alert('Functionality to be added for future reference');
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>
      <p className="cart-total-items">Total Items: {totalItems}</p>
      
      <div className="cart-items-wrapper">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="cart-item-image" src={item.thumbnail} alt={item.name} />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
              <div className="cart-quantity-controls">
                <button className="qty-btn" onClick={() => handleDecrement(item)}>-</button>
                <span className="qty-value">{item.quantity}</span>
                <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p className="cart-item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <Link to="/shop">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;