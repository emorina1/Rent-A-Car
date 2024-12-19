import React, { useState } from 'react';
import './Hero.css';
import carImg from '../Assets/Frontend_Assets/car2.png';

const Hero = () => {
  const [formData, setFormData] = useState({
    carModel: '',
    fromDate: '',
    toDate: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert('Booking successful!');
      } else {
        alert('Booking failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${carImg})` }}>
      <div className="overlay"></div>
      <div className="booking-form">
        <h2>Rent a Car</h2>

        {/* Car models */}
        <label>Car model</label>
        <select name="carModel" value={formData.carModel} onChange={handleInputChange}>
          <option value="">All Car Models</option>
          <option value="Sedan">Sedan</option>
          <option value="Sports">Sports</option>
          <option value="SUV">SUV</option>
        </select>

        {/* Date range */}
        <label>From Date</label>
        <input type="date" name="fromDate" value={formData.fromDate} onChange={handleInputChange} />
        <label>To Date</label>
        <input type="date" name="toDate" value={formData.toDate} onChange={handleInputChange} />

        <button className="book-button" onClick={handleSubmit}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
