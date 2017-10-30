
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom'
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import './App.css';
import AlarmListItem from './AlarmListItem'
import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions';

class UserAlarms extends Component {
	constructor(props) {
    	super(props);
    	//this.handleCreateNewAlarmDialog = this.handleCreateNewAlarmDialog.bind(this);
    	this.handleOpenCreateAlarmPage = this.handleOpenCreateAlarmPage.bind(this);
  	}

  	//handleCreateNewAlarmDialog(){
  	//	console.log("handleCreateNewAlarmDialog called")
  	//	this.props.setShowCreateNewAlarmDialog(true)
  	//}

  	handleOpenCreateAlarmPage(){
  		console.log("handleOpenCreateAlarmPage called")
  		this.props.setShowCreateNewAlarmPage(true)

  	}

 	handlePlayClick(){
		console.log("Play pressed")
	}

	handleDeleteClick(){
		console.log("Delete note pressed")
	}

  render() {
  	if (this.props.showCreateNewAlarmPage) {
  		return <Redirect to="/newalarm" push={true} />
    } else {	
	  return (
	  	<div>
	  		<Grid>
	  			<Row>
	  				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
	  					<p><Button id="addAlarmButton" bsStyle="primary" onClick={this.handleOpenCreateAlarmPage} >New alarm</Button></p>
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
}
//

const mapStateToProps = (state, ownProps) => {
  return {
    showCreateNewAlarmPage: state.get('showCreateNewAlarmPage')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCreateNewAlarmPage: showCreateNewAlarmPage => dispatch(loginActions.setShowCreateNewAlarmPage(showCreateNewAlarmPage))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlarms);

