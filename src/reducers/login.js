/*
 STATE SHAPE:
{
  status: 'unknown',
  authResponse: {
     accessToken:  null,
     expiresIn: null,
     signedRequest: null,
     userID: null
  }
}
*/

import { RECEIVE_LOGIN_STATUS } from '../actions';
export default function login(state = {
  status: 'unknown',
  authResponse: {
    accessToken:  null,
    expiresIn: null,
    signedRequest: null,
    userID: null
  },
  lastUpdateRequested: null,
}, action) {
  switch (action.type) {
    case RECEIVE_LOGIN_STATUS:
      return Object.assign({}, state, action.response);
      return ;
    default:
      return state;
  }
}
