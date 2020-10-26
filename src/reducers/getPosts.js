import {
  FETCH_POSTS_SUCCESS,
  FETCH_ERROR,
  FETCH_POSTS_STARTED,
} from "../actions/index";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const getPosts = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload.posts,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
export default getPosts;
