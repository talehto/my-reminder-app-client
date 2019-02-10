
import { Map, List, Set, fromJS } from 'immutable';
import React, { Component } from 'react';
import { Button, Form, Row, Col, Container, DropdownButton, Dropdown, ButtonGroup, Card, ListGroup } from 'react-bootstrap';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import moment from 'moment';
import AlarmTimeListItemOfNewAlarm from './AlarmTimeListItemOfNewAlarm'

class AlarmSchedulingStep extends Component {

	constructor(props) {
    	super(props);

    	this.getAlarmTimesUiTable = this.getAlarmTimesUiTable.bind(this);

    	this.focousOut = this.focousOut.bind(this);
    	this.weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    	this.state = {
     		selectedDay: "Day",
     		selectedDayInNum: 0,
     		selectedTime: "08:00",
     		alarmTimes: Map({ 0: Set(), 1: Set(), 2: Set(), 3: Set(), 4: Set(), 5: Set(), 6: Set() })
    	}

    	this.isValidated = this.isValidated.bind(this);
    	this.getValidatorData = this.getValidatorData.bind(this);
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

  	isValidated() {
  		console.log('AlarmSchedulingStep.isValidated() called')
  		console.log('this.state.alarmTimes: ' + this.state.alarmTimes)
	    let isDataValid = false;

	    let count = 0;
	    count += this.getAlarmCountPerDay('0');
	    count += this.getAlarmCountPerDay('1');
	    count += this.getAlarmCountPerDay('2');
	    count += this.getAlarmCountPerDay('3');
	    count += this.getAlarmCountPerDay('4');
	    count += this.getAlarmCountPerDay('5');
	    count += this.getAlarmCountPerDay('6');
	    //count += this.state.alarmTimes.get(6).count();

	    if(count === 0){
	    	return false;
	    }

	    if (this.props.getStore().alarmTimes != this.state.alarmTimes) { // only update store of something changed
	      this.props.updateStore({
	        ...this.getValidatorData()
	      });
		}  

	    return true;
  }

  getAlarmCountPerDay = (dayAsNum) => {
    	return this.state.alarmTimes.get(dayAsNum).count();
    }

    getValidatorData() {
	    return {
	      alarmTimes: this.state.alarmTimes,
	      saveNewAlarm: true
	    }
  };

    render() {
    	var mondayAlarms = this.getAlarmTimesUiTable('0','Monday');
    	var tuesdayAlarms = this.getAlarmTimesUiTable('1','Tuesday');
    	var wednesdayAlarms = this.getAlarmTimesUiTable('2','Wednesday');
    	var thursdayAlarms = this.getAlarmTimesUiTable('3','Thursday');
    	var fridayAlarms = this.getAlarmTimesUiTable('4','Friday');
    	var saturdayAlarms = this.getAlarmTimesUiTable('5','Saturday');
    	var sundayAlarms = this.getAlarmTimesUiTable('6','Sunday');

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
		            				<DropdownButton variant="primary" title={this.state.selectedDay} onSelect={this.daySelected}>
      									<Dropdown.Item eventKey="0">Monday</Dropdown.Item>
									    <Dropdown.Item eventKey="1">Tuesday</Dropdown.Item>
									    <Dropdown.Item eventKey="2">Wednesday</Dropdown.Item>
									    <Dropdown.Item eventKey="3">Thursday</Dropdown.Item>
									    <Dropdown.Item eventKey="4">Friday</Dropdown.Item>
									    <Dropdown.Item eventKey="5">Saturday</Dropdown.Item>
									    <Dropdown.Item eventKey="6">Sunday</Dropdown.Item>
									</DropdownButton>
		          				</div>
		          				<div className="col-md-3 col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-2" id="add-time-button-col">
	          						<Button id="addTimeButton" variant="primary" block onClick={this.handleAddTimeClick}>Add time</Button>
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

    getAlarmTimesUiTable(dayAsNum, dayAsStr) {
		if(this.state.alarmTimes.get(dayAsNum).count() != 0){
    		return (
    			<div className="row">
					<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
			        	<Card variant="primary" header={dayAsStr}>
						    <ListGroup fill>
						    	{this.state.alarmTimes.get(dayAsNum).map(item =>   
						    	  	<AlarmTimeListItemOfNewAlarm onDeleteClick={this.handleDeleteClick} 
						    	  		alarmTime={item} dayIndexInMap={dayAsNum}/>
						    	)}
					    	</ListGroup>
			  			</Card>
			  		</Col>
		      	</div>
		     ) //
    	} else {
    		return '';
    	}
	}
    
}
//

export default AlarmSchedulingStep;
//export default validation(strategy)(AlarmSchedulingStep);

