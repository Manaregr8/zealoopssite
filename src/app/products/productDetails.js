import React from "react";
import styles from "./productDetails.module.css";

const ProductDetails = () => {
  const faqs = [
    {
      question: "What exactly are zealoops e cycles?",
      answer:
        "Zealoops e cycles are electric bicycles equipped with a motor to assist with pedaling. They are eco-friendly and provide a fun and convenient way to get around.",
    },
    {
      question: "How far can I ride on a single charge?",
      answer:
        "The range of a zealoops e cycle can vary depending on the model and conditions, but on average you can expect to ride anywhere from 20-50 miles on a single charge.",
    },
    {
      question: "Are zealoops e cycles easy to ride?",
      answer:
        "Yes, zealoops e cycles are designed to be user-friendly and easy to ride. The electric assistance makes pedaling a breeze and allows you to tackle hills and long distances with ease.",
    },
    {
      question: "Can I ride a zealoops e cycle in all weather conditions?",
      answer:
        "While zealoops e cycles are durable and weather-resistant, it is recommended to avoid riding in heavy rain or extreme weather conditions to ensure the longevity of your bike.",
    },
    {
      question: "Are zealoops e cycles legal to ride on the road?",
      answer:
        "Yes, zealoops e cycles are legal to ride on the road in most areas, but it is important to familiarize yourself with local laws and regulations regarding electric bikes.",
    },
    {
      question: "How do I maintain and care for my zealoops e cycle?",
      answer:
        "Regular maintenance such as keeping the tires inflated, cleaning the chain, and checking the battery health is important to ensure your zealoops e cycle stays in top condition. Additionally, storing your bike indoors when not in use can help prolong its lifespan.",
    },
    {
      question: "Can I customize my zealoops e cycle?",
      answer:
        "Yes, zealoops e cycles can be customized with accessories such as racks, lights, and fenders to suit your needs and style preferences. Just make sure any modifications are compatible with your bike's electric components.",
    },
    {
      question: "Are zealoops e cycles suitable for riders of all ages?",
      answer:
        "While zealoops e cycles are generally suitable for riders of all ages, it is important to follow safety guidelines and ensure younger riders have the necessary skills and supervision to ride responsibly.",
    },
  ];

  return (
    <div className={styles.different}>
      <div className={styles.differentSection}>
        <h3 className={styles.h3}>
          Product <span style={{ color: "#FDAF35" }}>Details</span>
        </h3>
        <p className={styles.p}>
          {`The Zealoops e-cycles are a game-changer in the world of electric
          bikes. With their sleek design and cutting-edge technology, these
          e-cycles are perfect for urban commuters and outdoor enthusiasts
          alike. One of the standout features of the Zealoops e-cycles is their
          long-lasting battery life. With a range of up to 60 miles on a single
          charge, you can easily tackle your daily commute or take a leisurely
          ride through the countryside without worrying about running out of
          power. The e-cycles are also equipped with powerful motors that
          provide smooth and effortless pedaling. Whether you're climbing steep
          hills or cruising along flat terrain, you'll appreciate the extra
          boost that the motor provides. In addition, the Zealoops e-cycles are
          incredibly lightweight and easy to maneuver. This makes them ideal
          for navigating busy city streets or crowded bike paths with ease.
          Overall, the Zealoops e-cycles are a top-of-the-line option for anyone
          looking to upgrade their biking experience. With their advanced
          features and reliable performance, you won't be disappointed with
          your purchase.`}
        </p>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h5 className={styles.h5}>{index + 1}. {faq.question}</h5>
            <p className={styles.p}>- {faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
