"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css"; // Import the CSS Module
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.containerNav}>
          <Image
            className={styles.logo}
            src="/images/logo.png"
            width={150}
            height={40}
            alt="logo"
          />
          <img
            className={styles.menu}
            src="/icons/menu.png"
            alt="menu"
            onClick={toggleMenu}
          />
          <div
            className={`${styles.dataMenu} ${menuVisible ? styles.show : ""}`}
          >
            <Link className={styles.a} href="/">
              Home
            </Link>
            <Link className={styles.a} href="/about">
              About
            </Link>
            <Link className={styles.a} href="/products">
              Product
            </Link>
            <Link className={styles.a} href="/dealers">
              Dealers
            </Link>
            <Link className={styles.a} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Link
        className={`${styles.absolute} ${styles.a}`}
        href="https://api.whatsapp.com/send?phone=+919105300803&text=%C2%A0"
      >
        <img
        className={styles.whatsaap}
          src="./whatsaap-logo.gif"
          alt="whatsapp-icon"
          style={{
            width:"50px",
            position:"fixed",
            bottom:"10px",
            left:"10px",
            zIndex:"100000"
          }}
        />
      </Link>
    </>
  );
};

export default Navbar;
