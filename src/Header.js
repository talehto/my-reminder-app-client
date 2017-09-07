import React, { Component } from 'react';
import { Grid, Navbar, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

import Login from './Login'

class Header extends Component {
    render() {
    return (
      <Navbar inverse fixedTop fluid>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Weak up</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form>
                <Login />
              </Navbar.Form>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
    );
  }
}

export default Header;

