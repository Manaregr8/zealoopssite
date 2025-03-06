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
      mobile: ["+91-9903101794"],
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
    {
      name: "SAGE ENTERPRISES",
      address: `PLOT NO. 722, SHERPUR KALAN
FOCAL POINT ROAD LUDHIANA
Punjab - 141010, India`,
      contactName: "Mr. Gaurav Walia ",
      mobile: ["+91 8800841282"],
      gst: "03AEKFS5491K1ZK",
      email : "info.sageinternational@gmail.com",
      urlw : "https://i.ibb.co/fVtnD0DY/476720643-1781710099253509-8793200464204395614-n.jpg",
    },
    {
      name: "New India Cycle Industries",
      address: `84-A & B, Phase 1, D.D.A Cycle Market, Jhandewalan, N.Delhi-55`,
      contactName: "Sahil Raizada",
      mobile: ["+91 9899764282"],
      gst: "07AHJPR0817L1Z1",
      email : "",
      urlw : "",
    },
    {
      name: "Bengal Cycle Store",
      address: `C/o. Bengal Cycle Store, M.G.Road, Birpara, P.O. Birpara, Dist. Alipurduar, Jalpaiguri
West Bengal - 735204, India`,
      contactName: "Mr. Sunil Mittal",
      mobile: ["+91 98320 57578"],
      gst: "19CBRPM2359A1ZH",
      email : "",
      urlw : "",
    },
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
             {dealer.urlw?(<img
                className={styles.storeImg}
                src={dealer.urlw}
                alt={`${dealer.name} Store`}
              />):<img
              className={styles.storeImg}
              src="https://i.ibb.co/cb3ZM7p/images.png"
              alt={`${dealer.name} Store`}
            />} 
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
              {dealer.email ? (
  <a href={`mailto:${dealer.email}`} className={styles.phoneLink}>
    {dealer.email}
  </a>
) : null}

            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealerPage;
