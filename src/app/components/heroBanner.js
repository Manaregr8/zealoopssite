import React from "react";
import "./hero.css"; // The styles will be moved to a separate CSS file

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(./images/banner.jpg)` }}>
      <div className="grid">
        <div className="textBanner">
          <h3>
            ZeaL<span style={{ color: "#FDAF35" }}>oo</span>ps
          </h3>
          <p>Delivering you</p>
          <h2>AMAZING || CREATIVE || COMFORTABLE</h2>
          <a to="/product" className="button">
            Product
          </a>
        </div>
        <div className="cycleBanner">
          <img id="animated2" src="./images/g3.png"alt="cycle" />
          <img id="animated" src="./images/g8.png" alt="cycle" />
          <img id="animated2" src="./images/g2.png" alt="cycle" />
          <img id="animated" src="./images/g8.png" alt="cycle" />
          <img id="animated2" src="./images/g3.png" alt="cycle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
