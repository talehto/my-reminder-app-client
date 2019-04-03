import React, { Component } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Login from './Login'

class Header extends Component {
    render() {
    return (
      <Navbar variant="dark" fixed="top">
          <Container>
              <Navbar.Brand>
                <a href="/">My Reminder</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            <Navbar.Collapse>
            <Login />
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Header;

