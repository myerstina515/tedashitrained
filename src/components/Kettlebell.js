import axios from 'axios';
import React, { useState } from 'react';
import useAjaxCalls from './hooks/ajax';
import { Card, Button, CardGroup, Modal } from 'react-bootstrap';
import './Kettlebell.scss';

const Kettlebell = () => {
  const [contacts, setContacts] = useState([])
  const [URL] = useAjaxCalls();
  const [show, setShow] = useState(false);
  // const [contacted, setContacted] = useState([])
  const [deleteName, setDeleteName] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (contacts) => {
    setShow(true);
    setDeleteName(contacts);
  }

  const getContacts = async () => {
    let contactsFromDB = await axios.get(URL)
      .then(response => {
        console.log('response', response.data);
        return response.data;
      })
    let sortedContacts = contactsFromDB.sort((a, b) => 
    (a.name > b.name) ? 1 : -1);
    await setContacts(sortedContacts);
  }
  const contactClient = async (contacts) => {
    console.log(contacts._id);
    // setContacts(contacts.contacted);
    if (contacts.contacted === "no") {
      await axios.put(`${URL}/${contacts._id}`, {
        contacted: "yes"
      })
        .then(response => {
          console.log('response', response.data);
          return response.data;
        })
      await (refresh())
        .catch((err) => console.error(err))
    } else if (contacts.contacted === "yes") {
      await axios.put(`${URL}/${contacts._id}`, {
        contacted: "no"
      })
        .then(response => {
          console.log('response', response.data);
          return response.data;
        })
      await (refresh())
        .catch((err) => console.error(err))
    }
  }

  const deleteContact = async (contacts) => {
    console.log(contacts._id);
    await axios.delete(`${URL}/${contacts._id}`)
      .then(response => {
        console.log('you have deleted: ', response.data)
      })
    await (handleClose());
    await (refresh())
      .catch((err) => console.error(err))
  }

  // const contactedClient = async (contacted) => {
  //   await axios.put(`${URL}/${contacted._id}`, {
  //     contacted: "no"
  //   })
  //     .then(response => {
  //       console.log('response', response.data);
  //       return response.data;
  //     })
  //   await (refresh())
  //     .catch((err) => console.error(err))

  // }

  const refresh = async () => {
    let contactsFromDB = await axios.get(URL)
      .then(response => {
        console.log('response', response.data);
        return response.data;
      })
    let sortedContacts = contactsFromDB.sort((a, b) => 
      (a.name > b.name) ? 1 : -1);
    await setContacts(sortedContacts);
  }

  // onClick={() => deleteContact(contacts)}
  console.log('these are the contacts going into the return', contacts)
  return (

    <>
      <h1>Admin page</h1>
      <Button variant="dark" id="displayContacts" onClick={getContacts}>Display Contacts</Button>
      <div id="parent">
        <CardGroup>
          {contacts.map((contacts, idx) => (
            <div key={idx}>
              {contacts.contacted === "no"
                ?
                <Card id="contacts">
                  <Card.Body>
                    <button onClick={() => handleShow(contacts)} id="deleteX" type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Card.Title>{contacts.name}</Card.Title>
                    <Card.Text id="text">ID: {contacts._id}</Card.Text>
                    <Card.Text id="text">Email: {contacts.emailAddress}</Card.Text>
                    <Card.Text id="text">Phone: {contacts.phoneNumber}</Card.Text>
                    <Card.Text id="text">Type: {contacts.trainingType}</Card.Text>
                    {contacts.injury === "true"
                      ? <Card.Text id="textDanger">Injury: {contacts.injury}</Card.Text>
                      : <Card.Text id="text">Injury: {contacts.injury}</Card.Text>}
                    <Card.Text id="longText">Goals: {contacts.goals}</Card.Text>
                    <Card.Text id="longText">Message: {contacts.message}</Card.Text>
                    {contacts.contacted === "no" ?
                      <Card.Text id="textDanger">Contacted: {contacts.contacted}</Card.Text>
                      : <Card.Text id="textSuccess">Contacted: {contacts.contacted}</Card.Text>}
                    <Button variant="dark" id="toggleButton" onClick={() => contactClient(contacts)}>Toggle Contacted</Button>

                  </Card.Body>
                </Card>
                :
                <div></div>
              }
            </div>
          ))}
          {contacts.map((contacts, idx) => (
            <div key={idx}>
              {contacts.contacted === "yes"
                ?
                <Card id="contacts">
                  <Card.Body>
                    <button onClick={() => handleShow(contacts)} id="deleteX" type="button" class="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Card.Title>{contacts.name}</Card.Title>
                    <Card.Text id="text">ID: {contacts._id}</Card.Text>
                    <Card.Text id="text">Email: {contacts.emailAddress}</Card.Text>
                    <Card.Text id="text">Phone: {contacts.phoneNumber}</Card.Text>
                    <Card.Text id="text">Type: {contacts.trainingType}</Card.Text>
                    {contacts.injury === "true"
                      ? <Card.Text id="textDanger">Injury: {contacts.injury}</Card.Text>
                      : <Card.Text id="text">Injury: {contacts.injury}</Card.Text>}
                    <Card.Text id="longText">Goals: {contacts.goals}</Card.Text>
                    <Card.Text id="longText">Message: {contacts.message}</Card.Text>
                    {contacts.contacted === "no" ?
                      <Card.Text id="textDanger">Contacted: {contacts.contacted}</Card.Text>
                      : <Card.Text id="textSuccess">Contacted: {contacts.contacted}</Card.Text>}
                    <Button variant="dark" id="toggleButton" onClick={() => contactClient(contacts)}>Toggle Contacted</Button>

                  </Card.Body>
                </Card>
                :
                <div></div>
              }
            </div>
          ))}

          <Modal id="modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {deleteName.name}?
                    </Modal.Body>
            <Modal.Footer>
              <Button id="modalButton" variant="secondary" onClick={handleClose}>Close</Button>
              <Button id="modalButton" variant="primary" onClick={() => deleteContact(deleteName)}>Delete</Button>
            </Modal.Footer>
          </Modal>

        </CardGroup>
      </div>
    </>
  )
}
export default Kettlebell;