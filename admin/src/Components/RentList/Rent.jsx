import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rent.css';

const Rent = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState({
    carModel: '',
    fromDate: '',
    toDate: '',
  });

  // Fetch bookings from backend
  useEffect(() => {
    axios
      .get('http://localhost:4000/bookings')
      .then((response) => {
        if (response.data.success) {
          setBookings(response.data.bookings);
        } else {
          setError('Error fetching bookings: ' + response.data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
        setError('There was an error fetching the bookings.');
        setLoading(false);
      });
  }, []);

  // Handle input changes for product details
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Submit booking details
  const submitHandler = async (e) => {
    e.preventDefault();

    const bookingData = {
      carModel: productDetails.carModel,
      fromDate: productDetails.fromDate,
      toDate: productDetails.toDate,
    };

    try {
      const response = await axios.post('http://localhost:4000/bookings', bookingData);

      if (response.data.success) {
        alert('Booking submitted successfully!');
        setBookings((prevBookings) => [...prevBookings, response.data.booking]);
        setProductDetails({
          carModel: '',
          fromDate: '',
          toDate: '',
        });
      } else {
        alert('Failed to submit booking.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking.');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="rent-container">
      <h2>Bookings Dashboard</h2>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Car Model</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.carModel}</td>
              <td>{new Date(booking.fromDate).toLocaleDateString()}</td>
              <td>{new Date(booking.toDate).toLocaleDateString()}</td>
              <td>{new Date(booking.dateCreated).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>New Booking</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="carModel"
          placeholder="Car Model"
          value={productDetails.carModel}
          onChange={changeHandler}
        />
        <input
          type="date"
          name="fromDate"
          value={productDetails.fromDate}
          onChange={changeHandler}
        />
        <input
          type="date"
          name="toDate"
          value={productDetails.toDate}
          onChange={changeHandler}
        />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Rent;
