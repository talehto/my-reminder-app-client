import React, { Component } from 'react';
import { Form, Button, ButtonGroup, Navbar } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as loginActions from './actions/loginActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tempUserName = ""
  }

  handleChange(event) {
    console.log(event.target.value);
    this.tempUserName = event.target.value;
    console.log(this.tempUserName)
  }

  handleLoginClick() {
   console.log("handleLoginClick")
   console.log(this.tempUserName)
   this.props.setUserName(this.tempUserName)
  }

  handleLogoutClick() {
    console.log("handleLogoutClick")
    this.props.setUserName("")
    this.tempUserName = ""
    console.log(this.tempUserName)
  }

  handleRegisterClick(){
    console.log("handleRegisterClick")
    this.props.setProgramState('REGISTRATION_PAGE_OPENED')
  }

  render() {
    if (this.props.programState === 'REGISTRATION_PAGE_OPENED') {
      console.log('UserAlarms.render showCreateNewAlarmPage is TRUE')
        return <Redirect to="/register" push={true} />
        //
      }
    console.log(this.props.userName)
    if (this.props.userName) {
      return (
        <div className="Login">
          <Form inline>
            <Navbar.Text>
              Signed in as: {this.props.userName}
            </Navbar.Text>
            {' '}
            <ButtonGroup>
            <Button id="signInButton" className="navbar-btn" variant="primary" type="submit" onClick={this.handleLogoutClick}>
              Sign out
            </Button>
            </ButtonGroup>
          </Form>
        </div>
      );
    }else{
      return (
        <div className="Login">
          <Form inline>
            <Form.Group controlId="formInlineName">
              {' '}
              <Form.Control type="text" placeholder="Email" onChange={this.handleChange} />
            </Form.Group>
            {' '}
            <Form.Group onChange={this.handleChange} controlId="formInlineEmail">
              {' '}
              <Form.Control type="email" placeholder="Password" />
            </Form.Group>
            {' '}
            <ButtonGroup>
            <Button id="signInButton" className="navbar-btn" variant="primary" type="submit" 
             onClick={this.handleLoginClick}>
              Sign in
            </Button>
            <Button className="navbar-btn" variant="primary" type="submit" onClick={this.handleRegisterClick}>
              Register
              </Button>
            </ButtonGroup>
          </Form>
        </div>
      );  
    } 
  }
}
//
const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.get('userName'),
    programState: state.get('state')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: userName => dispatch(loginActions.setUserName(userName)),
    setProgramState: state => dispatch(loginActions.setProgramState(state))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

