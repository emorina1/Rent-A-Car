import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections'; // Ensure the correct path

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <div className="header-section">
        <h1>Welcome to Exclusive Car Rental</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor est lorem, eu tempor elit molestie tempus.</p>
        <p>Sed porttitor est lorem, eu tempor elit molestie tempus. Donec molestie nunc arcu non aliquam.</p>
        <a href="#" className="read-more">Read More</a>
      </div>

      <div className="highlight-section">
        <div className="highlight-card yellow">
          <h2>Get Your Car in 10 Min</h2>
          <p>Call Today</p>
          <span>1.800.123.45.67</span>
        </div>
        <div className="highlight-card black">
          <h2>Rent Guide</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="more-details">More Details</button>
        </div>
      </div>

      <div className="collections">
        {new_collection.map((item, i) => (
          <div className="car-card" key={i}>
            <img src={item.image} alt={item.name} className="car-image" />
            <div className="content">
              <h2>{item.name}</h2>
              <p className="details">{item.description}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
