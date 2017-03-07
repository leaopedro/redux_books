import { connect } from 'react-redux';
import Page from '../components/BookList';
import { changePage } from '../actions';

function mapStateToProps(state) {
  let items = state.search.bookList.slice((state.pagination.currentPage*12-12), state.pagination.currentPage*12 );
  return {
    bookList: items,
    totalPages: state.pagination.totalPages,
    currentPage: state.pagination.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPageChoice: (page) => {
      dispatch(changePage(page));
    }
  };
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PaginationContainer
