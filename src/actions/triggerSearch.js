import axios from 'axios';
export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';

export function triggerSearch(query) {
  return (dispatch) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => {
        dispatch(receiveBooks(query, response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(receiveApiError(error.response));
      });
  };
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export function receiveBooks(query, bookList) {
  return {
    type: RECEIVE_BOOKS,
    query,
    bookList: bookList.items,
    totalItems:  bookList.totalItems,
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