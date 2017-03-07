import { connect } from 'react-redux';
import BookList from '../components/BookList';

function mapStateToProps(state) {
  return {
    bookList: state.search.bookList
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const RequestedBookList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);

export default RequestedBookList
