import React from 'react';
import './Hero.css';
import carImg from '../Assets/Frontend_Assets/car2.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${carImg})` }}>
      <div className="overlay"></div>
      
      <div className="booking-form">
        <h2>Rent a Car</h2>
        
        {/* Car models */}
        <label>Car model</label>
        <select>
          <option>All Car Models</option>
          <option>Sedan</option>
          <option>Sports</option>
          <option>Suv</option>
         
        </select>
        
        {/* Date range */}
        <label>From Date</label>
        <input type="date" />
        <label>To Date</label>
        <input type="date" />
        
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;
