import React from 'react';
import './Hero.css';
import carImg from '../Assets/Frontend_Assets/car2.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${carImg})` }}>
      <div className="overlay"></div>
      {/* <div className="hero-content">
        <h1>Most reliable cars for your journey</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="book-button">Book Now!</button>
      </div> */}

      <div className="booking-form">
        <h2>Rent a Car</h2>
        <label>Car types</label>
        <select>
          <option>All Car Types</option>
        </select>
        <label>Car brands</label>
        <select>
          <option>All Car Brands</option>
        </select>
        <label>Car model</label>
        <select>
          <option>All Car Models</option>
        </select>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
