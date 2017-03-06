import axios from 'axios';
export const TRIGGER_SEARCH = 'TRIGGER_SEARCH';

export function triggerSearch(query) {
  return (dispatch) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+`)
      .then((response) => {
        dispatch(receiveBooks(query, response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(receiveApiError(error.response));
      });
  };
}