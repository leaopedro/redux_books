import rootReducer from '../reducers'
import { TOGGLE_FAVORITE, SHOW_BOOK_INFO, CLOSE_BOOK_INFO, CHANGE_PAGE, START_LOADER,STOP_LOADER } from '../actions';

describe('ROOT_REDUCER', () => {
  let state = {
    errors: '',
    search: {
      query: '',
      bookList: [],
      updatedAt: null,
      isLoading: false,
      pagination: {
        currentPage: 1,
        totalItems: 0,
        totalPages: 0,
      }
    },
    favorite: {
      list:[]
    },
    loader: false,
    bookInfo:{
      isActive: false,
      bookData : null
    }
  };

  it('should return the initial state', () => {
    expect(
      rootReducer(undefined, {})
    ).toEqual(state)
  });

  it('should handle TOGGLE_FAVORITE', () => {
    expect(
      rootReducer(state, {
        type: TOGGLE_FAVORITE,
        bookId: '123456'
      })
    ).toEqual(
      Object.assign({},state, {favorite:{list: ['123456']}})
    );

    expect(
      rootReducer(
        Object.assign({},state, {favorite:{list: ['123456']}}),
        {
          type: TOGGLE_FAVORITE,
          bookId: '123456'
        }
      )
    ).toEqual(state)
  });

  it('should handle BOOK_INFO', () => {
    expect(
      rootReducer(state, {
        type: SHOW_BOOK_INFO,
        bookItem:{book:'book'}
      })
    ).toEqual(
      Object.assign({},state, {bookInfo:{isActive: true, bookData: {book:'book'}}})
    );

    expect(
      rootReducer(
        Object.assign({},state, {bookInfo:{isActive: true, bookData: {book:'book'}}})
        , {
        type: CLOSE_BOOK_INFO
      })
    ).toEqual(
      Object.assign({},state, {bookInfo:{isActive: false, bookData: {book:'book'}}})
    );
  });

  it('should handle LOADER', () => {
    expect(
      rootReducer(state, {
        type: START_LOADER
      })
    ).toEqual(
      Object.assign({},state, {loader:true})
    );

    expect(
      rootReducer(
        Object.assign({},state, {loader:true}),
        {type: STOP_LOADER}
      )
    ).toEqual(state);
  });
});