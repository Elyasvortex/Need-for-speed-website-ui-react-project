import React from 'react';


 import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img
        src="https://media.gettyimages.com/id/1358596025/photo/abu-dhabi-united-arab-emirates-second-placed-and-championship-runner-up-lewis-hamilton-of.jpg?s=612x612&w=0&k=20&c=O7w1uD-FiXDGPlLwkL_UwqkDe9vmi5SvIB2n7u7dvsU="
        alt="" className='driver'
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Top Racer's Word" />
      <h1 className="headtext__cormorant"> What we Beleive In</h1>

      <div className="app__driver-content">
        <div className="app__driver-content_quote">
          <p className="p__opensans">
            “You just need to be accepted for who you are and be proud of who
            you are and that is what I'm trying to do.”
          </p>
        </div>
      </div>
      <div className="app__driver-sign">
        <p>Sir Lewis Hamilton</p>
        <p className="p__opensans">Formula1 Driver</p>
      </div>
    </div>
  </div>
);

export default Chef;
