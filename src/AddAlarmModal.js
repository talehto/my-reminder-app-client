import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, ControlLabel, Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid, Modal } from 'react-bootstrap';
import * as loginActions from './actions/loginActions';
import './App.css';

class AddAlarmModal extends Component {

	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
    	this.hideModal = this.hideModal.bind(this);
    	this.saveAlarm = this.saveAlarm.bind(this);
  	}

  	handleChange(event) {
    	console.log(event.target.value);
    	this.tempNewAlarmName = event.target.value;
  	}

  	hideModal() {
    	this.props.setShowAddAlarmDialog(false)
  	}

  	saveAlarm() {
    	this.props.setShowAddAlarmDialog(false)
    	this.props.addNewAlarmToUser("aaaa")
  	}

  	render() {
    	return (
    		<Modal
          		show={this.props.showAddAlarmDialog}
          		onHide={this.hideModal}
		      	dialogClassName="custom-modal">

			    <Modal.Header closeButton>
	            	<Modal.Title id="contained-modal-title-lg">Adding alarm to the user</Modal.Title>
	          	</Modal.Header>

	          	<Modal.Body>
					<div className="addUserAlarmList">
	          			<Form inline>
	            			<ListGroup>
    							<ListGroupItem>Item 1</ListGroupItem>
    							<ListGroupItem>Item 2</ListGroupItem>
    							<ListGroupItem>...</ListGroupItem>
  							</ListGroup>
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
    showAddAlarmDialog: state.get('showAddAlarmDialog')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowAddAlarmDialog: showAddAlarmDialog => dispatch(loginActions.setShowAddAlarmDialog(showAddAlarmDialog)),
    addNewAlarmToUser: newUserAlarm => dispatch(loginActions.setNewUserAlarm(newUserAlarm))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAlarmModal);

