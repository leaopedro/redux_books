// state shape:{
//    isActive: false,
//    bookData : null
// }

import { SHOW_BOOK_INFO, CLOSE_BOOK_INFO } from '../actions';

export default function bookInfo(state = {
    isActive: false,
    bookData : null
}, action) {
    switch (action.type) {
        case SHOW_BOOK_INFO:
            return Object.assign({}, state, {
                bookData: action.bookItem,
                isActive: true
            });
        case CLOSE_BOOK_INFO:
            return Object.assign({}, state, {
                isActive: false
            });
        default:
            return state;
    }
}
