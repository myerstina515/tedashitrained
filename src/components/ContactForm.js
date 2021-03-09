import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.scss';
import useAjaxCalls from './hooks/ajax';
// import { NavItem } from 'react-bootstrap';
import axios from 'axios';

const ContactForm = (props) => {
  // object model: {
  //       "_id": "603d4323db9abd502871c601",
  //       "name": "Tina Myers",
  //       "emailAddress": "myers.tina515@gmail.com",
  //       "phoneNumber": 4259618468,
  //       "trainingType": "group training",
  //       "injury": false,
  //       "goals": "weight loss",
  //       "message": "what are your prices?",
  //       "contacted": "false"
  //   },
  const [URL, list, setList] = useAjaxCalls();
  const [item, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...item, [e.target.name]: e.target.value })
    console.log('item in handlechange ', item)
  };

  const handleSubmit = async (e) => {
    console.log(URL)
    e.preventDefault();
    axios.post(URL, {
      name: item.name,
      emailAddress: item.emailAddress,
      phoneNumber: item.phoneNumber,
      trainingType: item.trainingType,
      injury: item.injury,
      goals: item.goals,
      message: item.message,
      contacted: false
    })
      .then(results => {
        console.log('inside the .then ', results);
        setList([...list, results.data]);
        console.log('after set list', list);
      })
      .catch((err) => {
        console.error(err)
      })
    e.target.reset();
    console.log('this is the item in handlesubmit: ', item);
    // props.handleSubmit(item);
    setState({});
  };

  return (
    <>
      <h2 id="contactUs">Contact Us</h2>
      <div id="bodyArea">
        <Form onSubmit={handleSubmit} id="contactUsForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleChange} name="name" type="text"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} type="text" name="emailAddress"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onChange={handleChange} type="number" name="phoneNumber"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" onChange={handleChange}>
            <Form.Label>Training Type (select one)</Form.Label>
            <Form.Check
              type="radio"
              name="trainingType"
              value="1on1"
              label="1 on 1 (in person)"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="Group (in person)"
              value="groupInPerson"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="1 on 1 (online)"
              value="1on1online"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="CMT small group (online)"
              value="CMT"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="Online: programming only"
              value="onlineProgramming"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="Nutrition coaching"
              value="nutritionCoaching"
            />
          </Form.Group>
          <Form.Group onChange={handleChange} name="injury">
            <Form.Label>History of Injury</Form.Label>
            <Form.Check
              type="radio"
              name="injury"
              label="Yes (describe in message below)"
              value="true"
            />
            <Form.Check
              type="radio"
              name="injury"
              label="No"
              value="false"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Goals</Form.Label>
            <Form.Control onChange={handleChange} as="textarea" rows={3} name="goals" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control onChange={handleChange} as="textarea" rows={5} name="message" />
          </Form.Group>
          <Button variant="primary" type="submit">Submit Inquiry</Button>
        </Form>
      </div>
    </>
  )
}
export default ContactForm;