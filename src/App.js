import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import * as ReactBootstrap from 'react-bootstrap';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom'
//import logo from './logo.svg';

import './App.css';
import Header from './Header'
import StartMainPage from './StartMainPage'

class App extends Component {
    constructor(props) {
    super(props);
  }

  render() {
  return (
    <div>
        <Router>
        	<Switch>
            	<Route path="/" component={Header}/>
          	</Switch>
        </Router>
        <StartMainPage />
    </div>
    );
  }
}

export default App;
