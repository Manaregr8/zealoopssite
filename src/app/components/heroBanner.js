import React from "react";
import "./hero.css"; // The styles will be moved to a separate CSS file
import logo from "./images/banner.jpg";
import cycle from "./images/g8.png";
import cycle2 from "./images/g3.png";
import cycle3 from "./images/g2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${logo})` }}>
      <div className="grid">
        <div className="textBanner">
          <h3>
            ZeaL<span style={{ color: "#FDAF35" }}>oo</span>ps
          </h3>
          <p>Delivering you</p>
          <h2>AMAZING || CREATIVE || COMFORTABLE</h2>
          <Link to="/product" className="button">
            Product
          </Link>
        </div>
        <div className="cycleBanner">
          <img id="animated2" src={cycle2} alt="cycle" />
          <img id="animated" src={cycle} alt="cycle" />
          <img id="animated2" src={cycle3} alt="cycle" />
          <img id="animated" src={cycle} alt="cycle" />
          <img id="animated2" src={cycle2} alt="cycle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
