/*
 STATE SHAPE:
 errors: '',
 search: {
   query: '',
   bookList: [],
   updatedAt: null,
   isLoading: false,
 },
 pagination: {
   currentPage: 1,
   totalItems: 0,
   totalPages: 0,
 },
 loader: false,
 favorite: {
  list:[]
 },
 bookInfo:{
   isActive: false,
   bookData : null
 }
 */

import { combineReducers } from 'redux';
import errors from './errors';
import search from './search';
import pagination from './pagination';
import favorite from './favorite';
import loader from './loader';
import login from './login';
import bookInfo from './bookInfo';


const rootReducer = combineReducers({
  search,
  errors,
  pagination,
  favorite,
  loader,
  login,
  bookInfo
});

export default rootReducer;
