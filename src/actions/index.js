import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

export const FETCH_ATHLETE_SUCCESS = 'FETCH_ATHLETE_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_ATHLETE_STARTED = 'FETCH_ATHLETE_STARTED';

export const fetchAthleteSuccess = athlete =>  {
    
   
    return {
        type: FETCH_ATHLETE_SUCCESS,
        payload: {
            athlete
        }
      };

}

const fetchError = error => {
    return {
      type: FETCH_ERROR,
      payload: {
        error
      }
    };
  };

  const fetchAthleteStarted = () => {
    return {
      type: FETCH_ATHLETE_STARTED,
      payload: {
        isLoading: true
      }
    };
  };

  export const fetchAthlete = () => {
    return dispatch => {
      dispatch(fetchAthleteStarted());
  
      axios
        .get("http://localhost:3001/athlete")
        .then(res => {
          dispatch(fetchAthleteSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message));
        });
    };
  };