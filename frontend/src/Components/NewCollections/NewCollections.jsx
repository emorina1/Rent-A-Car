import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections'; // Ensure the correct path
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>New Collections</h1>
      <div className="collections">
        {new_collection.map((item, i) => (
          <div className="car-card" key={i}>
            <img src={item.image} alt={item.name} className="car-image" />
            <div className="content">
              <h2>{item.name}</h2>
              <p className="price">Now ${item.new_price} per day</p>
              <p className="details">Rent for a day and save big with our daily specials!<br />Book now and enjoy a stress-free drive today!</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
