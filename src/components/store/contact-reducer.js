let initialState = {
  contacts: []
  // object model: {
  //       "_id": "603d4323db9abd502871c601",
  //       "name": "Tina Myers",
  //       "emailAddress": "myers.tina515@gmail.com",
  //       "phoneNumber": 4259618468,
  //       "trainingType": "group training",
  //       "injury": false,
  //       "goals": "weight loss",
  //       "message": "what are your prices?",
  //       "contacted": false,
  //       "routedFrom": "Google Search"
  //       "__v": 0
  //   },
}
export const populateContacts = payload => {
  console.log('CONTACT-REDUCER getContacts:', payload);
  return {
    type: 'GET',
    payload: payload
  }
}
export const updateContacts = (name, contacted) => {
  console.log('CONTACT-REDUCER updateContacts', {name}, {contacted});
  return {
    type: 'UPDATE',
    payload: {name, contacted}
  }
}

const contactReducer = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      console.log('CONTACT-REDUCER contactsFromAPI', {payload});
      return {...state, contacts: payload};
    
    case 'UPDATE':
      console.log('CONTACT-REDUCER updateContacts', {payload});
      return {payload}
    default:
      return state;
  }; 
}

export default contactReducer;