import React from 'react';
import '../Pages/CSS/About.css';
import CarRentalImage from '../Components/Assets/Frontend_Assets/banner_mens.png'; // Replace with your car rental image
import RentalHistoryImage from '../Components/Assets/Frontend_Assets/banner_kids.png'; // Replace with an appropriate history image

const RentACar = () => {
  return (
    <div className="rental-container">
      <h1 className="rental-title">About Our Car Rental Service</h1>
      <div className="rental-content">
        <div className="rental-image-large">
          <img src={CarRentalImage} alt="Car Rental Service" className="rental-image-large-content" />
        </div>
        <div className="rental-text">
          <p className="rental-description">
            Our Car Rental Service is dedicated to providing an exceptional vehicle rental experience for our customers. 
            With a wide selection of vehicles, from economy cars to luxury models, we cater to all your transportation needs. 
            Founded on the principles of convenience and customer satisfaction, we strive to offer flexible rental options 
            that fit your schedule. Our commitment to quality service ensures that every rental is safe, reliable, and enjoyable.
          </p>
          <div className="rental-history">
            <img src={RentalHistoryImage} alt="Rental History" className="rental-history-image" />
            <p className="history-description">Our journey through the automotive rental industry, focusing on customer needs and innovation.</p>
          </div>
        </div>
      </div>
      <div className="rental-map">
        <h2 className="map-title">Our Rental Locations Worldwide</h2>
        <iframe
          title="Rental Locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509444!2d144.96305781550495!3d-37.81362774202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sCar%20Rental!5e0!3m2!1sen!2sus!4v1633097560914!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RentACar;
