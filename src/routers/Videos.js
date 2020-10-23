import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAthlete } from '../actions/index'


 function Videos(){
    const athlete = useSelector(state => state.athlete.athlete);
    console.log(athlete);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAthlete());
    }, []);

    return(
        <h1>Videos</h1>
    );
}
export default Videos