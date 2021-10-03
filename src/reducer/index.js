import { LOGIN, LOGGED_IN_USERNAME, LOG_OUT, SAVE_POST } from '../constants'
import { combineReducers } from 'redux';

const savePost = (state = [], action) => {
  switch (action.type) { 
    case SAVE_POST:
      return action.posts;
    default:
      return state;  
  }
}

const setlogin = (state = { isAuth: false }, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isAuth: action.isAuth
        }
      case LOGGED_IN_USERNAME: 
        return {
            ...state,
            loggedInUser: action.user
        }
      case LOG_OUT: 
        return {
            ...state,
            loggedInUser: '',
            isAuth: false,
        }  
      default:
        return state;
    }
}

const login = setlogin;
const posts = savePost;

export default combineReducers({
  login,
  posts
});