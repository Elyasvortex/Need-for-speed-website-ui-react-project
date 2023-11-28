import React from 'react';
import {FiFacebook,FiInstagram,FiTwitter} from 'react-icons/fi';


import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img
          src="https://pngimg.com/uploads/need_for_speed/small/need_for_speed_PNG45.png"
          alt=""
        />
        <p className="p__opensans">"If you can dream it, you can do it."</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00am-012:00am</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">07:00am-11:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 NFS. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
