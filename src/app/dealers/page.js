import React from "react";
import styles from "./dealers.module.css";
import Hero from "../components/heroBanner";
import Specs from "../components/specs";

const DealerPage = () => {
  const dealers = [
    {
      name: "HVI Cycles",
      address: "No. 14, Shree illam, VOC street, Kandanchavadi, Chennai-600096, Tamil Nadu, India",
      contactName: "Mr. Praveen & Mr. Prashanth",
      mobile: ["+91-7358477622", "+91-8754469475"],
      gst: "33AARFH4847B1ZE",
    },
    // Add more dealer objects here if needed
  ];

  return (
    <div className={styles.dealerPage}>
      <h1 className={styles.heading}>Our Dealers</h1>
      <Specs />
      <br />
      <div className={styles.cardContainer}>
        {dealers.map((dealer, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.flex}>
              <img
                className={styles.storeImg}
                src="https://i.ibb.co/6bddWpq/4b1a8c84-788b-4dc5-b754-8fe5d97eae44.jpg"
                alt={`${dealer.name} Store`}
              />
              <h2 className={styles.cardTitle}>{dealer.name}</h2>
            </div>
            <p className={styles.address}>{dealer.address}</p>
            <p className={styles.contact}>
              <strong style={{ color: "#f3ba2f" }}>Contact Name:</strong> {dealer.contactName}
            </p>
            <p className={styles.mobile}>
              <strong style={{ color: "#f3ba2f" }}>Mobile:</strong>{" "}
              {dealer.mobile.map((number, idx) => (
                <a key={idx} href={`tel:${number}`} className={styles.phoneLink}>
                  {number}
                  {idx < dealer.mobile.length - 1 ? ", " : ""}
                </a>
              ))}
            </p>
            <p className={styles.gst}>
              <strong style={{ color: "#f3ba2f" }}>GST:</strong> {dealer.gst}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerPage;
