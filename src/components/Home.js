import React from 'react';
import ImageCarousel from './ImageCarousel';
import Cards from './Cards';
import Video from './Video';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Home.scss';
// import Date from './Date.js';


const Home = () => {
  const [emailAddress, setEmail] = useState('');
  const [show, setShow] = useState(false);

  // const Date = () => {
  //   let newDate = new Date()
  //   let date = newDate.getDate();
  //   let month = newDate.getMonth() + 1;
  //   let year = newDate.getFullYear();
  
  //   return `${year}, ${month<10?`0${month}`:`${month}`}, ${date}`
  // }

  const emailSignUp = async (e) => {
    const todayDate = new Date();
    e.preventDefault();
    // console.log('inside emailSignUp', emailAddress)
    const email = {
      name: emailAddress,
      contacted: "no",
      date: todayDate,
      message: "signing up for newsletter from main page",
      newsletter: "yes"
    }
    // console.log('this is the object: ', email, todayDate)
    await axios.post('https://tt-api-server.herokuapp.com/client', email)
      .then(res => {
        // console.log(res);
        // console.log(res.data)
        setShow(true)
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
      { show
        ?
          <Alert id="successSubmit" variant="success" onClose={() => setShow(false)}>
            <Alert.Heading>Success!</Alert.Heading>
              <p>
                Thank you for signing up for our newsletter!
              </p>
          </Alert>
        :
      <Form id="emailSignUp" onSubmit={emailSignUp}>
          <Form.Label>Sign up for our newsletter!</Form.Label>
          {/* <br/> */}
          
          <Form.Control id="emailInput" onChange={handleChange} type="text" placeholder="Enter email address" />
          <Button id="emailButton" variant="dark" type="submit">Sign Up</Button>
      </Form>
      }

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