import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading Your Experience</p>
      <br />
      <h3 className={styles.h3}>
            <span style={{ color: "#FDAF35" }}>Back To Basics!</span>
          </h3>
    </div>
  );
};

export default Loader;
