import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections'; // Sigurohuni që të keni ekzekutimin e saktë të këtij importi
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections'> {/* Ndryshuar emrin e klasës për t'u përputhur me CSS */}
      <h1>NEW COLLECTIONS</h1> {/* E riktheva titullin për të bërë komponentin më informues */}
      <hr /> {/* Ndërmjet titullit dhe koleksioneve */}
      
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>

      <hr /> {/* Ndërmjet koleksioneve dhe fundi i kutisë */}
    </div>
  );
};

export default NewCollections;
