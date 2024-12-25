import React from "react";
import styles from "./ZealoopsComponent.module.css";

const ZealoopsComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid1}>
        <span className={styles.big}>ZEALOOPS</span>
      </div>
      <div className={styles.grid2}>
        <div className={styles.graphic}></div>
        <p className={styles.p}>hello</p>
      </div>
      <img
        src="/images/specs.png"
        alt="specs"
        className={styles.img}
      />
    </section>
  );
};

export default ZealoopsComponent;
