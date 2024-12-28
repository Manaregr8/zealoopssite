import React from "react";
import styles from "./carbon.module.css";

const CarbonFiberGridSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          {`India's First `}<span className={styles.highlight}>Carbon Fiber Electric Bicycle</span>
        </h2>
        <p className={styles.description}>
        {`Discover a whole new world of biking with our revolutionary carbon fiber electric bicycle. Engineered for thrill-seekers and urban explorers alike, this ride fuses toughness with feather-light agility, making every pedal stroke a joy. Crafted with precision, the carbon fiber frame isn’t just about looks—it’s built to handle rough roads and city streets while staying sleek and stylish.

With cutting-edge electric assist technology, hills become a breeze and long rides feel effortless, giving you the freedom to explore more without breaking a sweat.`}</p><p className={styles.description}>{` Whether you're weaving through traffic or cruising open trails, this bicycle is all about delivering high performance without compromising on comfort. Plus, by swapping to electric, you’re not just upgrading your ride—you’re making a bold move to cut down emissions and ride clean.`}
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.firstColumn}>
          <img
            src="https://i.ibb.co/tzxcPZz/Whats-App-Image-2024-12-27-at-10-19-41-PM.jpg"
            alt="Carbon Fiber Electric Bicycle"
            className={styles.image}
          />
          <img
            src="https://i.ibb.co/ryGJWvs/Whats-App-Image-2024-12-27-at-10-19-40-PM.jpg"
            alt="Close-up of Bicycle Frame"
            className={styles.image}
          />
        </div>
        <div className={styles.secondColumn}>
          <img
            src="https://i.ibb.co/2gdg3tR/Whats-App-Image-2024-12-27-at-10-19-40-PM-1.jpg"
            alt="Side View of Electric Bicycle"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CarbonFiberGridSection;
