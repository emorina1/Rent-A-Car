import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // You can add your form submission logic here
  };

  return (
    <div className='offers'>
      {/* Background image set via CSS; remove this img tag to avoid redundancy */}
      {/* <img src={exclusive_image} alt="Exclusive Offers" className="exclusive-image" /> */}

      <form onSubmit={handleSubmit} className="booking-form"> {/* Wrap features in a form */}
        <div className="features">
          <div className="feature-item">
            <label htmlFor="name">Emri:</label> {/* Name field */}
            <input type="text" id="name" name="name" required placeholder="Shkruaj emrin tuaj" />
          </div>

          <div className="feature-item">
            <label htmlFor="phone">Numri i Telefonit:</label> {/* Phone number field */}
            <input type="tel" id="phone" name="phone" required placeholder="Shkruaj numrin e telefonit" />
          </div>
          
          <div className="feature-item">
            <label htmlFor="pickup-date">Data e Marrjes:</label> {/* Use htmlFor instead of for */}
            <input type="date" id="pickup-date" name="pickup-date" required />
          </div>
          
          <div className="feature-item">
            <label htmlFor="return-date">Data e Kthimit:</label>
            <input type="date" id="return-date" name="return-date" required />
          </div>
          
        </div>
        <button type="submit" className="form-button">Dërgo</button> {/* Submit button */}
      </form>
    </div>
  );
}

export default Offers;
