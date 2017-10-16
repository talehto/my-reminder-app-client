
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import './App.css';
import AlarmListItem from './AlarmListItem'
import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions';
import CreateNewAlarmModal from './CreateNewAlarmModal'
import AddAlarmModal from './AddAlarmModal'

class UserAlarms extends Component {
	constructor(props) {
    	super(props);
    	this.handleCreateNewAlarmDialog = this.handleCreateNewAlarmDialog.bind(this);
    	this.handleAddAlarmDialog = this.handleAddAlarmDialog.bind(this);
  	}

  	handleCreateNewAlarmDialog(){
  		console.log("handleCreateNewAlarmDialog called")
  		this.props.setShowCreateNewAlarmDialog(true)
  	}

  	handleAddAlarmDialog(){
  		console.log("handleAddAlarmDialog called")
  		this.props.setShowAddAlarmDialog(true)
  	}

 	handlePlayClick(){
		console.log("Play pressed")
	}

	handleDeleteClick(){
		console.log("Delete note pressed")
	}

  render() {
  return (
  	<div>
  		<CreateNewAlarmModal />
  		<AddAlarmModal />
  		<Grid>
  			<Row>
  				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
  					<p><Button id="addAlarmButton" bsStyle="primary" onClick={this.handleAddAlarmDialog} >Add alarm</Button>
  					<Button bsStyle="primary" onClick={this.handleCreateNewAlarmDialog}>Create alarm</Button></p>
  				</Col>
  			</Row>
  			<Row>
	  			<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
		        <Panel bsStyle="primary" header="Monday">
				    <ListGroup fill>
			    	  	<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
			    	  		alarmTime={"9:30"} alarmTitle={"herätys"}/>
			        	<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)}
			        	alarmTime={"10:30"} alarmTitle={"kouluun"} />
			    	</ListGroup>
		  		</Panel>
		  		</Col>
	  		</Row>
	  		<Row>
		  		<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
		  		<Panel bsStyle="primary" header="Tuesday">
				    <ListGroup fill>
			    	  	<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
			    	  		alarmTime={"9:30"} alarmTitle={"herätys aikaisin aamulla"}/>
			        	<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)}
			        	alarmTime={"10:30"} alarmTitle={"kouluun"} />
			    	</ListGroup>
		  		</Panel>
		  		</Col>
	  		</Row>
  		</Grid>
  	</div> 
    );
  }
}
//

const mapStateToProps = (state, ownProps) => {
  return {
    showCreateNewAlarmDialog: state.get('showCreateNewAlarmDialog'),
    showAddAlarmDialog: state.get('showAddAlarmDialog')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCreateNewAlarmDialog: showCreateNewAlarmDialog => dispatch(loginActions.setShowCreateNewAlarmDialog(showCreateNewAlarmDialog)),
    setShowAddAlarmDialog: showAddAlarmDialog => dispatch(loginActions.setShowAddAlarmDialog(showAddAlarmDialog))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlarms);

