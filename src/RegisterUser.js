import React, { Component } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import './App.css';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as loginActions from './actions/loginActions';
import Header from './Header'

class RegisterUser extends Component {

    constructor() {
        super();
        this.state = {
            name: {value: '', isValid: true, message: ''},
            email: {value: '', isValid: true, message: ''},
            email_confirmation: {value: '', isValid: true, message: ''},
            password: {value: '', isValid: true, message: ''},
            password_confirmation: {value: '', isValid: true, message: ''},
            validated: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateRegistrationForm = this.generateRegistrationForm.bind(this);
    }
    
    handleInputChange(e) {
      console.log('Setting value to a password_confirmation field')
      const state = {
        ...this.state,
        [e.target.name]: {
          ...this.state[e.target.name],
          value: e.target.value,
        }
      };
      this.setState(state);
    }

    handleSubmit(e) {
        console.log('this.state.password_confirmation.value: ' + this.state.password_confirmation.value)
        const form = e.currentTarget;

        this.resetValidationStates();
        e.preventDefault();

        let validityStatus = form.checkValidity()
        if (validityStatus === false) {
          e.stopPropagation();
        }

        if (false === this.checkEmailAndPasswordConfirmation()){
          console.log("checkEmailAndPasswordConfirmation returned false")
          console.log('handleSubmit() this.state.password_confirmation.isValid: ' + this.state.password_confirmation.isValid)
          e.stopPropagation();
          validityStatus = false
        }

        this.setState({ validated: true });
        if (validityStatus === true) {
          console.log(this.state.name.value)
          var user = {
            name: this.state.name.value,
            email: this.state.email.value,
            password: this.state.password.value,
            password_confirm: this.state.password_confirmation.value
          }

          this.props.setNewUser(user, this.props.history);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    FieldGroup({ id, label,errTxt, ...props }) {
      return (
        <Form.Group controlId={id}>
          <Form.Label>{label}</Form.Label>
          <Form.Control {...props} />
          <Form.Control.Feedback type="invalid">
            {errTxt}
          </Form.Control.Feedback>
        </Form.Group>
        );
    }
//
  render() {
    console.log("this.props.programState: " + this.props.programState)
    var errorDialog = this.generateErrorDialog();
    if(this.props.programState === 'REGISTRATION_FAILED'){
      return(<div>{errorDialog}</div>);
    }
    var registrationForm = this.generateRegistrationForm();
    return(<div>{registrationForm}</div>);
    //
  }

  generateErrorDialog(){
    const handleDismiss = () => {this.props.setProgramState('REGISTRATION_PAGE_OPENED')}
    return (
      <Alert variant="danger" onClose={handleDismiss} dismissible>
          <Alert.Heading>Registration failed...</Alert.Heading>
          <p>
            Error message: 
          </p>
          <p>
            { this.props.errors }
          </p>
          <p>
            Please re-fill a registration form
          </p>
        </Alert>
        //
    )
  }

  generateRegistrationForm(){
    const { name, email, email_confirmation, password, password_confirmation, validated } = this.state;
      console.log('render() password_confirmation.isValid: ' + password_confirmation.isValid)
      return (
        <div id="RegisterUserForm" className="RegisterUser col-md-6 col-sm-8 col-xs-8">
          <Header />
          <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
            <this.FieldGroup
              id="formControlsText"
              label="User name"
              type="text"
              placeholder="Enter user name"
              errTxt={ name.message }
              name="name"
              required
              onChange={ this.handleInputChange }
              value={ name.value }
            />
            <this.FieldGroup
              id="formControlsEmail"
              label="Email address"
              type="email"
              placeholder="Enter email"
              errTxt={ email.message }
              name="email"
              required
              isInvalid={ !email.isValid }
              onChange={ this.handleInputChange }
              value={ email.value }
            />
            <this.FieldGroup
              id="formControlsEmailConfirm"
              label="Confirm email address"
              type="email"
              placeholder="Re-type email address"
              errTxt={ email_confirmation.message }
              name="email_confirmation"
              required
              isInvalid={ !email_confirmation.isValid }
              onChange={ this.handleInputChange }
              value={ email_confirmation.value }
            />
            <this.FieldGroup id="formControlsPassword" 
              label="Password" 
              type="password"
              placeholder="password at least 8 characters"
              errTxt={ password.message }
              name="password"
              required
              minLength="8"
              isInvalid={ !password.isValid }
              onChange={ this.handleInputChange }
              value={ password.value }
            />
            <this.FieldGroup id="formControlsPasswordConfirm" 
              label="Corfirm password" 
              type="password"
              placeholder="Re-type password"
              errTxt={ password_confirmation.message }
              name="password_confirmation"
              required
              isInvalid={ !password_confirmation.isValid }
              minLength="8"
              onChange={ this.handleInputChange }
              value={ password_confirmation.value }
            />
            <Button type="submit" variant="primary">Register</Button>
          </Form>        
        </div>
    );
  }

  initFormValues(){
    const state = JSON.parse(JSON.stringify(this.state));
    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
        state[key].value = '';
      }
    });

      this.setState(state);
  }

  resetValidationStates(){
    // make a copy of everything in state
    const state = JSON.parse(JSON.stringify(this.state));
    /*
      loop through each item in state and if it's safe to assume that only
      form values have an 'isValid' property, we can use that to reset their
      validation states and keep their existing value property. This process
      makes it easy to set all validation states on form inputs in case the number
      of fields on our form grows in the future.
    */
      Object.keys(state).map(key => {
        if (state[key].hasOwnProperty('isValid')) {
          state[key].isValid = true;
          state[key].message = '';
        }
      });

      this.setState(state);
  }

  checkEmailAndPasswordConfirmation(){
    const { email, email_confirmation, password, password_confirmation } = this.state;
    let correct = true
    if (email.value !== email_confirmation.value) {
      email.isValid = false
      email.message = 'Email confirmation is not equal with email'
      this.setState({email: email})
      email_confirmation.isValid = false
      email_confirmation.message = 'Email confirmation is not equal with email'
      this.setState({email_confirmation: email_confirmation})
      correct = false
    }
    if (password.value !== password_confirmation.value) {
      password.isValid = false;
      password.message = 'Password confirmation is not equal with password'
      this.setState({password: password})
      password_confirmation.isValid = false;
      password_confirmation.message = 'Password confirmation is not equal with password'
      this.setState({password_confirmation: password_confirmation})
      correct = false
    }
    return correct
  }

}
//
RegisterUser.propTypes = {
    setNewUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.get('isAuthenticated'),
    errors: state.get('errors'),
    programState: state.get('state')
});

const mapDispatchToProps = dispatch => {
  return {
    setNewUser: (newUser,history) => { dispatch(loginActions.registerUser(newUser,history)) },
    setProgramState: newState => { dispatch(loginActions.setProgramState(newState)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);

