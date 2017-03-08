import axios from 'axios';
import { startLoader, stopLoader } from './loader.js'

export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';

export function triggerSearch(query) {
  if(!query || query === ''){
    return (dispatch) => {
      dispatch(receiveBooks({items: []}));
    }

  }else{
    return (dispatch) => {
      dispatch(startLoader());
      dispatch(requestSearch(query));
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`)
        .then((response) => {
          dispatch(stopLoader());
          dispatch(receiveBooks(response.data));
        })
        .catch((error) => {
          console.log(error);
          dispatch(stopLoader());
          dispatch(receiveApiError(error.response));
        });
    };
  }
}

export const REQUEST_SEARCH = 'REQUEST_SEARCH';
export function requestSearch(query) {
  return {
    type: REQUEST_SEARCH,
    query
  };
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export function receiveBooks(bookList) {
  return {
    type: RECEIVE_BOOKS,
    bookList: bookList.items,
    totalItems:  bookList.items.length,
    receivedAt: Date.now(),
  };
}

export const RECEIVE_API_ERROR = 'RECEIVE_API_ERROR';
export function receiveApiError(errorMessage) {
  return {
    type: RECEIVE_API_ERROR,
    errorMessage,
  };
}
