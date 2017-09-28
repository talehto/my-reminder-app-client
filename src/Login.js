import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, ButtonGroup, Navbar } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions';

class Login extends Component {

    constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
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

  render() {
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
            <Button id="signInButton" className="navbar-btn" bsStyle="primary" type="submit" onClick={this.handleLogoutClick}>
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
            <FormGroup controlId="formInlineName">
              {' '}
              <FormControl type="text" placeholder="Username" onChange={this.handleChange} />
            </FormGroup>
            {' '}
            <FormGroup cononChange={this.handleChange}trolId="formInlineEmail">
              {' '}
              <FormControl type="email" placeholder="Password" />
            </FormGroup>
            {' '}
            <ButtonGroup>
            <Button id="signInButton" className="navbar-btn" bsStyle="primary" type="submit" 
             onClick={this.handleLoginClick}>
              Sign in
            </Button>
            <Button className="navbar-btn" bsStyle="primary" type="submit">
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
    userName: state.get('userName')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: userName => dispatch(loginActions.setUserName(userName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

