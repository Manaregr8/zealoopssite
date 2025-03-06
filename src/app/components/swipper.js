"use client";
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import Image from "next/image";
const images = [
  "/images/g3.png",
  "/images/g8.png",
  "/images/g2.png",
  "/images/g3.png",
  "/images/g8.png",
];

const AutoSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch images every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.cycleBanner}>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          fill
          alt={`cycle-${index}`}
          className={`${styles.img} ${
            index === currentIndex ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
};

export default AutoSwiper;
