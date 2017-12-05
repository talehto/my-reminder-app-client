import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';

import '../App.css';

class AlarmNameStep extends Component {

	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    	console.log(event.target.value);
  	}

    render() {
    	return (
    		<div className="step step2">
		      	<div className="row">
		        	<form id="Form" className="form-horizontal">
		          		<div className="form-group">
	            			<div className="col-md-10 col-sm-10 col-xs-10">
	            				<FormControl type="text" placeholder="alarm name" onChange={this.handleChange} bsSize="large"/>
	          				</div>
		         		</div>
		        	</form>
		      	</div>
    		</div>
    	)
    }

}

export default AlarmNameStep;




