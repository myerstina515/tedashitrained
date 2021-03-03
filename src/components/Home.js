import React from 'react';
import ImageCarousel from './ImageCarousel';
import Cards from './Cards';
import Video from './Video';
import { useState } from 'react';
import axios from 'axios';


const Home = () => {
  const [emailAddress, setEmail] = useState('');

  const emailSignUp = async (e) => {
    e.preventDefault();
    console.log('inside emailSignUp', emailAddress)
    // const emailName = e.target.value;
    // await setEmail(emailName);
    // console.log('this is being set', e.target.value)
    const email = {
      name: emailAddress
    }
    console.log('this is the object: ', email)
    await axios.post('https://dina-cors-anywhere.herokuapp.com/https://tt-api-server.herokuapp.com/client', {email})
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
  }
  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log('inside handleChange', emailAddress);
  }

  return(
    <>
      <ImageCarousel/>
      <Cards/>
      <Video/>
      <form onSubmit={emailSignUp}>
        <label>Sign up for our newsletter!</label>
        <input onChange={handleChange} type="text" default="Enter Email Address"></input>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}
export default Home;