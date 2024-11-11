import React, { useState } from 'react';
import './Popular.css';
import photo1 from '../Assets/Frontend_Assets/C2.png';
import photo2 from '../Assets/Frontend_Assets/c.png';
import photo3 from '../Assets/Frontend_Assets/c3.png';
import photo4 from '../Assets/Frontend_Assets/c1.png';

const cars = [
  {
    src: photo1,
    title: "Audi R8 2021",
    pricePerDay: "$40.00",
  },
  {
    src: photo2,
    title: "Ford Focus 2019",
    pricePerDay: "$35.00",
  },
  {
    src: photo3,
    title: "BMW X5 2020",
    pricePerDay: "$90.00",
  },
  {
    src: photo4,
    title: "Mercedes-Benz C-Class 2022",
    pricePerDay: "$100.00",
  }
];

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='popular'>
      <hr />
      <h1>Build Your Favourite Vehicle</h1>
      <div className='slider'>
        <button className='prev' onClick={prevSlide}>❮</button>
        <div className='image-container'>
          <div className={`car-image-container ${currentIndex === 0 ? 'active' : ''}`}>
            <img src={cars[(currentIndex - 1 + cars.length) % cars.length].src} alt={`Slide ${(currentIndex - 1 + cars.length) % cars.length + 1}`} className='car-image' />
          </div>
          <div className={`car-image-container ${currentIndex === 1 ? 'active' : ''}`}>
            <img src={cars[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className='car-image' />
          </div>
          <div className={`car-image-container ${currentIndex === 2 ? 'active' : ''}`}>
            <img src={cars[(currentIndex + 1) % cars.length].src} alt={`Slide ${(currentIndex + 1) % cars.length + 1}`} className='car-image' />
          </div>
        </div>
        <button className='next' onClick={nextSlide}>❯</button>
      </div>
      
    </div>
  
  );
}

export default Popular;
