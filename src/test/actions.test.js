
import { toggleFavorite,showBookInfo,closeBookInfo,changePage,
  startLoader,stopLoader,
  TOGGLE_FAVORITE, SHOW_BOOK_INFO, CLOSE_BOOK_INFO, CHANGE_PAGE,
  START_LOADER,STOP_LOADER } from '../actions';

describe('TOGGLE_FAVORITE_ACTION', () => {
  it('should create an action to toggle a book s favorite control', () => {
    const bookId = '123456';
    const expectedAction = {
      type: TOGGLE_FAVORITE,
      bookId
    };
    expect(toggleFavorite(bookId)).toEqual(expectedAction)
  });
});

describe('BOOK_INFO_ACTION', () => {
  it('should create an action to show a book s info modal', () => {
    const bookItem ={
      info:{a:'',b:{}}
    } ;
    const expectedAction = {
      type: SHOW_BOOK_INFO,
      bookItem
    };
    expect(showBookInfo(bookItem)).toEqual(expectedAction)
  });

  it('should create an action to close the book s info modal', () => {
    const expectedAction = {
      type: CLOSE_BOOK_INFO
    };
    expect(closeBookInfo()).toEqual(expectedAction)
  });
});

describe('CHANGE_PAGE_ACTION', () => {
  it('should create an action to change the page', () => {
    const pageNumber = 2;
    const expectedAction = {
      type: CHANGE_PAGE,
      pageNumber
    };
    expect(changePage(pageNumber)).toEqual(expectedAction)
  });
});

describe('LOADER_ACTION', () => {
  it('should create an action to start the loader', () => {
    const expectedAction = {
      type: START_LOADER
    };
    expect(startLoader()).toEqual(expectedAction)
  });

  it('should create an action to start the loader', () => {
    const expectedAction = {
      type: STOP_LOADER
    };
    expect(stopLoader()).toEqual(expectedAction)
  });
});


