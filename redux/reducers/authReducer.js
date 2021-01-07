import { AUTHORIZATION, DEAUTHORIZATION, USER, REMOVE_USER } from '../types';

const initialState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION:
      return { ...state, token: action.payload };
    case USER:
      return { ...state, user: action.payload };
    case DEAUTHORIZATION:
      return { token: null };
    case REMOVE_USER:
        return { user: null};
    default:
      return state;
  }
};

export default authReducer;