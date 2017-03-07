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
  pagination:{
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
  }
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
        pagination: Object.assign({}, state.pagination, {
          totalItems: action.totalItems,
          currentPage: 1,
          totalPages: action.totalItems/20,
        })
      });
    default:
      return state;
  }
}