import {combineReducers} from 'redux';

const INITIAL_STATE = {
  posts: [],
  detail: [],
};

const postsReducer = (state = INITIAL_STATE, action) => {
  console.log('twevesdfhasdfsdf', action.type);
  switch (action.type) {
    case 'GET_POSTS':
      return {...state, posts: action.payload};
    case 'GET_POST_DETAIL':
      return {...state, detail: action.payload};
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  postData: postsReducer,
});
