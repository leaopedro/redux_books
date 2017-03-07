/*
 STATE: {
   currentPage: 1,
   totalItems: 0,
   totalPages: 0,
 }
 */

import { CHANGE_PAGE, RECEIVE_BOOKS } from '../actions';

export default function pagination(state = {
  currentPage: 1,
  totalItems: 0,
  totalPages: 0,
}, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPage: action.pageNumber,
      });
    case RECEIVE_BOOKS:
      return Object.assign({}, {
        totalItems: action.bookList.length,
        currentPage: 1,
        totalPages: Math.ceil(action.bookList.length/12),
      });
    default:
      return state;
  }
}