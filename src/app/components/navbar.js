"use client";
import React, { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav>
        <div className="container-nav">
          <img id="logo" src="./images/logo.png" alt="logo" width={200} height={60} />
          <img
            id="menu"
            src="./icons/menu.png"
            alt="menu"
            onClick={toggleMenu}
            width={25}
            height={25}
          />
          <div className={`data-menu ${menuVisible ? 'show' : ''}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a>
            <a href="/warranty">Warranty</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
      <a
        className="absolute"
        href="https://api.whatsapp.com/send?phone=+919105300803&text=%C2%A0"
      >
        <img src="./whatsaap-logo.gif" alt="whatsapp-icon" width={60} height={60} />
      </a>
    </>
  );
};

export default Navbar;
