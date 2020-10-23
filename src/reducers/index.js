import getAthlete from './getAthlete'

import{ combineReducers } from 'redux';

const allReducers = combineReducers({
   athlete : getAthlete
});

export default allReducers;