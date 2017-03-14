
// import { startLoader, stopLoader } from './loader.js'

export const REQUEST_LOGIN_STATUS = 'REQUEST_LOGIN_STATUS';
export function requestLoginStatus() {
  return (dispatch) => {
    // dispatch(startLoader());
    FB.getLoginStatus(function(response) {
      dispatch(receiveLoginStatus(response));
    });
  }
}

export const REQUEST_FB_LOGIN = 'REQUEST_FB_LOGIN';
export function requestFbLogin() {
  return (dispatch) => {
    // dispatch(startLoader());
    FB.login(function(response){
      dispatch(receiveLoginStatus(response));
    });
  }
}

export const RECEIVE_LOGIN_STATUS = 'RECEIVE_LOGIN_STATUS';
export function receiveLoginStatus(response) {
  return {
    type: RECEIVE_LOGIN_STATUS,
    response
  }
}

