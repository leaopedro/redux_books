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


const rootReducer = combineReducers({
  search,
  errors,
});

export default rootReducer;
