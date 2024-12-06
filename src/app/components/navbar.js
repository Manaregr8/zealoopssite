import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../new-assets/images/logo.png';
import menuIcon from '../new-assets/icons/menu.png';
import whatsapp from '../new-assets/whatsaap-logo.gif';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav>
        <div className="container-nav">
          <Image id="logo" src={logo} alt="logo" width={300} height={60} />
          <Image
            id="menu"
            src={menuIcon}
            alt="menu"
            onClick={toggleMenu}
            width={25}
            height={25}
          />
          <div className={`data-menu ${menuVisible ? 'show' : ''}`}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/product">Product</Link>
            <Link href="/warranty">Warranty</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <a
        className="absolute"
        href="https://api.whatsapp.com/send?phone=+919105300803&text=%C2%A0"
      >
        <Image src={whatsapp} alt="whatsapp-icon" width={60} height={60} />
      </a>
      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          background-color: white;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          position: fixed;
          z-index: 10000;
          border-bottom: 1px solid rgb(187, 187, 187);
        }
        .container-nav {
          width: 100%;
          display: flex;
          max-width: 1300px;
        }
        .data-menu {
          margin-left: auto;
          display: flex;
          font-family: 'Space Age', sans-serif;
          align-items: center;
          transform: translateY(-150%);
          transition: 0.6s transform;
        }
        .data-menu.show {
          transform: translateY(0);
        }
        .data-menu a {
          padding: 0 10px;
          text-decoration: none;
          color: black;
          font-size: 20px;
          font-weight: 400;
        }
        .data-menu a:hover {
          color: #FDAF35;
        }
        #logo {
          width: auto;
          padding: 10px;
        }
        #menu {
          display: none;
          width: 25px;
          cursor: pointer;
        }
        .absolute {
          width: 50px;
        }
        .absolute img {
          width: 60px;
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000000;
        }
        @media (max-width: 1052px) {
          .data-menu {
            position: absolute;
            flex-direction: column;
            text-align: center;
            top: 53px;
            width: 100%;
            background-color: white;
            z-index: 10000;
            border-top: 2px solid black;
            border-bottom: 2px solid black;
          }
          .data-menu a {
            padding: 5px 0;
          }
          #menu {
            display: block;
            margin-left: auto;
            padding: 0 10px;
          }
        }
        @media (max-width: 708px) {
          .data-menu a {
            font-size: 17px;
          }
        }
        @media (max-width: 419px) {
          .data-menu {
            top: 49px;
          }
          .data-menu a {
            font-size: 15px;
            font-weight: 200;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
