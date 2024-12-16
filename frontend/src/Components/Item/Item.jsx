import React, { useEffect, useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAllProducts(data); // Update state with fetched products
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="items-container">
      {allProducts.length === 0 ? (
        <p>Loading products...</p> // Handle loading state
      ) : (
        allProducts.map((product) => (
          <div className="item" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                onClick={() => window.scrollTo(0, 0)}
                src={product.image}
                alt={product.name}
              />
            </Link>
            <div className="item-prices">
              <div className="item-prices-new">€{product.new_price}</div>
              <div className="item-prices-old">
                {product.old_price && `€${product.old_price}`}
              </div>
            </div>
            <div className="item-description">
              <p>{product.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Item;
