import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, ButtonGroup, Navbar } from 'react-bootstrap';
import './App.css';

class Login extends Component {

    constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {isLoggedIn: false, userName: ""};
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({userName: event.target.value});
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    if (isLoggedIn) {
      return (
        <div className="Login">
          <Form inline>
            <Navbar.Text>
              Signed in as: {this.state.userName}
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

export default Login;
