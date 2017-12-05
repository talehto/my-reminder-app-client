
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import '../App.css';

class AlarmTimeListItemOfNewAlarm extends Component {
	constructor(props) {
    	super(props);
  	}

  	deleteClick = () => {
		console.log("deleteClick pressed")
		this.props.onDeleteClick(this.props.dayIndexInMap, this.props.alarmTime)
	}

  	render() {
  		return (
	      	<li className="list-group-item">
	      		<Row>
	      			<Col xs={8} sm={10} md={10}>{this.props.alarmTime}</Col>
		        	<Col xs={1} sm={2} md={1}>
		        	<Glyphicon glyph={"glyphicon glyphicon-trash"} onClick={this.deleteClick}/>
		        </Col>
		    </Row>
	      </li>
    	);
  	}
}

export default AlarmTimeListItemOfNewAlarm;

