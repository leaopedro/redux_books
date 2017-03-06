import { connect } from 'react-redux';
import Options from '../components/Options';
import { triggerSearch } from '../actions';


function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onSearch: (query) => {
      dispatch(triggerSearch(query));
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Options);

export default SearchContainer
