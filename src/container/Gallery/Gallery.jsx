import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
// import { images } from "../../constants";

import "./Gallery.css";


const Galleryimages = [
  "https://wallpaperaccess.com/full/2553597.jpg",
  "https://wallpapercave.com/wp/XMVYW1r.jpg",
  "https://i.pinimg.com/originals/8b/fc/4e/8bfc4ed76d0d49882d933aab37945320.jpg",
  "https://wallpapercave.com/wp/IB0c6Zb.jpg",
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Our Moves</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          {" "}
          CARS is an incubator for the most innovative products and solutions
          driving the future of the automotive industry. We are made up of
          Cars.com, Dealer Inspire and DealerRater.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {Galleryimages.map((image,index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index +1}`}>
                <img src={image} alt="" />
                <BsInstagram className="gallery__image-icon"/>
            </div>
          ) )}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
