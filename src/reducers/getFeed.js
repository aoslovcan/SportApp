import {
    FETCH_FEED_SUCCESS,
    FETCH_ERROR,
    FETCH_FEED_STARTED,
    

  } from "../actions/index";
  
  
  const initialState = {
    feed: [],
    loading: false,
    error: null
  };
const getFeed = function(state = initialState, action) {
    switch (action.type) {
  
      case   FETCH_FEED_STARTED:
        return {
          ...state,
          loading: true
        };
      case  FETCH_FEED_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
         feed: action.payload.feed
        };
      case FETCH_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };

     
      default:
        return state;
    }
  }
  export default getFeed;