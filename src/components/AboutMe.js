import React from 'react';
import './AboutMe.scss';
import TedashiPic from '../assets/TedashiProfilePic.jpg';

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <h4
        id="headingAboutMe">My Journey to Personal Training</h4>
      <div id="containerAboutMe" class="topDiv">
        <div>
          <img id="displayImagesAboutMe" alt="tedashi" src={TedashiPic} />
        </div>
        <div class="bottomDiv">
          <p id="pTag">
            Growing up, I was always into sports. Soccer, BMX, Karate, Cross Country, Wrestling... I never thought about how the human body worked. To me, it just worked. My favorite sport that I ended up really having a passion for was wrestling. After graduating from Mountlake Terrace High School in 2005, I came back a few years later (2008) to coach with my old Head Coach, Kanoe Vierra. There was one day that we were having the team lift, I looked around and asked Kanoe why we were still having the team do the same routine that I did when I was in school. Him, being a Dean of Students and English teacher, didn't know any different than what he was taught in college, so that's what we were doing. He turned to me and told me that I could change anything if I had a better way of doing it.</p>
          {/* <br /> */}
          <p id="pTag">I didn't. I was working in the Aerospace field at that time, so not having any idea how to have them workout better, I decided to go get my first CPT and actually start helping the team learn more about their bodies and how to improve them. After learning that, I started training people on the side, and found myself with my first Personal Trainer job at Fitness 19 right down the street, where I became their top Trainer. I found myself wanting more that what a small fitness studio could offer, and went on to bigger and better things at 24 Hour Fitness a few years later.</p>
          {/* <br /> */}
          <p id="pTag">After spending a little over 5 years at 24, starting as a Level 1 Personal Trainer working my way to Master Trainer and onto Fitness Manager, I decided that my true passion was helping clients, so I went back to being a Master Trainer. After servicing over 8000 Sessions at 24, I helped change many lives - I was top in my field and made a small list of the best trainers (Top 10 in the company). I decided that I was ready to move on to bigger and better things again, starting my own Personal Training Business, Tedashi Trained. Now, here I am to help all of my clients - one session, one program at a time!</p>
          <br></br>
          <h6 id="thankYou">
            --
            Thank You,
          <br />
          Tedashi Myers
          <br />
          Founder/ Owner Tedashi Trained & Forever Body </h6>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;