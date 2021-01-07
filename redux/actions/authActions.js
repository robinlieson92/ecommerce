import Router from 'next/router';
import { AUTHORIZATION, DEAUTHORIZATION, USER, REMOVE_USER } from '../types';

export const setAuth = (value) => dispatch => {
  console.log(value)
  const token = '123456ABCDEFGHI';
  sessionStorage.setItem('token', token);
  const userData = {
    username: value.username,
    token: token,
    type: value.type
  }
  sessionStorage.setItem('user', JSON.stringify(userData));
  dispatch({type: AUTHORIZATION, payload: token});
  dispatch({type: USER, payload: userData});
  Router.push('/home');
};

// removing the token
export const deactiveAuth = () => dispatch => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  Router.push('/');
  dispatch({type: DEAUTHORIZATION});
  dispatch({type: REMOVE_USER});
};