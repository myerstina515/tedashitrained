import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image2 from '../assets/NathaniaTesting2.jpg';
import Image1 from '../assets/ShieldTesting3.jpg';
import Image3 from '../assets/TandCTesting.jpg';


const ImageCarousel = () => {
  return (
    <>
      <div id="testing">
        <Carousel id="carousel">
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