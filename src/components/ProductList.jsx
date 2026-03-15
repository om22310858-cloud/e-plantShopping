import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "./ProductList.css";

const plants = [
  // Category 1: Air Purifying
  { id: 1, category: "Air Purifying", name: "Snake Plant", price: 20, thumbnail: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7e?w=200" },
  { id: 2, category: "Air Purifying", name: "Spider Plant", price: 15, thumbnail: "https://images.unsplash.com/photo-1616654848971-1250325bdf25?w=200" },
  { id: 3, category: "Air Purifying", name: "Peace Lily", price: 25, thumbnail: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=200" },
  { id: 4, category: "Air Purifying", name: "Boston Fern", price: 18, thumbnail: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=200" },
  { id: 5, category: "Air Purifying", name: "Rubber Plant", price: 30, thumbnail: "https://images.unsplash.com/photo-1606222872322-861c83c4015f?w=200" },
  { id: 6, category: "Air Purifying", name: "Aloe Vera", price: 12, thumbnail: "https://images.unsplash.com/photo-1596547609652-9cb5d8d73b22?w=200" },
  
  // Category 2: Pet Friendly
  { id: 7, category: "Pet Friendly", name: "Areca Palm", price: 35, thumbnail: "https://images.unsplash.com/photo-1600412258810-720610f60742?w=200" },
  { id: 8, category: "Pet Friendly", name: "Calathea", price: 22, thumbnail: "https://images.unsplash.com/photo-1614594805321-df1929cebfae?w=200" },
  { id: 9, category: "Pet Friendly", name: "Polka Dot Plant", price: 14, thumbnail: "https://images.unsplash.com/photo-1620127390740-4cb5032e3b2e?w=200" },
  { id: 10, category: "Pet Friendly", name: "Money Tree", price: 40, thumbnail: "https://images.unsplash.com/photo-1597405231267-ff554f67d4f9?w=200" },
  { id: 11, category: "Pet Friendly", name: "Cast Iron Plant", price: 28, thumbnail: "https://images.unsplash.com/photo-1630132145322-990a4df75fb8?w=200" },
  { id: 12, category: "Pet Friendly", name: "Parlor Palm", price: 24, thumbnail: "https://images.unsplash.com/photo-1601614741498-0c6495f3ce98?w=200" },

  // Category 3: Low Light Tolerant
  { id: 13, category: "Low Light", name: "ZZ Plant", price: 32, thumbnail: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=200" },
  { id: 14, category: "Low Light", name: "Pothos", price: 16, thumbnail: "https://images.unsplash.com/photo-1610448167905-5fef8c728fc0?w=200" },
  { id: 15, category: "Low Light", name: "Chinese Evergreen", price: 26, thumbnail: "https://images.unsplash.com/photo-1572688484432-4e4b5b719001?w=200" },
  { id: 16, category: "Low Light", name: "Philodendron", price: 20, thumbnail: "https://images.unsplash.com/photo-1605342410313-f933e38c7f3b?w=200" },
  { id: 17, category: "Low Light", name: "Dracaena", price: 25, thumbnail: "https://images.unsplash.com/photo-1620127390740-4cb5032e3b2e?w=200" },
  { id: 18, category: "Low Light", name: "English Ivy", price: 18, thumbnail: "https://images.unsplash.com/photo-1592500052328-9840baaaa3b6?w=200" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Group plants by category
  const categories = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  const isAddedToCart = (plantId) => {
    return cart.some(item => item.id === plantId);
  };

  return (
    <div className="product-list-container">
      <h2 className="shop-title">Our Plants</h2>

      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          
          <div className="product-grid">
            {items.map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.thumbnail} alt={plant.name} className="product-image" />
                <h4 className="product-name">{plant.name}</h4>
                <p className="product-price">${plant.price.toFixed(2)}</p>
                <button
                  className={`add-to-cart-btn ${isAddedToCart(plant.id) ? 'added' : ''}`}
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isAddedToCart(plant.id)}
                >
                  {isAddedToCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default ProductList;