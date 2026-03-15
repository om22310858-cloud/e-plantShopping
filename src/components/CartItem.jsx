import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cart.map(item => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <p>${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity + 1
              }))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(updateQuantity({
                id: item.id,
                quantity: item.quantity - 1
              }))
            }
          >
            -
          </button>

          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>

        </div>

      ))}

    </div>
  );
}

export default CartItem;