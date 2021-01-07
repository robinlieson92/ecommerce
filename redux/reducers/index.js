import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    authReducer,
    productsReducer
});

export default rootReducer;