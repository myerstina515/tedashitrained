import axios from 'axios';
import { useState } from 'react';

function useAjaxCalls() {
  const URL = 'https://tt-api-server.herokuapp.com/client';
  const [list, setList] = useState([]);

  const getContacts = async () => {
    console.log('Inside the get clients function');
    await axios.get(URL)
      .then(results => {
        console.log('results', results.data)
        setList(results.data.results);
      })
      .catch((err) => {
        console.error(err)
      });
  }

  const addContact = (item) => {
    console.log('this is the item in addContact ', item);
    // axios.post(URL, {
    //   "_id": "603d4323db9abd502871c601",
    //   "name": item.name,
    //   "emailAddress": item.emailAddress,
    //   "phoneNumber": item.phoneNumber,
    //   "trainingType": [item.trainingType],
    //   "injury": [item.injury],
    //   "goals": item.goals,
    //   "message": item.message,
    // })
    // .then(results => {
    //   console.log('inside the .then ', results);
    //   setList([...list, results.data]);
    //   console.log('after set list', list);
    // })
    // .catch((err) => {
    //   console.error(err)
    // })
  };
  return [URL, list, setList, addContact, getContacts]
}
export default useAjaxCalls;
