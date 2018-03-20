
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import './App.css';

class AlarmListItem extends Component {
	constructor(props) {
    	super(props);
  	}

  	deleteClick = () => {
		console.log("deleteClick pressed")
		this.props.onDeleteClick(this.props.alarmId, this.props.alarmTime, this.props.dayNumber)
	}

	playClick = () => {
		console.log("playClick pressed")
		this.props.onPlayClick(this.props.alarmId)
	}

  	render() {
  		return (
	      	<li className="list-group-item">
	      		<Row>
	      			<Col xs={3} sm={3} md={2}>{this.props.alarmTime}</Col>
	      			<Col xs={4} sm={4} md={7}>{this.props.alarmTitle}</Col>
	      			<Col xs={2} sm={2} md={1}>
		        		<Glyphicon glyph={"glyphicon glyphicon-play-circle"} onClick={this.playClick}/>
					</Col>
		        	<Col xs={2} sm={2} md={1}>
		        	<Glyphicon glyph={"glyphicon glyphicon-trash"} onClick={this.deleteClick}/>
		        </Col>
		    </Row>
	      </li>
    	);
  	}
}

export default AlarmListItem;

