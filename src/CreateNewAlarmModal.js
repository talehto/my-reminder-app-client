
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid, Modal } from 'react-bootstrap';
import * as loginActions from './actions/loginActions';
import './App.css';

class CreateNewAlarmModal extends Component {

	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
    	this.hideModal = this.hideModal.bind(this);
    	this.saveAlarm = this.saveAlarm.bind(this);
    	this.tempNewAlarmName = ""
  	}

  	handleChange(event) {
    	console.log(event.target.value);
    	this.tempNewAlarmName = event.target.value;
    	//console.log(this.tempUserName)
  	}

  	hideModal() {
    	this.props.setShowCreateNewAlarmDialog(false)
  	}

  	saveAlarm() {
    	this.props.setShowCreateNewAlarmDialog(false)
    	this.props.setNewAlarm(this.tempNewAlarmName)
    	this.tempNewAlarmName = ""
  	}

  	render() {
    	return (
    		<Modal
          		show={this.props.showCreateNewAlarmDialog}
          		onHide={this.hideModal}
		      	dialogClassName="custom-modal">

			    <Modal.Header closeButton>
	            	<Modal.Title id="contained-modal-title-lg">Creating a new alarm</Modal.Title>
	          	</Modal.Header>

	   			<Modal.Body>
					<div className="NewAlarmDialog">
	          			<Form inline>
	            			<FormGroup controlId="formInlineName">
	              			{' '}
	              			<FormControl type="text" placeholder="alarm name" onChange={this.handleChange} />
	            			</FormGroup>
	            			{' '}
	          			</Form>
	        		</div>
	   			</Modal.Body>

	   			<Modal.Footer>
	            	<Button bsStyle="primary" onClick={this.saveAlarm}>Save</Button>
	            	<Button bsStyle="primary" onClick={this.hideModal}>Cancel</Button>
	          	</Modal.Footer>
         	</Modal>
    	)
	}
}
//

const mapStateToProps = (state, ownProps) => {
  return {
    showCreateNewAlarmDialog: state.get('showCreateNewAlarmDialog')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCreateNewAlarmDialog: showCreateNewAlarmDialog => dispatch(loginActions.setShowCreateNewAlarmDialog(showCreateNewAlarmDialog)),
    setNewAlarm: newAlarm => dispatch(loginActions.setNewAlarm(newAlarm))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewAlarmModal);

