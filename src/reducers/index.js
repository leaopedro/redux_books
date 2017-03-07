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


const rootReducer = combineReducers({
  search,
  errors,
  pagination,
});

export default rootReducer;
