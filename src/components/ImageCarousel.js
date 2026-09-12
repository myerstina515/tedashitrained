import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image2 from '../assets/FBF_Nathania_TRX.png';
import Image1 from '../assets/FBF_Tedashi_Shield.png';
import Image3 from '../assets/FBF_Christina_Tedashi_TRX.png';


const ImageCarousel = () => {
  return (
    <>
      <div id="carouselSection">
        <Carousel id="carousel" controls={false}>
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
    </>
  )
}
export default ImageCarousel;