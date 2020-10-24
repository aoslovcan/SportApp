import React,{ useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchFeed } from '../actions/index';


 function Feed(){
    const feed = useSelector(state => state.feed.feed);

    console.log(feed);

    console.log(feed.map(m => m.athlete.name + m.video.url));

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchFeed());
      
    }, []);

    return(

        feed.map(m =>   <div className="card" style={{width : '18rem'}}>
        <img className="card-img-top" src={m.athlete.avatar}  alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>)
      
    );
}
export default Feed;