export const metadata = {
  title: "Dealers | Zealoops",
  description: `Join the Zealoops dealer network and become a part of the revolution in the cycling industry. Discover our dealer opportunities, access exclusive benefits, and provide your customers with innovative and high-quality electric cycles. Partner with Zealoops to drive the future of cycling in your region.`,
  keywords: "dealers, Zealoops dealers, e-bike dealers, electric cycle distribution, dealer network, become a dealer, Zealoops partnerships, electric bike dealership, innovative cycles, e-bike business opportunities, exclusive dealer benefits, cycling industry partners, electric bikes for resale, Zealoops regional dealers, dealership opportunities, high-quality e-bikes, cycling business collaboration, partner with Zealoops",
};

import React from "react";
import styles from "./dealers.module.css";
import Hero from "../components/heroBanner";
import Specs from "../components/specs";

const DealerPage = () => {
  const dealers = [
    {
      name: "HVI Cycles",
      address: `No. 16, MGR Main Road
Kandanchavadi, Perungudi, Chennai, TAMIL NADU, 600096`,
      contactName: "Mr. Prasanth",
      mobile: ["+91-7200121545"],
      gst: "33AARFH4847B1ZE",
      email : "hvicycles@gmail.com",
      urlw:"https://i.ibb.co/6bddWpq/4b1a8c84-788b-4dc5-b754-8fe5d97eae44.jpg",
    },
    {
      name: "M/s Suvajyoti Enterprises ",
      address: `AE 325, AE Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064`,
      contactName: "Mr. Subal Ghosh",
      mobile: ["+91-990310794"],
      gst: "19ADQPG1091E1ZJ",
      email : "suvajyoti.enterprises@gmail.com",
      urlw:"https://i.ibb.co/0pFWNkkX/Hash-map-for-grouping-two-pointer-positional-analysis-uniqueness-via-set.png",
    },
    {
      name: "Beda Traders",
      address: `649A, 1, BEDA TRADERS
Market Landing Road, Kottayam, Kottayam, KERALA, 686001, India`,
      contactName: "Mr. Binoy Abraham",
      mobile: ["+91 79024 33937"],
      gst: "32ATWPA8669G1Z8",
      email : "binvab@gmail.com",
      urlw : "https://i.ibb.co/r2XTVHJC/Hash-map-for-grouping-two-pointer-positional-analysis-uniqueness-via-set-1.png",
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
                src={dealer.urlw}
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
            <p className={styles.email}>
              <strong style={{ color: "#f3ba2f" }}>Email:</strong>{" "}
              <a href={`tel:${dealer.email}`} className={styles.phoneLink} >{dealer.email}</a> 
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerPage;
