import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import PaginationContainer from '../containers/PaginationContainer';
import BookInfoContainer from '../containers/BookInfoContainer';
import LoginContainer from '../containers/LoginContainer';

const Main = () => {
  return (
    <div>
      <LoginContainer />
      <SearchContainer />
      <PaginationContainer />
      <BookInfoContainer />
    </div>
  );
};


export default Main;
