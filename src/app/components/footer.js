import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gap}></div>
      <div className={styles.graphicContent}>
        <div className={styles.logoData}>
          <h3 className={styles.h3}>
            Zeal<span style={{ color: "white" }}>oo</span>ps
          </h3>
          <p className={styles.p}>
            <span style={{ color: "#FDAF35" }}>Back To Basic!</span>
          </p>
          <p className={styles.p}>
            We view art as more than just a product; it'&apos;s an emotion. Through our frames, we aim to convey an experience
            of artistry, where each piece becomes a vessel for creativity and expression.
          </p>
          <div className={styles.iconLinks}>
            <a  href="https://www.facebook.com/zealoops?mibextid=JRoKGi">
              <img className={styles.icon} src="/icons/face.png" alt="facebook-logo" />
            </a>
            <a href="https://x.com/Zealoops_01?t=LWriSZwMf82N_Ln0mL4NXw&s=08">
              <img className={styles.icon} src="/icons/twit.png" alt="twitter-logo" />
            </a>
            <a  href="https://www.linkedin.com/company/zealoops/">
              <img className={styles.icon} src="/icons/linkedin.png" alt="linkedin-logo" />
            </a>
            <a href="https://www.instagram.com/zealoops/">
              <img className={styles.icon} src="/icons/instagram.png" alt="instagram-logo" />
            </a>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Quick Links</h4>
            <a className={styles.a} href="/">Home</a>
            <a className={styles.a} href="/about">About</a>
            <a className={styles.a} href="/contact">Contact</a>
          </div>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Support</h4>
            <a className={styles.a} href="/warranty">Warranty Policy</a>
            <a className={styles.a} href="/terms">Terms & Condition</a>
            <a className={styles.a} href="/privacy">Privacy Policy</a>
            <a className={styles.a} href="/return">Return Policy</a>
          </div>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Also visit us at</h4>
            <a className={styles.a} href="https://www.amazon.in/Zealoops-Electric-Non-Removable-Battery-Suspension/dp/B0CR44VCMB">
              Amazon
            </a>
            <a className={styles.a} href="https://www.facebook.com/zealoops?mibextid=JRoKGi">Facebook</a>
            <a className={styles.a} href="/">Zealoops</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
