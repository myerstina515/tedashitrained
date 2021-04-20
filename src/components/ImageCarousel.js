import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image2 from '../assets/NathaniaResized.jpg';
import Image1 from '../assets/TedashiShield3.jpg';
import Image3 from '../assets/TedashiChristinaPlank2.jpg';

const ImageCarousel = () => {
  return (
    <>
        <Carousel id="carousel">
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption id="caption">
              <h3 id="h3">Tedashi Trained</h3>
              <p id="p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />
            <Carousel.Caption id="caption">
              <h3 id="h3">Training</h3>
              <p id="p">Individual, Group, and Partner training</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item id="carouselImages" interval={5000}>
            <img
              id="images"
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />
            <Carousel.Caption id="caption">
              <h3 id="h3">Goals</h3>
              <p id="p">Plans to hit your personal goals</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}
export default ImageCarousel;