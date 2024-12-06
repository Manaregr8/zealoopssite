import React from 'react';
import './secondSection.css'; // Create a CSS file for styles

const SecondSection = () => {
  return (
    <section className="section">
      <div className="grid">
        <iframe
          src="https://www.youtube.com/embed/tj8yGbtMyL8?si=EN8lWFmTo2_K0JVF&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="data">
          <h3 class='secondBannerHead'>
            Its Available in <span style={{ color: '#FDAF35' }}>5 premium colors</span>
          </h3>
          <p className="p-data">
            The weather and nature is calling for you to come out. Let's go out for some fresh air. And what better way
            to do that than on a bicycle? A bicycle in your favourite colour that makes you happy as Spring.
            <br />
            The new stylish Zealoops e-cycle are available in 5 vibrant shade options:
          </p>
          <div className="color-segment">
            <div className="color1">
              <p>Urban Silver</p>
            </div>
            <div className="color2">
              <p>Maize Marvel</p>
            </div>
            <div className="color3">
              <p>Teal Harbor</p>
            </div>
            <div className="color4">
              <p>Caramel Rose</p>
            </div>
            <div className="color5">
              <p>Midnight Moss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
