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
    description: "Audi R8 2021 është një veturë sportive dhe e besueshme, e përshtatshme për udhëtime të gjata dhe të shkurtra.",
    pricePerDay: "$40.00",
    additionalInfo: "Klimatizim, Bluetooth, GPS, kamera mbrapa dhe mbështetje rrugore 24/7."
  },
  {
    src: photo2,
    title: "Ford Focus 2019",
    description: "Ford Focus 2019 ofron një përvojë të qetë vozitjeje me rehati të lartë, ideale për udhëtime urbane. Vjen me një dizajn tërheqës dhe motor efikas.",
    pricePerDay: "$35.00",
    additionalInfo: "Klimatizim, ngrohje sediljesh, dhe kontroll stabiliteti elektronik."
  },
  {
    src: photo3,
    title: "BMW X5 2020",
    description: "BMW X5 2020 është SUV luksoz me hapësirë të madhe dhe performancë të shkëlqyeshme, e përshtatshme për udhëtime familjare dhe terrene të vështira.",
    pricePerDay: "$90.00",
    additionalInfo: "Xhami panoramik, GPS, kamera mbrapa, mbështetje rrugore 24/7 dhe siguri të lartë."
  },
  {
    src: photo4,
    title: "Mercedes-Benz C-Class 2022",
    description: "Mercedes-Benz C-Class 2022 është veturë premium për ata që kërkojnë luks dhe performancë. E përkryer për udhëtime të klasit të parë.",
    pricePerDay: "$100.00",
    additionalInfo: "Interior luksoz, sistem i avancuar infotainment, dhe asistencë në parkim."
  }
];

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='popular'>
      <hr />
      <div className='slider'>
        <button className='prev' onClick={prevSlide}>❮</button>
        <img src={cars[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
        <button className='next' onClick={nextSlide}>❯</button>
      </div>

      <div className='product-info'>
        <h2>{cars[currentIndex].title}</h2>
        <p className='description'>{cars[currentIndex].description}</p> {/* Description class added */}
        <p className='price'>Çmimi për Ditë: {cars[currentIndex].pricePerDay}</p>
        <p className='additional-text'>{cars[currentIndex].additionalInfo}</p>
      </div>
    </div>
  );
}

export default Popular;
