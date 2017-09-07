import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class StartMainPage extends Component {
    render() {
    return (
      <div className="StartMainPage">
        <Jumbotron>
    		<h1>Wake up!</h1>
    			<p>This application gives instruction to get your child to school.</p>
    			<p><Button bsStyle="primary">Learn more</Button></p>
  		</Jumbotron>
      </div>
    );
  }
}

export default StartMainPage;

