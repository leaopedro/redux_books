import { connect } from 'react-redux';
import Search from '../components/Search';
import { triggerSearch } from '../actions';

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchRequest: (query) => {
      dispatch(triggerSearch(query));
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer
