import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img
        src="https://logos-world.net/wp-content/uploads/2021/10/Need-For-Speed-Logo-500x281.png"
        alt=""
      />{" "}
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <p className="p__opensans">
          The FIA Formula One World Championship has been one of the premier
          forms of racing around the world since its inaugural season in 1950.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_wheel">
        <img
          src="https://pngteam.com/images/car-wheel-png-430x429_0b5a4b49_transparent_202f21.png.png"
          alt="about_wheel"
        />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <p className="p__opensans">
          The FIA Formula One World Championship has been one of the premier
          forms of racing around the world since its inaugural season in 1950.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
