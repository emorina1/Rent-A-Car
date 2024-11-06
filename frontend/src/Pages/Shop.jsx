import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';

const Shop = () => {
  return (
    <div>
      <Hero />
      {/* Shfaq NewCollections pas Hero */}
      <NewCollections />
      {/* Shfaq Popular pas NewCollections */}
      <Offers />
      <Popular />
      {/* Shfaq Offers më poshtë */}
     
    </div>
  );
};

export default Shop;
