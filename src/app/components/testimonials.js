import React from 'react';
import styles from './testimonials.module.css';
import { lazyLoad } from './lazyLoad.js';

const Component = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Ready To <span className={styles.span}>book your ride</span></h1>
            <a href="https://api.whatsapp.com/send?phone=+9105300803&text=%C2%A0" className={styles.book}>Hell Yeah!</a>
            <h2 className={styles.h2}>OUR TESTIMONIALS</h2>
            <div className={styles.testimonials}>
                <div className={styles.second}>
                    <img src="/icons/quote.png" useMap="lazyLoad" alt="quote-icon" className={styles.img} />
                    <p className={styles.review}>This is a good product at this price range. It is lightweight and easy to assemble. The services provided are very good.</p>
                    <p className={styles.name}>Manjeet Singh</p>
                </div>
                <p className={styles.p}>Check out more at <a href="https://www.google.com/search?q=zealoops&rlz=1C1GCEO_enIN879IN879&oq=zea&gs_lcrp=EgZjaHJvbWUqDAgEECMYJxiABBiKBTIGCAAQRRg8MgYIARBFGD0yCAgCEEUYJxg7MgYIAxBFGDkyDAgEECMYJxiABBiKBTIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCDIzOTNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x390cfbf499345ab9:0x36154fa1a0cc7dca,1,,,," className={styles.a}>GOOGLE</a></p>
            </div>
        </section>
    );
};

export default Component;
