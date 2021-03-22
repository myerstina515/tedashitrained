import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import contactStore from './contact-reducer.js';
// import cart from './cart-reducer.js';
// import api from './api-reducer.js';

let reducers = combineReducers ({ contactStore }); 

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();