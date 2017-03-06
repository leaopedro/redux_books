/*
 STATE:
 {
  query: ''
 }
 */

import { TRIGGER_SEARCH } from '../actions';

export default function search(state = {
  query: ''
}, action) {
  switch (action.type) {
    case TRIGGER_SEARCH:
      return {query: action.query};
    default:
      return state;
  }
}