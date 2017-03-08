import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import PaginationContainer from '../containers/PaginationContainer';
import BookInfoContainer from '../containers/BookInfoContainer';

const Main = () => {
  return (
    <div>
      <SearchContainer />
      <PaginationContainer />
      <BookInfoContainer />
    </div>
  );
};


export default Main;
