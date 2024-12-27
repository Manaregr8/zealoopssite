import React from "react";
import Image from "next/image";
import styles from "./thirdSection.module.css"; // Importing CSS module

const FrameSection = () => {
  const data3 = `In our workshop, every frame undergoes meticulous handcrafting, infused with passion and dedication. We view art as more than just a product; it's an emotion. Through our frames, we aim to convey an experience of artistry, where each piece becomes a vessel for creativity and expression. Our frames aren't just accessories; they're conduits through which art can be truly felt and appreciated. They embody perfection and serve as a testament to our commitment to excellence. Welcome to our world of meticulously crafted frames, where each piece tells a story of dedication, passion, and the transformative power of art.`;
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.grid1}>
          <h3 className={styles.h3}>
            <span style={{ color: "#FDAF35" }}>Hand crafted</span> frames
          </h3>
          <p className={styles.p} styles={{textAlign:"justify"}}>
            {data3}
          </p>
        </div>
        <div className={styles.grid2}>
          <div className={styles.imageContainer}>
            <img
              src="/images/Frame1.png"
              alt="Handcrafted Frame"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameSection;
