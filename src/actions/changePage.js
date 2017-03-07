export const CHANGE_PAGE = 'CHANGE_PAGE';

export function changePage(pageNumber) {
  return {
    type: CHANGE_PAGE,
    pageNumber,
  };
}