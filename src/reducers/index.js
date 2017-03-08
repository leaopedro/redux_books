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
import loader from './loader';
import bookInfo from './bookInfo';


const rootReducer = combineReducers({
  search,
  errors,
  pagination,
  favorite,
  loader,
    bookInfo
});

export default rootReducer;
