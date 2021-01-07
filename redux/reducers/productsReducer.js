import { START_GET_PRODUCT, GET_PRODUCT_LIST } from '../types';

const initialState = {
  productData: [],
  isLoading: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_PRODUCT:
      return { ...state, isLoading: true }
    case GET_PRODUCT_LIST:
      return { ...state, isLoading: false, productData: action.payload }
    default:
      return state;
  }
};

export default productsReducer;