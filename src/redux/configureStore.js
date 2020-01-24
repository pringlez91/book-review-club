import {createStore, combineReducers} from 'redux';
import { Reviews } from './reviews';
import { Books } from './books';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            books: Books,
            reviews: Reviews,

        })
    );

    return store;
}
