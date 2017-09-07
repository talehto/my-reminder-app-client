import React, { Component } from 'react';
import { Grid, Navbar, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './App.css';

class RegisterUser extends Component {
    
    handleClick(){
      console.log("algo");
    }

    render() {
    return (
      <div className="RegisterUser">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="UserName" />
                <FormControl type="text" placeholder="password" />
              </FormGroup>
              {' '}
              <Button type="submit" onClick={this.handleClick}>Register</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default RegisterUser;

