import axios from 'axios';
import React, { useState } from 'react';
import useAjaxCalls from './hooks/ajax';
import { Card, Button, CardColumns } from 'react-bootstrap';
import './Kettlebell.scss';

const Kettlebell = () => {
  const [contacts, setContacts] = useState([])
  const [URL] = useAjaxCalls();

  const getContacts = async () => {
    let contactsFromDB = await axios.get(URL)
      .then(response => {
        console.log('response', response.data);
        return response.data;
      })
    setContacts(contactsFromDB);
  }
  // const toggleContacted = (contacts.idx) => {
  //   console.log(contacts._id);
  // }
  // onClick={() => toggleContacted(contacts.idx)}
  return (

    <>
      <h1>Admin page</h1>
      <Button id="displayContacts" onClick={getContacts}>Display Contacts</Button>
      <div id="parent">
        <CardColumns>
        {contacts.map((contacts, idx) => (
          <div key={idx}>
            <Card id="contacts">
              <Card.Body>
                <Card.Title>Name: {contacts.name}</Card.Title>
                <Card.Text>ID: {contacts._id}</Card.Text>
                <Card.Text>Email: {contacts.emailAddress}</Card.Text>
                <Card.Text>Phone: {contacts.phoneNumber}</Card.Text>
                <Card.Text>Type: {contacts.trainingType}</Card.Text>
                <Card.Text>Injury: {contacts.injury}</Card.Text>
                <Card.Text id="longText">Goals: {contacts.goals}</Card.Text>
                <Card.Text id="longText">Message: {contacts.message}</Card.Text>
                {/* <Card.Text>Contacted? {contacts.contacted}</Card.Text> */}
                {/* <Button>Click if contacted</Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
        </CardColumns>
      </div>
    </>
  )
}
export default Kettlebell;