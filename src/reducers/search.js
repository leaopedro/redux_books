/*
 STATE:
 errors: '',
 search: {
   query: '',
   bookList: [],
   updatedAt: null,
   isLoading: false,
   pagination: {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
   }
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
        query: action.query
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        bookList: action.bookList,
        isLoading: false,
        updatedAt: action.receivedAt
      });
    default:
      return state;
  }
}
