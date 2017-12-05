
import { Map, List, Set, fromJS } from 'immutable';
import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid, DropdownButton, MenuItem, ButtonGroup, Panel, ListGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import moment from 'moment';
import AlarmTimeListItemOfNewAlarm from './AlarmTimeListItemOfNewAlarm'

class AlarmSchedulingStep extends Component {

	constructor(props) {
    	super(props);

    	this.getMondayAlarmTimes = this.getMondayAlarmTimes.bind(this);

    	this.focousOut = this.focousOut.bind(this);
    	this.weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    	this.state = {
     		selectedDay: "Day",
     		selectedDayInNum: 0,
     		selectedTime: "08:00",
     		alarmTimes: Map({ 0: Set(), 1: Set(), 2: Set(), 3: Set(), 4: Set(), 5: Set(), 6: Set() })
    	}
    }

    daySelected = (key) => {
    	console.log("day selected: " + key);
    	this.setState({
      		selectedDay : this.weekdays[key]
    	});
    	this.setState({
      		selectedDayInNum : key
    	});
  	}

  	timeChanged = (date) => {
    	console.log("time selected: " + date.format('HH:mm'));
    	this.setState({ selectedTime: date.format('HH:mm') });
  	}

  	focousOut = (value) => {
    	if(!moment(value).isValid()) {
     		this.setState({selectedTime: ''}); 
    	}
  }

  handleAddTimeClick = () => {
  	console.log("time will be added");
  	//console.log(this.state.selectedTime);
  	this.setState(({alarmTimes}) => ({
      alarmTimes: alarmTimes.update(this.state.selectedDayInNum, list => list.add(this.state.selectedTime))
    }));
  }

  handleDeleteClick = (dayIndexInMap, deletedTime) => {
		console.log("Delete alarm time pressed")
		console.log(deletedTime);
		console.log(dayIndexInMap);
		this.setState(({alarmTimes}) => ({
      		alarmTimes: alarmTimes.update(dayIndexInMap, list => list.delete(deletedTime))
    }));	
	}

    render() {
    	var mondayAlarms = this.getMondayAlarmTimes('0','Monday');
    	var tuesdayAlarms = this.getMondayAlarmTimes('1','Tuesday');
    	var wednesdayAlarms = this.getMondayAlarmTimes('2','Wednesday');
    	var thursdayAlarms = this.getMondayAlarmTimes('3','Thursday');
    	var fridayAlarms = this.getMondayAlarmTimes('4','Friday');
    	var saturdayAlarms = this.getMondayAlarmTimes('5','Saturday');
    	var sundayAlarms = this.getMondayAlarmTimes('6','Sunday');

    	return (
    		<div className="step step2">
		      	<div className="row">
		        	<form id="Form" className="form-horizontal">
		          		<div className="form-group">
		          			<div className="row" id="alarm-scheduling-button-row">
		            			<div className="col-md-3 col-md-offset-1 col-sm-3 col-xs-6 col-xs-offset-2" id="setting-alarm-time-field">
		            				<Datetime value={this.state.selectedTime} dateFormat={false} onChange={this.timeChanged} timeFormat="HH:mm" onBlur={this.focousOut} />
		          				</div>
		          				<div className="col-md-2 col-sm-3 col-xs-3">
		            				<DropdownButton bsStyle="primary" title={this.state.selectedDay} onSelect={this.daySelected}>
      									<MenuItem eventKey="0">Monday</MenuItem>
									    <MenuItem eventKey="1">Tuesday</MenuItem>
									    <MenuItem eventKey="2">Wednesday</MenuItem>
									    <MenuItem eventKey="3">Thursday</MenuItem>
									    <MenuItem eventKey="4">Friday</MenuItem>
									    <MenuItem eventKey="5">Saturday</MenuItem>
									    <MenuItem eventKey="6">Sunday</MenuItem>
									</DropdownButton>
		          				</div>
		          				<div className="col-md-3 col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-2" id="add-time-button-col">
	          						<Button id="addTimeButton" bsStyle="primary" block onClick={this.handleAddTimeClick}>Add time</Button>
	          					</div>
	          				</div>
		         		</div>
		        	</form>
		      	</div>
		      	{mondayAlarms}
		      	{tuesdayAlarms}
		      	{wednesdayAlarms}
		      	{thursdayAlarms}
		      	{fridayAlarms}
		      	{saturdayAlarms}
		      	{sundayAlarms}
    		</div>
    	)
    }

    getMondayAlarmTimes(dayAsNum, dayAsStr) {
		if(this.state.alarmTimes.get(dayAsNum).count() != 0){
    		return (
    			<div className="row">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
			        	<Panel bsStyle="primary" header={dayAsStr}>
						    <ListGroup fill>
						    	{this.state.alarmTimes.get(dayAsNum).map(item =>   
						    	  	<AlarmTimeListItemOfNewAlarm onDeleteClick={this.handleDeleteClick} 
						    	  		alarmTime={item} dayIndexInMap={dayAsNum}/>
						    	)}
					    	</ListGroup>
			  			</Panel>
			  		</Col>
		      	</div>
		     )
    	} else {
    		return '';
    	}
	}

}
//

export default AlarmSchedulingStep;

