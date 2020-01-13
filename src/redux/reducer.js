import { BOOKS } from '../shared/books';
import { REV } from '../shared/reviews';


export const intialState = {
  books: BOOKS,
  reviews: REV,

};

export const Reducer = (state = intialState, action) => {
  return state;
}
