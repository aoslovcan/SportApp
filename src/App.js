import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Athlete from './routers/Athlete'
import Navigation from './components/Navigation';
import Feed from './routers/Feed';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Router>
      <Switch>
        <Route path="/" exact component={Athlete}/>
        <Route path="/feed" exact component={Feed}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
