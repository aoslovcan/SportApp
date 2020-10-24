import getAthlete from './getAthlete';

import getFeed from './getFeed';

import getPosts from './getPosts'

import{ combineReducers } from 'redux';

const allReducers = combineReducers({
   athlete : getAthlete,
   feed : getFeed,
   posts : getPosts
});

export default allReducers;