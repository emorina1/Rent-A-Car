import React from 'react';
import '../Pages/CSS/About.css';
import CarRentalImage from '../Components/Assets/Frontend_Assets/C2.png'; // Image of car rental service
import RentalHistoryImage from '../Components/Assets/Frontend_Assets/c1.png'; // Image of rental history

const RentACar = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About Our Car Rental Service</h1>
          <p className="hero-description">
            Offering a wide range of vehicles, from economy to luxury, our Car Rental Service is built on the values of
            convenience and customer satisfaction. Whether you're traveling for business or leisure, we have the perfect car for you.
          </p>
        </div>
        <div className="hero-image">
          <img src={CarRentalImage} alt="Car Rental Service" className="hero-image-content" />
        </div>
      </section>

      <section className="rental-details">
        <div className="rental-text">
          <h2 className="rental-subtitle">Why Choose Us?</h2>
          <p className="rental-description">
            Our service provides you with exceptional flexibility and customer care. With a diverse selection of vehicles,
            competitive prices, and top-notch customer service, we make car rentals effortless. Rent a car with us and experience
            convenience like never before.
          </p>
        </div>
        <div className="rental-history">
          <img src={RentalHistoryImage} alt="Rental History" className="rental-history-image" />
          <div className="history-text">
            <h3 className="history-title">Our Journey</h3>
            <p className="history-description">
              From a small car rental shop to an international service provider, our commitment to quality and customer
              satisfaction has made us one of the most trusted names in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="rental-locations">
        <h2 className="map-title">Our Rental Locations Worldwide</h2>
        <div className="map-container">
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
      </section>
    </div>
  );
};

export default RentACar;
