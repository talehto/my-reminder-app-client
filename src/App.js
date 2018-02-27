import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import * as ReactBootstrap from 'react-bootstrap';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom'
//import logo from './logo.svg';

import './App.css';
//import Header from './Header'
import StartMainPage from './StartMainPage'
import NewAlarmPage from './NewAlarmPage'

import TestPage from './TestPage'

class App extends Component {
    constructor(props) {
    super(props);
  }

  render() {
  return (
    <div>
        <Router>
        	<Switch>
            	<Route exact path="/" component={StartMainPage}/>
              <Route exact path="/newalarm" component={NewAlarmPage}/>
              <Route exact path="/test" component={TestPage}/>
          	</Switch>
        </Router>
    </div>
    );
  }
}

export default App;
