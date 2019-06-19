import { combineReducers } from "redux";
import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  auth,
  form: formReducer
});
