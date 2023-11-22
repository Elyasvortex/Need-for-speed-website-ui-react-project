import React from 'react';
 
import { SubHeading} from '../../components'

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Racing is art" />
      <h1 className="app__header-h1">Need for Speed</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Ayrton Senna once said, "You will never know the feeling of a driver
        when winning a race.The helmet hides feelings that cannot be understood.
      </p>
      <button type="button" className="custom__button">
        Expole Cars
      </button>
    </div>
    <div className="app__wrapper_img">
      <img
        src="https://img.freepik.com/premium-photo/car-racing-high-speed-blurred-background-ai-generated-image_532963-6882.jpg?size=626&ext=jpg"
        alt="header img"
      />
    </div>
  </div>
);

export default Header;
