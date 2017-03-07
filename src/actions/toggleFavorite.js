export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export function toggleFavorite(bookId) {
  return {
    type: TOGGLE_FAVORITE,
    bookId,
  };
}