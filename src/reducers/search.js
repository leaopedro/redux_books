
import { TRIGGER_SEARCH, REQUEST_SEARCH, RECEIVE_BOOKS } from '../actions';

export default function search(state = {
  query: '',
  bookList: [],
  updatedAt: null,
  isLoading: false,

}, action) {
  switch (action.type) {
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        query: action.query
      });

    case RECEIVE_BOOKS:
      console.log('receive, ',state);
      return Object.assign({}, state, {
        bookList: action.bookList,
        isLoading: false,
        updatedAt: action.receivedAt
      });
    default:
      return state;
  }
}
