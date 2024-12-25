import React from 'react';
import styles from './about.module.css';
import { lazyLoad } from '../components/lazyLoad';

const Component = () => {
    const data5 = `Zealoops is brand of Eltires Private Limited ( An Indian company ) that is revolutionizing the
                        cycling industry with its innovative and futuristic designs. Their cycles and paddle-assist E-cycles
                        are a perfect blend of energy, enthusiasm, strong frames, and ruggedness. They are designed to provide
                        a great riding experience to everyone from beginners to professional cyclists.<br />
                        The company has put a lot of effort into researching the best materials for their bikes so that they can
                        offer the highest quality products to their customers. With Zealoops Electric Cycles, you can be sure that
                        you will get a product with superior performance and durability.`;
    const data6 =`Our motive is to transform the world of cycles into well-engineered and efficiently designed robust e-bikes
                    that offer good speed and effective mileage. We believe in delivering products extending functionality with
                    pleasing aesthetics. Hence our products are developed keeping in mind the requirements of a wide audience to
                    make commuting a fun, safe, and healthy experience. We invite you to share with us the exhilarated experience
                    of commuting with Zealoops.`;
    const data7 = `Our frames are developed and engineered to compete in today’s world.`;
    return (
        <section className={styles.section}>
            <img src="/Zee-banner.jpg" useMap="lazyLoad" alt="about banner" className={styles.img} />
            <div className={styles.text}>
                <div className={styles.grid}>
                    <div className={styles.floatText}>
                        <p className={styles.floatrightp}>PEDAL ASSIST E-BIKE</p>
                        <h2 className={styles.h2}>
                            {data7}
                        </h2>
                    </div>
                    <p className={styles.p}>
                       {data5}
                    </p>
                </div>
                <p className={styles.p}>
                    {data6}
                </p>
            </div>
        </section>
    );
};

export default Component;
