
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
    	this.handleOpenCreateAlarmPage = this.handleOpenCreateAlarmPage.bind(this);
    	//this.getAlarmsOfOneDay = this.getAlarmsOfOneDay.bind(this);
    	//this.getTopOfAlarmTable = this.getTopOfAlarmTable.bind(this);
    	//this.getBottomOfAlarmTable = this.getBottomOfAlarmTable.bind(this);
    	//this.getTimesOfOneAlarmPerDay = this.getTimesOfOneAlarmPerDay.bind(this);
  	}

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
			console.log('UserAlarms.render showCreateNewAlarmPage is TRUE')
	  		return <Redirect to="/newalarm" push={true} />
	  		//
	    }else{

		var mondayAlarms = this.getAlarmsOfOneDay('0','Monday');
		//var tuesdayAlarms = this.getAlarmsOfOneDay('1','Tuesday');

	    return (
		  	<div>
		  		<Grid>
		  			<Row>
		  				<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
		  					<p><Button id="addAlarmButton" bsStyle="primary" onClick={this.handleOpenCreateAlarmPage} >New alarm</Button></p>
		  				</Col>
		  			</Row>
					{mondayAlarms}					
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

		//getBottomOfAlarmTable = () => {
	//getBottomOfAlarmTable() {
	//	return (</ListGroup>
	//			</Panel>
	//		</Col>
	//	</Row>
	//	)
	//}

	//getAlarmsOfOneDay(dayAsNum, dayAsStr){
	getAlarmsOfOneDay = (dayAsNum, dayAsStr) => {
		var alarmsOfOneDay = this.props.allAlarms.filter( alarmItem => alarmItem.alarmTimes.get(dayAsNum).count() != 0 )
		if(alarmsOfOneDay === null){
			console.log('UserAlarms.getAlarmsOfOneDay alarmsOfOneDay is null')
			return '';
		}else{
			this.props.allAlarms.forEach( item => console.log(item.alarmName))
			return (
				<Row>
			  		<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
				  		<Panel bsStyle="primary" header={dayAsStr}>
						    <ListGroup fill>
						    {alarmsOfOneDay.forEach( item => {
						    	item.alarmTimes.get(dayAsNum).map(item2 =>
	    	  					<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
	    	  		alarmTime={item2} alarmTitle={item.alarmName}/> 
		    		)}  )}
						    </ListGroup>
						</Panel>
					</Col>
				</Row>
			)
		}
		//var allDataPerDay = this.getTopOfAlarmTable(dayAsStr)
		//alarmsOfOneDay.forEach( item => {allDataPerDay = allDataPerDay + this.getTimesOfOneAlarmPerDay(dayAsNum, dayAsStr, item)} )
		//allDataPerDay = allDataPerDay + this.getBottomOfAlarmTable()

		//return allDataPerDay;
	}

	//getTopOfAlarmTable(dayAsStr) {
	//getTopOfAlarmTable = (dayAsStr) => {
	//	return (
	//		<Row>
	//	  		<Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2}>
	//		  		<Panel bsStyle="primary" header={dayAsStr}>
	//				    <ListGroup fill>
	//	)
	//}

	//getTimesOfOneAlarmPerDay(dayAsNum, dayAsStr, alarmItem) {
	//getTimesOfOneAlarmPerDay = (dayAsNum, dayAsStr, alarmItem) => {
	//	return (
	//		{alarmItem.alarmTimes.get(dayAsNum).map(item =>
	//    	  	<AlarmListItem onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
	//    	  		alarmTime={item} alarmTitle={alarmItem.alarmName}/> //
	//	    )}
    //	)
	//}
}
//

const mapStateToProps = (state, ownProps) => {
  return {
    showCreateNewAlarmPage: state.get('showCreateNewAlarmPage'),
    allAlarms: state.get('allAlarms')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowCreateNewAlarmPage: showCreateNewAlarmPage => dispatch(loginActions.setShowCreateNewAlarmPage(showCreateNewAlarmPage))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAlarms);

