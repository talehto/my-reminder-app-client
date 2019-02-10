import React, { Component } from 'react';
import { Container, Navbar, Button, Form } from 'react-bootstrap';

import Login from './Login'
import RegisterUser from './RegisterUser'

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
              <Form inline>
                <Login />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }
}

export default Header;

