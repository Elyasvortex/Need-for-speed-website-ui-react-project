import React from 'react';

import {images} from '../../constants'

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img
      src="https://pngteam.com/images/car-wheel-png-900x900_0b5a4b49_transparent_20207e.png.png"
      alt=""
      className="spoon__img"
    />
  </div>
);

export default SubHeading;
