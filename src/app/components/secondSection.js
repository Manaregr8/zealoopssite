import React from 'react';
import styles from './secondSection.module.css'; // Import styles properly

const SecondSection = () => {
  const data1 = `The weather and nature is calling for you to come out. Let's go out for some fresh air. And what better way
            to do that than on a bicycle? A bicycle in your favourite colour that makes you happy as Spring.`;
  const data2 = `The new stylish Zealoops e-cycle are available in 5 vibrant shade options:`;
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <iframe
          className={styles.iframe}
          src="https://www.youtube.com/embed/tj8yGbtMyL8?si=EN8lWFmTo2_K0JVF&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className={styles.data}>
          <h3 className={`${styles.secondBannerHead} ${styles.h3}`}>
            Its Available in <span style={{ color: '#FDAF35' }}>5 premium colors</span>
          </h3>
          <p className={`${styles.pData} ${styles.p}`}>
            {data1}
            <br />
            {data2}
          </p>
          <div className={styles.colorSegment}>
            <div className={styles.color1}>
              <p className={styles.p}>Urban Silver</p>
            </div>
            <div className={styles.color2}>
              <p className={styles.p}>Maize Marvel</p>
            </div>
            <div className={styles.color3}>
              <p className={styles.p}>Teal Harbor</p>
            </div>
            <div className={styles.color4}>
              <p className={styles.p}>Caramel Rose</p>
            </div>
            <div className={styles.color5}>
              <p className={styles.p}>Midnight Moss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
