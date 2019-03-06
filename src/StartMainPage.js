import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import './App.css';
import UserAlarms from './UserAlarms'
import Header from './Header'

class StartMainPage extends Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
      if (!this.props.userName) {
          return (
          <div className="StartMainPage">
            <Header />
              <Jumbotron>
                <h1>Remind me!</h1>
                <p>You can create alarms by this application.</p>
                <p><Button variant="primary">Learn more</Button></p>
              </Jumbotron>          
          </div>
      );
      }else{
        return (
          <div className="UserAlarms">
            <Header />
            <UserAlarms />             
          </div>
          );
      }
  }
}
//

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.get('userName')
  }
};

export default connect(mapStateToProps)(StartMainPage);

