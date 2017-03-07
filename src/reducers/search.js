/*
 STATE:
 {
   query: '',
   bookList: [],
   updatedAt: null,
   isLoading: false,
 }
 */

import { TRIGGER_SEARCH, RECEIVE_BOOKS } from '../actions';

export default function search(state = {
  query: '',
  bookList: [],
  updatedAt: null,
  isLoading: false,
}, action) {
  switch (action.type) {
    case TRIGGER_SEARCH:
      return Object.assign({}, state, {
        query: action.query,
        isLoading: true,
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        bookList: action.bookList,
        isLoading: false,
        updatedAt: action.receivedAt,
      });
    default:
      return state;
  }
}