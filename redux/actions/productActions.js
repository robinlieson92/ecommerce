import axios from 'axios';
import { START_GET_PRODUCT, GET_PRODUCT_LIST } from '../types';

export const getProductData = () => dispatch => {
  dispatch({type: START_GET_PRODUCT});
  axios.get('https://private-4639ce-ecommerce56.apiary-mock.com/home')
    .then(res => {
      console.log(res.data[0].data);
      dispatch({type: GET_PRODUCT_LIST, payload: res.data[0].data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: GET_PRODUCT_LIST, payload: []});
    })
}