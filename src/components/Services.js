import React from 'react';
import './Services.scss';
import Ashley from '../assets/TedashiAndAshleyResized.jpg';
import Nathania from '../assets/Nathania2.jpg';
import TedashiGroupTraining from '../assets/TedashiGroupTraining2.jpg';
// import '../App.css';

const Services = () => {
  return (
    <>
      <div id="containerLeft">
        <div><img id="displayImages" alt="one on one training" src={Ashley}>
        </img><img id="displayImages" class="second" alt="Nathania pushing sled" src={Nathania}></img></div>
        <div id="textDiv">
          <h2>In Person: One on One/Couples Training</h2>
          <p id="pTag">Train one-on-one, or with a spouse, friend or co-worker. With a custom designed fitness program for you that is designed to reach your fitness goals faster and safer than you would on your own. </p>
          <p id="pTag">You will be provided accountability and motivation that you need to stay on track, and your program will be frequently adjusted to make better progress and avoid plateaus. Modifications can be made to any exercise, if necessary, depending on varying fitness levels or presence of any pre-existing injuries.</p>
          <p id="pTag">All In person sessions are 50 minutes long, and include: </p>
          <ul>
            <li>Online digital client folder</li>
            <li>Email communication to help with any questions or issues that may arise</li>
            <li>Text message availability for questions: messages will be returned within <b>24 Hours</b></li>
            <li>Personalized programming specific to your goals </li>
            <li>Accountability to make sure you're keeping the commitment to yourself</li>
            <li>Fun, inventive workouts that will make sure you never get bored!</li>
            <li>A fun and exciting Personal Trainer with 10+ years of experience to help you change your life, like a close friend would</li>
          </ul>
          <p id="pTag">To learn more about in-person training, please fill out <a href="/contact">request info form</a>, and you will be contacted to develop a plan that is right for you. Every client is given a complimentary consultation to make sure this is the right fit for you!</p>
        </div>
      </div>
      <div id="containerRight">
        <div id="textDiv">
          <h2>Virtual/Online Training</h2>
          <p id="pTag">Virtual/Online: Personal Training in the comfort of your own personal space. Whether you need to work out in your own living room, or need some help with form and programming at the gym, this might be the option for you. Obtain the accountability and motivation you need to reach your fitness goals wherever you are!</p>
          <p id="pTag">Achieve your goals from the convince of Zoom sessions, that are recorded and uploaded privately to YouTube via a link that is provided for easy reference in your online client folder. All you need is a computer, tablet, smartphone, or smart TV with a good internet connection.</p>
          <p id="pTag">Equipment is not needed or required. Online personal training is able to bring real time feedback and cueing, and allows for the feel of an in-person personal training session at home! It includes:</p>
          <ul>
            <li>Online digital client folder</li>
            <li>Catalog of previous session links for reference</li>
            <li>Email communication to help with any questions or issues that may arise</li>
            <li>Personalized programming specific for your goals</li>
            <li>Accountability to make sure you're keeping the commitment to yourself</li>
            <li>Fun, inventive workouts that will make sure you never get bored!</li>
          </ul>
          <p id="pTag">To learn more about online/virtual training, please fill out <a href="/contact">request info form</a>, and you will be contacted to develop a plan that is right for you. Every client is given a complimentary consultation to make sure this is the right fit for you! </p>
        </div>
        <div id="rightDiv"><img id="displayImages" alt="virtual/online training" src={TedashiGroupTraining}></img></div>
      </div>
      <div id="containerLeft">
        <div><img id="displayImages" alt="one on one training" src={TedashiGroupTraining}>
        </img></div>
        <div id="textDiv">
          <h2>Training Club (Group Training) </h2>
          <p id="pTag">Train in a group is an affordable way to have fun and still have semi-personal attention to your fitness journey. With custom designed workouts designed to push you, have fun, and safer than you would on your own. </p>
          <p id="pTag">You will be provided accountability and motivation that you need to stay on track and consistently adjust your program to avoid plateaus. Modifications can be made to any exercise depending on fitness level or any pre-existing injuries when necessary and having a trainer there allows you to keep it safe, fun, and challening. </p>
          <p id="pTag">All Training Club Sessions are 50 Min Long, and include:</p>
          <ul>
            <li>Email communication to help with any questions or issues that may arise</li>
            <li>Text message availability for questions that will be returned within <b>24 Hours</b></li>
            <li>Semi-Personalized Programming specified for your goals </li>
            <li>Accountability to make sure you're keeping the commitment to yourself</li>
            <li>Fun, inventive workouts that will make sure you never get bored!</li>
            <li>A fun and exciting Personal Trainer with 10+ years of experience to help you change your life, like a close friend would</li>
            <li>Group of peers to also keep you accountable to make the setting feel more enjoyable</li>
          </ul>
          <p id="pTag">To learn more about in-person training, please fill out <a href="/contact">request info form</a>, and you will be contacted to develop a plan that is right for you. Every client is given a complimentary consultation to make sure this is the right fit for you!</p>
        </div>
      </div>
    </>
  )
}
export default Services;