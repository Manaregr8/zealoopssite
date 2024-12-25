import React from 'react';
import styles from './Footer.module.css';
import Link from "next/link";
const Footer = () => {
    const data = `We view art as more than just a product; it'&apos;s an emotion. Through our frames, we aim to convey an experience
            of artistry, where each piece becomes a vessel for creativity and expression.`;
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
            {data}
          </p>
          <div className={styles.iconLinks}>
            <Link  href="https://www.facebook.com/zealoops?mibextid=JRoKGi">
              <img className={styles.icon} src="/icons/face.png" alt="facebook-logo" />
            </Link>
            <Link href="https://x.com/Zealoops_01?t=LWriSZwMf82N_Ln0mL4NXw&s=08">
              <img className={styles.icon} src="/icons/twit.png" alt="twitter-logo" />
            </Link>
            <Link href="https://www.linkedin.com/company/zealoops/">
              <img className={styles.icon} src="/icons/linkedin.png" alt="linkedin-logo" />
            </Link>
            <Link href="https://www.instagram.com/zealoops/">
              <img className={styles.icon} src="/icons/instagram.png" alt="instagram-logo" />
            </Link>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Quick Links</h4>
            <Link className={styles.a} href="/">Home</Link>
            <Link className={styles.a} href="/about">About</Link>
            <Link className={styles.a} href="/contact">Contact</Link>
          </div>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Support</h4>
            <Link className={styles.a} href="/warranty">Warranty Policy</Link>
            <Link className={styles.a} href="/terms">Terms & Condition</Link>
            <Link className={styles.a} href="/privacy">Privacy Policy</Link>
            <Link className={styles.a} href="/return">Return Policy</Link>
          </div>
          <div className={styles.subData}>
            <h4 className={styles.h4}>Also visit us at</h4>
            <Link className={styles.a} href="https://www.amazon.in/Zealoops-Electric-Non-Removable-Battery-Suspension/dp/B0CR44VCMB">
              Amazon
            </Link>
            <Link className={styles.a} href="https://www.facebook.com/zealoops?mibextid=JRoKGi">Facebook</Link>
            <Link className={styles.a} href="/">Zealoops</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
