import React, { useContext, useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false); // State për të monitoruar skrollimin

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  // Efekti për të monitoruar skrollimin dhe për të ndryshuar ngjyrën e navbarit
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Shto klasën 'scrolled' kur skrollohet më shumë se 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Pastrojmë event listener kur komponenti shkarkohet
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}> {/* Shto klasën 'scrolled' kur skrollohet */}
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="Menu" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("sedan") }}>
          <Link style={{ textDecoration: 'none' }} to='/sedan'>Sedan</Link>
          {menu === "sedan" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("sports") }}>
          <Link style={{ textDecoration: 'none' }} to='/sports'>Sports</Link>
          {menu === "sports" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("suv") }}>
          <Link style={{ textDecoration: 'none' }} to='/suv'>SUV</Link>
          {menu === "suv" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("about") }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link>
          {menu === "about" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <div className="cart-icon-container">
          <Link to='/cart'>
            <span className='cart-icon' style={{ fontSize: '24px', lineHeight: '24px' }}>🛒</span> {/* Përdorimi i emojis për ikonën e karrocës */}
            {getTotalCartItems() > 0 && (
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            )}
          </Link>
        </div>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
}

export default Navbar;
