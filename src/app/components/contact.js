// ContactForm.js (Client Component)
"use client";
import React, { useState } from 'react';
import styles from './contact.module.css';
import { lazyLoad } from './lazyLoad';

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setStatus(result.message || "Success");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <img src="/images/contact_cover.png" alt="contact banner" className={styles.image} use={lazyLoad} />
      </div>
      <div className={styles.grid} id="contactForm">
        <div className={styles.form}>
          <h3 className={styles.heading}>ENQUIRE <span className={styles.highlight}>NOW</span></h3>
          <p className={styles.p}>For Pricing and more product details please fill up the form<br />We will contact you soon</p>
          <form onSubmit={handleSubmit}>
            <input className={styles.input} type="hidden" name="access_key" value="0b4cb085-71a4-4e36-81cc-f383ca61fef0" />
            <input className={styles.input} type="text" name="name" placeholder="Name" required />
            <input className={styles.input} type="number" name="number" placeholder="Number" required />
            <input className={styles.input} type="email" name="email" placeholder="Email" required />
            <textarea className={styles.textarea} name="message" placeholder="Details Regarding Enquiry here!" required rows="3"></textarea>
            <input className={styles.submit} type="submit" value="Submit" />
          </form>
          <div>{status}</div>
        </div>
        <div className={styles.links}>
          <h3 className={styles.heading}><span className={styles.highlight}>Drop</span> us a line</h3>
          <div className={styles.cards}>
            <a href="https://maps.app.goo.gl/6VYtzV1vuQcaEzNp9">
              <p className={styles.p}>B-143, Second Floor, East Side, Rama Park, Uttam Nagar, New Delhi 110059</p>
            </a>
            <img className={styles.icon} src="/icons/marker_3.png" alt="address-icon" use={lazyLoad} />
          </div>
          <div className={styles.cards}>
            <p className={styles.p}><a href="tel:+919105300803">+91 9105300803</a></p>
            <img className={styles.icon} src="/icons/phone_3.png" alt="phone-icon" use={lazyLoad} />
          </div>
          <div className={styles.cards}>
            <p className={styles.p}><a href="mailto:info@zealoops.com">info@zealoops.com</a><br />
              <a href="mailto:sales@zealoops.com">sales@zealoops.com</a>
            </p>
            <img className={styles.icon} src="/icons/link_4.png" alt="email-icon" use={lazyLoad} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
