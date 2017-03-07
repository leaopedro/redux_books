/*
  {
    addSubredditForm
    subreddits,
    selectedSubreddit,
    postsBySubreddit
  }
*/

import { combineReducers } from 'redux';
import errors from './errors';
import search from './search';
import pagination from './pagination';
import favorite from './favorite';


const rootReducer = combineReducers({
  search,
  errors,
  pagination,
  favorite
});

export default rootReducer;
