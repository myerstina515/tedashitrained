import React from 'react';
import ImageCarousel from './ImageCarousel';
import Cards from './Cards';
import Video from './Video';
import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Home.scss';


const Home = () => {
  const [emailAddress, setEmail] = useState('');

  const emailSignUp = async (e) => {
    e.preventDefault();
    console.log('inside emailSignUp', emailAddress)
    const email = {
      name: emailAddress,
      contacted: "no"
    }
    console.log('this is the object: ', email)
    await axios.post('https://tt-api-server.herokuapp.com/client', email)
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
  }
  const handleChange = (e) => {
    setEmail(e.target.value);
    // console.log('inside handleChange', emailAddress);
  }

  return (
    <>
      <ImageCarousel />
      <Cards />
      <Video />
      <Form id="emailSignUp" onSubmit={emailSignUp}>
          <Form.Label>Sign up for our newsletter!</Form.Label>
          {/* <br/> */}
          <Form.Control id="emailInput" onChange={handleChange} type="text" placeholder="Enter email address" />
          <Button id="emailButton" variant="dark" type="submit">Sign Up</Button>
      </Form>

      {/* <form id="emailSignUp" onSubmit={emailSignUp}>
        <label>Sign up for our newsletter!</label>
        <br />
        <input id="emailInput" onChange={handleChange} type="text" default="Enter Email Address"></input>
        <button id="emailButton" type="submit">Sign Up</button>
      </form> */}
    </>
  )
}
export default Home;