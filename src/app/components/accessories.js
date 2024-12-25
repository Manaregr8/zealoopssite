import React from "react";
import styles from "./AccessoriesParts.module.css";

const AccessoriesParts = () => {
  const images = [
    { src: "/accesories/2.jpg", alt: "Alloy-Padels" },
    { src: "/accesories/3.jpg", alt: "" },
    { src: "/accesories/4.jpg", alt: "" },
    { src: "/accesories/5.jpg", alt: "" },
    { src: "/accesories/6.jpg", alt: "" },
    { src: "/accesories/7.jpg", alt: "" },
    { src: "/accesories/12.jpg", alt: "" },
    { src: "/accesories/9.jpg", alt: "" },
    { src: "/accesories/13.jpg", alt: "" },
    { src: "/accesories/11.jpg", alt: "" },
    { src: "/accesories/15.jpg", alt: "" },
    { src: "/accesories/20.jpg", alt: "" },
  ];

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=+919105300803&text=I%20Want%20to%20Enquire%20About%20Accessories";

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.h2}>
          Accessories and <span style={{ color: "#FDAF35" }}>Parts</span>
        </h2>
      </header>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div className={styles.cards} key={index}>
            <img className={styles.img} src={image.src} alt={image.alt} />
            <a className={styles.a} href={whatsappLink}>
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessoriesParts;
