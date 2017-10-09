
import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import { Panel, ListGroup, ListGroupItem, Glyphicon, Button, Row, Col, Grid } from 'react-bootstrap';
import './App.css';

const CustomComponent = props => {
    return (
      		<li className="list-group-item">
      	<Row>
      		<Col xs={3} sm={3} md={2}>{props.alarmTime}</Col>
      		<Col xs={4} sm={4} md={7}>{props.alarmTitle}</Col>
      		<Col xs={2} sm={2} md={1}>
	        	<Glyphicon glyph={"glyphicon glyphicon-play-circle"} onClick={props.onPlayClick}/>
			</Col>
	        <Col xs={2} sm={2} md={1}>
	        	<Glyphicon glyph={"glyphicon glyphicon-trash"} onClick={props.onDeleteClick}/>
	        </Col>
	    </Row>
      </li>
    );
};
//

class UserNotes extends Component {
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
  				<Col xs={8} xsOffset={2} sm={4} smOffset={4} mdOffset={4} md={4}>
  					<p><Button bsStyle="primary">New alarm</Button></p>
  				</Col>
  			</Row>
  			<Row>
	  			<Col xs={8} xsOffset={2} sm={4} smOffset={4} mdOffset={4} md={4}>
		        <Panel bsStyle="primary" header="Monday">
				    <ListGroup fill>
			    	  	<CustomComponent onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
			    	  		alarmTime={"9:30"} alarmTitle={"herätys"}/>
			        	<CustomComponent onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)}
			        	alarmTime={"10:30"} alarmTitle={"kouluun"} />
			    	</ListGroup>
		  		</Panel>
		  		</Col>
	  		</Row>
	  		<Row>
		  		<Col xs={8} xsOffset={2} sm={4} smOffset={4} mdOffset={4} md={4}>
		  		<Panel bsStyle="primary" header="Tuesday">
				    <ListGroup fill>
			    	  	<CustomComponent onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)} 
			    	  		alarmTime={"9:30"} alarmTitle={"herätys aikaisin aamulla"}/>
			        	<CustomComponent onPlayClick={this.handlePlayClick.bind(this)} onDeleteClick={this.handleDeleteClick.bind(this)}
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
export default UserNotes;
