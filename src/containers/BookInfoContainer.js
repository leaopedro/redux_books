import { connect } from 'react-redux';
import BookInfoModal from '../components/BookList/BookInfoModal';
import { toggleFavorite,closeBookInfo } from '../actions';

function mapStateToProps(state, ownProps) {
    return {
        bookData: state.bookInfo.bookData,
        isActive: state.bookInfo.isActive
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClickFavorite: (bookId) => {
            dispatch(toggleFavorite(bookId));
        },
        onCloseRequest: () => {
            dispatch(closeBookInfo());
        }
    }

}

const BookInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookInfoModal);

export default BookInfoContainer
