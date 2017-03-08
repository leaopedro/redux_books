import { connect } from 'react-redux';
import FavoriteButton from '../components/BookList/FavoriteButton';
import { toggleFavorite } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    isFavorite: (state.favorite.list.indexOf(ownProps.bookId)!==-1),
    bookId: ownProps.bookId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickFavorite: (bookId) => {
      dispatch(toggleFavorite(bookId));
    }
  }
}

const FavoriteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteButton);

export default FavoriteContainer
