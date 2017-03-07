import { connect } from 'react-redux';
import Page from '../components/BookList';

function mapStateToProps(state) {
  let items = state.search.bookList.slice((state.search.pagination.currentPage*20-20),(state.search.pagination.currentPage*20));
  console.log(items);
  return {
    bookList: items,
    totalPages: state.search.pagination.totalPages,
    currentPage: state.search.pagination.currentPage
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);

export default PaginationContainer
