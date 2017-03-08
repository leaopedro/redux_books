export const SHOW_BOOK_INFO = 'SHOW_BOOK_INFO';

export function showBookInfo(bookItem) {
    return {
        type: SHOW_BOOK_INFO,
        bookItem
    };
}
