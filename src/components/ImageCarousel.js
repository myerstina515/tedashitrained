import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image2 from '../assets/NathaniaTesting2.jpg';
import Image1 from '../assets/ShieldTesting3.jpg';
import Image3 from '../assets/TandCTesting.jpg';

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
              <h3 id="h3">Tedashi - NASM/NCSF Certified Personal Trainer</h3>
              <p id="p">10+ Years of experience in fitness and health/wellness coaching</p>
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
              <h3 id="h3">Services - Personal Training, Online Coaching, Group Training</h3>
              <p id="p">All truly personalized to get you the "Forever Body" that will last you a lifetime!</p>
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
              <p id="p">Customized plans based off your goals, where you get help every step of the way!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}
export default ImageCarousel;