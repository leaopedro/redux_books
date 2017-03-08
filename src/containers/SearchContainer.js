import { connect } from 'react-redux';
import Search from '../components/Search';
import { triggerSearch } from '../actions';

function mapStateToProps(state) {
    console.log('STATE',state);
    return {
    isLoading: state.loader,
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
  mapDispatchToProps
)(Search);

export default SearchContainer
