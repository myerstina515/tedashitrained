import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import './ContactForm.scss';
import useAjaxCalls from './hooks/ajax';
// import { NavItem } from 'react-bootstrap';
import axios from 'axios';
// import Popup from 'react-popup';

const ContactForm = (props) => {
  // object model: {
  //       "date": "mm/dd/yyyy"
  //       "_id": "603d4323db9abd502871c601",
  //       "name": "Tina Myers",
  //       "emailAddress": "myers.tina515@gmail.com",
  //       "phoneNumber": 4259618468,
  //       "preferredContact": "text" 
  //       "trainingType": "group training",
  //       "injury": "false",
  //       "goals": "weight loss",
  //       "message": "what are your prices?",
  //       "contacted": "false"
  //   },
  const [URL, list, setList] = useAjaxCalls();
  const [item, setState] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setState({ ...item, [e.target.name]: e.target.value })
    // console.log('item in handlechange ', item)
    // console.log('what type', typeof(item.date))
  };

  // let completedForm = false;
// console.log(completedForm)
  // const notify = () => toast("Thank you for submitting!")
  const handleSubmit = async (e) => {
    // console.log(URL)
    e.preventDefault();
    axios.post(URL, {
      
      name: item.name,
      date: item.date,
      emailAddress: item.emailAddress,
      phoneNumber: item.phoneNumber,
      trainingType: item.trainingType,
      injury: item.injury,
      goals: item.goals,
      message: item.message,
      contacted: "no",
      routedFrom: (item.routedFrom, item.referredBy),
      newsletter: item.newsletter
    })
      .then(results => {
        // console.log('inside the .then ', results);
        setList([...list, results.data]);
        // console.log('after set list', results.data);
        // completedForm = true;
        console.log("inside the function")
        setShow(true)
      })
      .catch((err) => {
        console.error(err)
      })
    e.target.reset();
    // console.log('this is the item in handlesubmit: ', item);
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Today's Date</Form.Label>
            <Form.Control onChange={handleChange} name="date" type="date" required></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleChange} type="text" name="emailAddress"></Form.Control>
            <Form.Group onChange={handleChange}>
              <Form.Check
                type="checkbox"
                name="newsletter"
                value="yes"
                label="Would you like to recieve the weekly newsletter?"
              />
            </Form.Group>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control onChange={handleChange} type="text" name="phoneNumber"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" onChange={handleChange}>
            <Form.Label>Training Type (select one)</Form.Label>
            <Form.Check
              type="radio"
              name="trainingType"
              value="1 on 1"
              label="1 on 1 (in person)"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="Group (in person)"
              value="Group: In Person"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="1 on 1 (online)"
              value="1-on-1 (online)"
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
              value="Online Programming"
            />
            <Form.Check
              type="radio"
              name="trainingType"
              label="Nutrition coaching"
              value="Nutrition Coaching"
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
          <Form.Group onChange={handleChange} name="routedFrom">
            <Form.Label>How did you find me?</Form.Label>
            {/* <Form.Check
              type="radio"
              name="routedFrom"
              label="Google Search"
              value="true"
            />
            <Form.Check
              type="radio"
              name="routedFrom"
              label="Social Media"
              value="false"
            />
            <Form.Check
              type="radio"
              name="routedFrom"
              label="Drive-by"
              value="false"
            />
            <Form.Check
              type="radio"
              name="routedFrom"
              label="Client Referral"
              value="false"
            /> */}
            {/* <Form.Label>Specifically</Form.Label> */}
            <Form.Control onChange={handleChange} as="textarea" rows={1} name="referredBy" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Goals</Form.Label>
            <Form.Control onChange={handleChange} as="textarea" rows={3} name="goals" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control onChange={handleChange} as="textarea" rows={5} name="message" />
          </Form.Group>
          {show
          ?
          <Alert variant="success" onClose={() => setShow(false)}>
            <Alert.Heading>Success!</Alert.Heading>
              <p>
                Thank you for submitting your information! Tedashi will get back to you as soon as he can!
              </p>
          </Alert>
          :
          <Button id="emailButton" variant="dark" type="submit">Submit Inquiry</Button>
        }           
          {/* <Button id="emailButton" variant="dark" type="submit">Submit Inquiry</Button> */}
          {/* <ToastContainer /> */}
        </Form>
        {/* <Popup /> */}
      </div>
    </>
  )
}
export default ContactForm;