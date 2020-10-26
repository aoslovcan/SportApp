import React, { useEffect } from 'react';
import clsx from 'clsx';

import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Link from '@material-ui/core/Link';
import './style.css';

export default function Navigation(props) {
    let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname]);
    
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" aria-expanded="false"
                 aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul id="nav-category" className="navbar-nav col-md-12">
                    <li className="navbar-brand col-md-3 ">
                            
                                 <SportsSoccerIcon/> SportApp
                                
                        </li>
                        <li className="nav-item col-md-3 ">
                            <Link className= "nav-link active"
                             href= "/">
                                Home
                                 </Link>
                        </li>
                        <li className="nav-item col-md-3 ">
                            <Link className={`${pathname.match('/feeds') ? 'open-link' : 'nav-link'}`}
                             href= "/feeds">
                                Feeds
                                 </Link>
                        </li>
                      
                     
                    </ul>
                </div>
            </nav>




        </>
    );
}