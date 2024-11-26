import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importoni useNavigate
import '../Pages/CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();  // Krijo funksionin për navigim

  // Filtrimi i produkteve për kategorinë përkatëse dhe marrja e vetëm 8 produkteve të para
  const filteredProducts = all_product
    .filter(item => item.category === props.category)  // Filtrimi sipas kategorisë
    .slice(0, 8);  // Merr 8 produktet e para

  // Funksioni për të naviguar në faqen e re kur klikohet butoni
  const handleExploreMoreClick = () => {
    navigate(`/shop/${props.category}`); // Mund ta zëvendësoni me URL-në që dëshironi
  };

  // Funksioni për të menaxhuar shfaqjen e përshkrimit të produktit
  const [activeDescription, setActiveDescription] = useState(null);

  // Funksioni për të treguar ose fshehur përshkrimin kur klikohet butoni "Rent Now"
  const handleRentNowClick = (id) => {
    setActiveDescription(prev => (prev === id ? null : id)); // Tregon ose fsheh përshkrimin për produktin që është klikuar
  };

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="Banner" />
      
      {/* Description section */}
      <div className="shopcategory-description">
        <p>{props.description}</p>
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-8</span> out of {filteredProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      
      <div className="shopcategory-products">
        {/* Renderimi i 8 produkteve të filtruar */}
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-item">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              description={item.description}
            />
            
            {/* Shfaq vitin e produktit */}
            <p className="product-year">Year: {item.year}</p>

            {/* Butoni Rent Now */}
            <button onClick={() => handleRentNowClick(item.id)}>
              Rent Now
            </button>

            {/* Shfaqja e përshkrimit të produktit kur klikohet butoni */}
            {activeDescription === item.id && (
              <div className="product-description">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="shopcategory-loadmore">
        <button onClick={handleExploreMoreClick}>Explore More</button> {/* Butoni që navigon në një faqe të re */}
      </div>
    </div>
  );
};

export default ShopCategory;
