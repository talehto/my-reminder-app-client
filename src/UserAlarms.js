
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Redirect } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Container } from 'react-bootstrap';
import './App.css';
import AlarmListItem from './AlarmListItem'
import { connect } from 'react-redux'
import * as loginActions from './actions/loginActions';
import {List} from 'immutable';

import AlarmTimeListItemOfNewAlarm from './create-alarms-steps/AlarmTimeListItemOfNewAlarm'

class UserAlarms extends Component {
	constructor(props) {
    	super(props);
    	this.handleOpenCreateAlarmPage = this.handleOpenCreateAlarmPage.bind(this);
    	this.getAlarmsOfOneDay = this.getAlarmsOfOneDay.bind(this);
  	}

  	handleOpenCreateAlarmPage(){
  		console.log("handleOpenCreateAlarmPage called")
  		this.props.setShowCreateNewAlarmPage(true)
  	}

 	handlePlayClick(alarmId){
		console.log("Play pressed")
	}

	handleDeleteClick(alarmId, alarmTime, dayNumber){
		console.log("Delete note pressed")
		
		this.props.deleteAlarmTime(alarmId, alarmTime, dayNumber);
		this.props.setDummyFlag(true);
	}

	render() {
		if (this.props.showCreateNewAlarmPage) {
			console.log('UserAlarms.render showCreateNewAlarmPage is TRUE')
	  		return <Redirect to="/newalarm" push={true} />
	  		//
	    }

		var mondayAlarms = this.getAlarmsOfOneDay('0','Monday');
		var tuesdayAlarms = this.getAlarmsOfOneDay('1','Tuesday');
		var wednesdayAlarms = this.getAlarmsOfOneDay('2','Wednesday');
		var thursdayAlarms = this.getAlarmsOfOneDay('3','Thursday');
		var fridayAlarms = this.getAlarmsOfOneDay('4','Friday');
		var saturdayAlarms = this.getAlarmsOfOneDay('5','Saturday');
		var sundayAlarms = this.getAlarmsOfOneDay('6','Sunday');

	    return (
		  	<div>
		  		<Container>
		  			<Row>
		  				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
		  					<p><Button id="addAlarmButton" variant="primary" onClick={this.handleOpenCreateAlarmPage} >New alarm</Button></p>
		  				</Col>
		  			</Row>
					{mondayAlarms}
					{tuesdayAlarms}
					{wednesdayAlarms}
					{thursdayAlarms}
					{fridayAlarms}
					{saturdayAlarms}
					{sundayAlarms}
		  		</Container>
		  	</div> 
		);
	}
	//

	getAlarmsOfOneDay(dayAsNum, dayAsStr){
		console.log('UserAlarms.getAlarmsOfOneDay dayAsNum: ' + dayAsNum)
		this.props.allAlarms.forEach(item => console.log('allAlarms: ' + item.alarmName))
		var alarmsOfOneDay = this.props.allAlarms.filter( alarmItem => alarmItem.alarmTimes.get(dayAsNum).count() != 0 )
		if(alarmsOfOneDay.count() === 0){
			console.log('UserAlarms.getAlarmsOfOneDay alarmsOfOneDay is null')
			return '';
		}else{
			return (
				<Row>
			  		<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
				  		<Card variant="primary" header={dayAsStr}>
						    <ListGroup fill>
						    {alarmsOfOneDay.map( item => {
						    	return item.alarmTimes.get(dayAsNum).map(item2 => {
						    	return (
						    		<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
					    	  		alarmTime={item2} alarmTitle={item.alarmName} alarmId={item.alarmId} dayNumber={dayAsNum}/> 
					    	  		//
						      	)}
		    					)} //
		    				)}
						    </ListGroup>
						</Card>
					</Col>
				</Row>
			)
		}
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    showCreateNewAlarmPage: state.get('showCreateNewAlarmPage'),
    allAlarms: state.get('allAlarms'),
    dummyFlag: state.get('dummyFlag'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCreateNewAlarmPage: showCreateNewAlarmPage => dispatch(loginActions.setShowCreateNewAlarmPage(showCreateNewAlarmPage)),
    deleteAlarmTime: (alarmId, alarmTime, dayNumber) => dispatch(loginActions.deleteAlarmTime(alarmId, alarmTime, dayNumber)),
    setDummyFlag: flag => dispatch(loginActions.setDummyFlag(flag)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlarms);

