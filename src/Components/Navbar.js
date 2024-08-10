import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 // Assuming you have the CSS in a separate file

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='nav-box'>
      <div className="logo">Helios</div>
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <ul className={`Nav-icons ${menuActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <button className='btn'><Link to="/">LogIn</Link></button>
      </ul>
    </div>
  );
}

export default Navbar;
