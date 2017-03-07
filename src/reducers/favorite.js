
import { TOGGLE_FAVORITE } from '../actions';

export default function favorite(state = {
  list: JSON.parse(localStorage.getItem('favList'))||[],
}, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      if(state.list.indexOf(action.bookId)!==-1){
        state.list.splice(state.list.indexOf(action.bookId), 1);
      }else{
        state.list.push(action.bookId);
      }
      let newList = [...state.list];
      localStorage.setItem('favList', JSON.stringify(newList))
      return Object.assign({}, {
        list: newList
      });
    default:
      return state;
  }
}