import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchFeed } from '../actions/index';
import { Player } from 'video-react';
import './style-feed.css';
import '../../node_modules/video-react/dist/video-react.css';


function Feed() {
  const feed = useSelector(state => state.feed.feed);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchFeed());

  }, []);

  return (
    <>

      <div className="container">
        <div className="row">


          {feed.map(m => <div className="col-md-4">  <div className="card" >

            <div className="card-body">
              <h5 className="card-title">{m.athlete.name}</h5>
              <p id="description" className="card-text">{m.description}</p>
            </div>
            <div className="card-body">
              <Player
                playsInline
                poster={m.video.poster}
                src={m.video.url} />
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          </div>)}
        </div>
      </div>
    </>
  );
}
export default Feed;