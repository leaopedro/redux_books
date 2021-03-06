import { connect } from 'react-redux';
import Page from '../components/BookList';
import { changePage, showBookInfo } from '../actions';

function mapStateToProps(state) {
  let items = state.search.bookList.slice((state.pagination.currentPage*12-12), state.pagination.currentPage*12 );
  return {
    bookList: items,
    totalPages: state.pagination.totalPages,
    currentPage: state.pagination.currentPage,
    currentQuery: state.search.query
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPageChoice: (page) => {
      dispatch(changePage(page));
    },
    showBookInfo: (bookItem) =>{
        dispatch(showBookInfo(bookItem));
    }
  };
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default PaginationContainer
