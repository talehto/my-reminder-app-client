import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import StartMainPage from './StartMainPage'
import NewAlarmPage from './NewAlarmPage'
import RegisterUser from './RegisterUser'

class App extends Component {
    //constructor(props) {
    //  super(props);
    //}

  render() {
  return (
    <div>
        <Router>
        	<Switch>
            	<Route exact path="/" component={StartMainPage}/>
              <Route exact path="/newalarm" component={NewAlarmPage}/>
              <Route exact path="/register" component={RegisterUser}/>
          	</Switch>
        </Router>
    </div>
    );
  }
}
//

export default App;
