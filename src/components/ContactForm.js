import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <>
      <h2 id="contactUs">Contact Us</h2>
      <div id="bodyArea">
        <Form id="contactUsForm">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name="studentName" type="text"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" name="studentID"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" name="grade"></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Form.Label>Training Type</Form.Label>
            <Form.Check
              id='1'
              label="1 on 1 (in person)"
            />
            <Form.Check
              label="Group (in person)"
              id='2'
            />
            <Form.Check
              label="1 on 1 (online)"
              id='3'
            />
            <Form.Check
              label="CMT small group (online)"
              id='4'
            />
            <Form.Check
              label="Online: programming only"
              id='5'
            />
            <Form.Check
              label="Nutrition coaching"
              id='6'
            />
          </div>
          <Form.Group>
            <Form.Label>History of Injury</Form.Label>
            <Form.Check
              label="Yes (describe in message below)"
              id='1'
            />
            <Form.Check
            label="No"
            id='2'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Goals</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Button variant="primary" type="submit">Submit Inquiry</Button>
        </Form>
      </div>
    </>
  )
}
export default ContactForm;