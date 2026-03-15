import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 20 },
  { id: 2, name: "Peace Lily", price: 25 },
  { id: 3, name: "Aloe Vera", price: 15 }
];

function ProductList() {

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Plant Shop</h2>

      {plants.map((plant) => (
        <div key={plant.id}>

          <h3>{plant.name}</h3>

          <p>${plant.price}</p>

          <button
            onClick={() => dispatch(addItem(plant))}
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default ProductList;