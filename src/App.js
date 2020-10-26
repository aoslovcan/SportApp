import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routers/Home'
import Navigation from './components/Navigation';
import Feed from './routers/Feed';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
        <Route path="/feeds"  component={Feed}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
