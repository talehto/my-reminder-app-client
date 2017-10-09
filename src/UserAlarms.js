
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import './App.css';
import AlarmListItem from './AlarmListItem'

class UserAlarms extends Component {
	constructor(props) {
    	super(props);
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
  		<Grid>
  			<Row>
  				<Col xs={8} xsOffset={2} sm={8} smOffset={2} mdOffset={2} md={8}>
  					<p><Button bsStyle="primary">New alarm</Button></p>
  				</Col>
  			</Row>
  			<Row>
	  			<Col xs={8} xsOffset={2} sm={8} smOffset={2} mdOffset={2} md={8}>
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
		  		<Col xs={8} xsOffset={2} sm={8} smOffset={2} mdOffset={2} md={8}>
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
export default UserAlarms;


