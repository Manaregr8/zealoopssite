"use client";
import React, { useState } from "react";
import styles from "./ProductCard.module.css";

const Products = () => {
  const [showBuyOptions, setShowBuyOptions] = useState(false);
  const [shoBuyOptions, setShoBuyOptions] = useState(false);
  const [shBuyOptions, setShBuyOptions] = useState(false);

  const toggleBuyOptions = () => setShowBuyOptions(!showBuyOptions);
  const closeBuyOptions = () => setShowBuyOptions(false);

  const togglBuyOptions = () => setShoBuyOptions(!shoBuyOptions);
  const closBuyOptions = () => setShoBuyOptions(false);

  const toggBuyOptions = () => setShBuyOptions(!shBuyOptions);
  const cloBuyOptions = () => setShBuyOptions(false);

  const products = [
    { img: "/images/cycleze1/3.png", title: "Ze 1", onToggle: toggleBuyOptions, show: showBuyOptions, close: closeBuyOptions },
    { img: "/images/cycleze2/5.png", title: "Ze 2", onToggle: togglBuyOptions, show: shoBuyOptions, close: closBuyOptions },
    { img: "/images/cycleeco/2.png", title: "Ze eco", onToggle: toggBuyOptions, show: shBuyOptions, close: cloBuyOptions },
  ];

  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <section key={index} className={styles.section}>
          <div
            className={styles.grid}
            style={{ backgroundImage: `url(${"/images/banner.jpg"})` }}
          >
            <div className={styles.text}>
              <h4 className={styles.h4}>
                {product.title.split(" ")[0]} <span style={{ color: "#FDAF35" }}>{product.title.split(" ")[1]}</span>
              </h4>
              <h2 className={styles.h2}>
                TAKE ON THE CITY WITH <span style={{ color: "#FDAF35" }}>CONFIDENCE</span>
              </h2>
              <p style={{ color: "#FDAF35" }}>Ride away with up to 20% Discount</p>
              <div className={styles.modes}>
                <p>Available in 2 modes:</p>
                <div className={styles.buttonSection}>
                  <button className={styles.btn}>Mutual</button>
                  <button className={styles.btn}>Electric</button>
                </div>
              </div>
              <button className={styles.button} onClick={product.onToggle}>Buy Now</button>
            </div>
            <img className={styles.productImage} src={product.img} alt="Product" />
          </div>
          {product.show && (
            <div className={styles.display} id="onBuy">
              <div className={styles.card}>
                <a href="#" onClick={product.close}>
                  <p>X-CLOSE-X</p>
                </a>
                <a className={styles.a} href="https://www.amazon.in">
                  <img src="/icons/social.png" alt="Amazon" />
                  <p>Amazon: Buy from Amazon</p>
                </a>
                <a className={styles.a} href="#" disabled>
                  <img src="/icons/pngwing.com.png" alt="Flipkart" />
                  <p>Flipkart: Coming soon</p>
                </a>
                <a className={styles.a} href="https://api.whatsapp.com/send?phone=+919105300803&text=%C2%A0">
                  <img src="/icons/whatsapp.png" alt="WhatsApp" />
                  <p>WhatsApp: Buy from Us</p>
                </a>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Products;
