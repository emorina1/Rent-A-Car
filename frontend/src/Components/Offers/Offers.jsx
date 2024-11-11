import React from 'react';
import './Offers.css';
import carImage from '../Assets/Frontend_Assets/car2.png'; // Placeholder image for the car

const Offers = () => {
  return (
    <div className="offers-container">
      {/* Content Section */}
      <div className="offers-content">
        {/* Text Section */}
        <div className="offers-text">
          <h1>A little care for your dream vehicle</h1>
          <p>Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book
          </p>
          <button className="offers-get-started-button">Get Started</button>
          
          {/* Stats Section */}
          <div className="offers-stats">
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>60+</h3>
              <p>Service Areas</p>
            </div>
            <div className="stat">
              <h3>400+</h3>
              <p>Service Providers</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="car-image-container">
          <img src={carImage} alt="Dream Vehicle" className="car-image" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
