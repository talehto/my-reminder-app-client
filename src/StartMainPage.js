import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import './App.css';
import UserAlarms from './UserAlarms'
import Header from './Header'

class StartMainPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      if (!this.props.userName) {
          return (
          <div className="StartMainPage">
            <Header />
              <Jumbotron>
                <h1>Wake up!</h1>
                <p>This application advises your child to the school.</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
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

