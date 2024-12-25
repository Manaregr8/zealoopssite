import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css"; // Import as a CSS Module
import Swipper from "./swipper";
const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.section}`} style={{ backgroundImage: "url(/images/banner.jpg)" }}>
      {/* Use CSS for background image */}
      <div className={styles.grid}>
        <div className={styles.textBanner}>
          <h3>
            ZeaL<span style={{ color: "#FDAF35" }}>oo</span>ps
          </h3>
          <p>Delivering you</p>
          <h2>AMAZING || CREATIVE || COMFORTABLE</h2>
          <Link href="/product">
            <button className={styles.button}>To Bikes</button>
          </Link>
        </div>
        <Swipper/>
      </div>
    </section>
  );
};

export default Hero;
