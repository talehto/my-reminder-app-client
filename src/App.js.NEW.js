import React, { Component } from 'react';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
import { Grid, Navbar } from 'react-bootstrap';
//import logo from './logo.svg';
import './App.css';
import Header from './Header'
import StartMainPage from './StartMainPage'

class App extends Component {
    render() {
    return (
      <div>
         <Switch>
            <Route exact path='/' component={Header} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
      </div>
    );
  }
}

export default App;
