import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../../styles/slideAccueil.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slideImg from "../../images/slide1.png";

export default function SlideAccueil() {
  return (
    <Carousel className="carousel" autoPlay="true">
      <div>
        <img src={slideImg} alt="" />
      </div>
      <div>
        <img src={slideImg} alt="" />
      </div>
      <div>
        <img src={slideImg} alt="" />
      </div>
    </Carousel>
  );
}
