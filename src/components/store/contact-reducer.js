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
  //       "__v": 0
  //   },
}
export const getContacts = (contactsFromAPI) => {
  console.log('CONTACT-REDUCER getContacts:', contactsFromAPI);
  return {
    type: 'GET',
    payload: contactsFromAPI
  }
}

const contactReducer = (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      console.log('CONTACT-REDUCER contactsFromAPI', {payload});
      return {...state, contacts: payload};
      default:
        return state;
  }; 
}

export default contactReducer;