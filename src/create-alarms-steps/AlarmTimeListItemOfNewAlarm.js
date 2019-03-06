
import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css';

class AlarmTimeListItemOfNewAlarm extends Component {
	//constructor(props) {
    //	super(props);
  	//}

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
		        	<FontAwesomeIcon  icon="trash-alt" onClick={this.deleteClick}/>
		        </Col>
		    </Row>
	      </li>
    	);
  	}
}

export default AlarmTimeListItemOfNewAlarm;

