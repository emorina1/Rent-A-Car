import React, {  useState, useRef, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import { Link } from 'react-router-dom';

import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Kontrollojmë në localStorage për emrin e përdoruesit
    const token = localStorage.getItem('auth-token');
    const name = localStorage.getItem('userName');
    if (token && name) {
      setUserName(name);
    }
  }, []);

  const logout = () => {
    // Pas logout, largojmë të dhënat nga localStorage dhe bëjmë ridrejtim te login
    localStorage.removeItem('auth-token');
    localStorage.removeItem('userName');
    setUserName('');
    window.location.replace('/login');
  };

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>
      <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="Menu" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("sedan")}>
          <Link style={{ textDecoration: 'none' }} to='/sedan'>Sedan</Link>
          {menu === "sedan" && <hr />}
        </li>
        <li onClick={() => setMenu("sports")}>
          <Link style={{ textDecoration: 'none' }} to='/sports'>Sports</Link>
          {menu === "sports" && <hr />}
        </li>
        <li onClick={() => setMenu("suv")}>
          <Link style={{ textDecoration: 'none' }} to='/suv'>SUV</Link>
          {menu === "suv" && <hr />}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link>
          {menu === "about" && <hr />}
        </li>
      </ul>
     
     
        {userName ? (
          <div className="user-info">
            <span>Welcome, <strong>{userName}</strong></span>
            <button onClick={logout} className="logout-button">Logout</button>
          </div>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
      </div>
 
  );
};

export default Navbar;
