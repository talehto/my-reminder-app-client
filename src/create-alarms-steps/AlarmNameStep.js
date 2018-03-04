import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid, Alert } from 'react-bootstrap';
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import Joi from 'joi';

import '../App.css';

class AlarmNameStep extends Component {

	constructor(props) {
    	super(props);

	    this.state = {
  			alarmName: props.getStore().alarmName
    	};

    	this.validatorTypes = {
      		alarmName: Joi.string().regex(/^[a-zA-Z0-9 ]{1,20}$/)
    	};

    	this.handleChange = this.handleChange.bind(this);
    	this.isValidated = this.isValidated.bind(this);
    	this.getValidatorData = this.getValidatorData.bind(this);
    }

    handleChange(event) {
    	console.log(event.target.value);
    	this.setState({alarmName: event.target.value});
  	}

  	getValidatorData() {
  		console.log('getValidatorData()');
  		console.log(this.refs.alarmName.value);
		//return this.state;
		return {
      		alarmName: this.refs.alarmName.value,
    	}
  	};

  	isValidated() {
  		console.log("isValidated called");
  		return new Promise((resolve, reject) => {
      		this.props.validate((error) => {
	        	if (error) {
	        		console.log("validate returned error");
	          		reject('Error'); // form contains errors
	        	}

	        	if (this.props.getStore().alarmName != this.getValidatorData().alarmName) { // only update store of something changed
		          this.props.updateStore({
		            ...this.getValidatorData()
		            //savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
		          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
		        }

	        	resolve();
        	});
    	});
  	}

  	renderHelpText(message, id) {
  	  return (<div><Alert bsStyle="warning"><strong>{message}</strong></Alert></div>)
  	};
	//

    render() {

    	let notValidClasses = {};
    	notValidClasses.alarmNameCls = this.props.isValid('alarmName') ?
        'no-error col-md-8' : 'has-error col-md-8';

    	return (
    		<div className="step step2">
		      	<div className="row">
		        	<form id="Form" className="form-horizontal">
		          		<div className="form-group">
	            			<div className="col-md-10 col-sm-10 col-xs-10">
		            			<div className={notValidClasses.alarmNameCls}>		            		
			                        <input
			                            ref="alarmName"
			                            name="alarmName"
			                            autoComplete="off"
			                            className="form-control"
			                            placeholder="alarm name"
			                            required
			                            onBlur={this.props.handleValidation('alarmName')}
			                            onChange={this.handleChange}
			                        />
			                        {this.props.getValidationMessages('alarmName').map(this.renderHelpText)}
	                        	</div>
	          				</div>
		         		</div>
		        	</form>
		      	</div>
    		</div>
    	)
    }

}

//export default AlarmNameStep;
export default validation(strategy)(AlarmNameStep);

//<FormControl type="text" placeholder="alarm name" onChange={this.handleChange} bsSize="large" ref="alarmName" name="alarmName" onBlur={this.props.handleValidation('alarmName')}/>
