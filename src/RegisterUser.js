import React, { Component } from 'react';
import { HelpBlock, Container, Button, Form } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as loginActions from './actions/loginActions';
import Header from './Header'

class RegisterUser extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.name)
        var user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        //this.props.setNewUser(user, this.props.history);
        this.props.setNewUser(user);
    }

    //handleClick(){
    //  console.log("algo");
    //}

    //componentWillReceiveProps(nextProps) {
    //    if(nextProps.auth.isAuthenticated) {
    //        this.props.history.push('/')
    //    }
    //    if(nextProps.errors) {
    //        this.setState({
    //            errors: nextProps.errors
    //        });
    //    }
    //}

    //componentDidMount() {
    //    if(this.props.auth.isAuthenticated) {
    //        this.props.history.push('/');
    //    }
    //}

    //FieldGroup = ({ id, label, ...props })  =>{
    FieldGroup({ id, label, ...props }) {
      return (
        <Form.Group controlId={id}>
          <Form.Label>{label}</Form.Label>
          <Form.Control {...props} />
        </Form.Group>
        );
    }
//
    render() {
      return (
        <div className="RegisterUser col-md-6 col-sm-8 col-xs-8">
          <Header />
          <form>
            <this.FieldGroup
              id="formControlsText"
              type="text"
              label="User name"
              placeholder="Enter user name"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
            <this.FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
              name="email"
              onChange={ this.handleInputChange }
              value={ this.state.email }
            />
            <this.FieldGroup
              id="formControlsEmail"
              type="email"
              label="Confirm email address"
              placeholder="Re-type email address"
            />
            <this.FieldGroup id="formControlsPassword" 
              label="Password" 
              type="password"
              placeholder="password"
              name="password"
              onChange={ this.handleInputChange }
              value={ this.state.password }
            />
            <this.FieldGroup id="formControlsPassword" 
              label="Corfirm password" 
              type="password"
              placeholder="Re-type password"
              name="password_confirm"
              onChange={ this.handleInputChange }
              value={ this.state.password_confirm }
            />
            <Button type="submit" variant="primary" onClick={this.handleSubmit}>Register</Button>
          </form>        
        </div>
    );
  }
}
//
RegisterUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    //setNewUser: (newUser, history) => dispatch(loginActions.registerUser2(newUser, history))
    setNewUser: newUser => dispatch(loginActions.registerUser2(newUser))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
//export default connect(mapStateToProps, registerUser2)(RegisterUser);


