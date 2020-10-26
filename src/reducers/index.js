
import getFeed from './getFeed';

import getPosts from './getPosts'

import{ combineReducers } from 'redux';

const allReducers = combineReducers({
  
   feed : getFeed,
   posts : getPosts
});

export default allReducers;