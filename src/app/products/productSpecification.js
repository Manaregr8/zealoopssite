import React from "react";
import styles from "./productsSpec.module.css";

const ProductSpecifications = () => {
  const specifications = [
    {
      icon: "/icons/Rebust-steel-frame.png",
      text: "Robust Steel Frame",
    },
    {
      icon: "/icons/26-inch-wheel.png",
      text: "26 Inch wheel size with alloy rims",
    },
    {
      icon: "/icons/36V-5-battery-milage.png",
      text: "36V 7.8Ah Battery, Upto 60 kms mileage",
    },
    {
      icon: "/icons/7-speed-gear.png",
      text: "7-speed-gears",
    },
    {
      icon: "/icons/Alloy-pedals.png",
      text: "Alloy Pedals",
    },
    {
      icon: "/icons/Dual-disc-Breaker.png",
      text: "Dual Disc Brakes",
    },
    {
      icon: "/icons/Front-suspension.png",
      text: "Front-suspension",
    },
    {
      icon: "/icons/pedal-assist-and-throttle.png",
      text: "Pedal-assist & throttle",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <h3 className={styles.h3}>
            Product <span style={{ color: "#FDAF35" }}>Specifications</span>
          </h3>
        </div>
        <div className={styles.specsContainer}>
          <div className={styles.column}>
            {specifications.slice(0, 4).map((item, index) => (
              <li key={index} className={styles.specItem}>
                <img src={item.icon} alt={item.text} className={styles.icon} />
                <p className={styles.p}>{item.text}</p>
              </li>
            ))}
          </div>
          <div className={styles.column}>
            {specifications.slice(4).map((item, index) => (
              <li key={index} className={styles.specItem}>
                <img src={item.icon} alt={item.text} className={styles.icon} />
                <p className={styles.p}>{item.text}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
