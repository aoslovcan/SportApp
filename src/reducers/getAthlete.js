import {
    FETCH_ATHLETE_SUCCESS,
    FETCH_ERROR,
    FETCH_ATHLETE_STARTED,
    

  } from "../actions/index";
  
  
  const initialState = {
    athlete: [],
    loading: false,
    error: null
  };
const getAthlete = function(state = initialState, action) {
    switch (action.type) {
  
      case   FETCH_ATHLETE_STARTED:
        return {
          ...state,
          loading: true
        };
      case  FETCH_ATHLETE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          athlete: action.payload.athlete
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
  export default getAthlete;