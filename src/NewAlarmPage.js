import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';
import { ReactMic } from 'react-mic';
import { connect } from 'react-redux'
import './App.css';
import UserAlarms from './UserAlarms'
import Header from './Header'
import mic from './mic.svg';
import stop from './stop2.svg';
import PlayAudioButton from './PlayAudioButton'

class NewAlarmPage extends Component {

	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);

    	this.state = {
     		record: false,
     		isRecording: false
    	}
    }

    handleChange(event) {
    	console.log(event.target.value);
  	}

  	startRecording = () => {
    	this.setState({
      		record: true,
      		isRecording: true
    	});
  	}
 
 	stopRecording = () => {
    	this.setState({
      		record: false,
      		isRecording: false
    	});
  	}
 
	onStop= (blobObject) => {
    	console.log('recordedBlob is: ', blobObject.blobURL);
    	this.setState({
      blobURL : blobObject.blobURL
    });
  	}

    render() {
    	const { isRecording } = this.state;
    	var recordButton;
    	if(isRecording){
    		recordButton = <Button onClick={this.stopRecording} bsStyle="primary"><img src={stop} class="rec-icon"  alt="mymic" /></Button>
    	} else {
    		recordButton = <Button onClick={this.startRecording} bsStyle="primary"><img src={mic} class="rec-icon"  alt="mymic" /></Button>
    	}
    	return (
    		<div id="NewAlarmPage">
    			<Header />
    			<Grid>
		    		<Form horizontal>
			         	<FormGroup controlId="ormHorizontalName" bsSize="large">
		              		{' '}
		             		<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
		              			<FormControl type="text" placeholder="alarm name" onChange={this.handleChange} bsSize="large"/>
		              		</Col>
			            </FormGroup>
			            	{' '}
			            <FormGroup>
			            	<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
			            	<ReactMic
            					className="oscilloscope"
            					record={this.state.record}
            					backgroundColor="#FFFFFF"
            					visualSetting="frequencyBars"
            					audioBitsPerSecond= {128000}
            					onStop={this.onStop}
            					onStart={this.onStart}
            					strokeColor="#000000" />
            				</Col>
			            </FormGroup>
        				<FormGroup>
        					<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
            					<PlayAudioButton blob={this.state.blobURL}/>
            				</Col>
            			</FormGroup>
            			<FormGroup>
            				<Col xs={10} xsOffset={1} sm={6} smOffset={3} md={6} mdOffset={3}>
            				{recordButton}
            				</Col>
            			</FormGroup>
		          	</Form>
	          	</Grid>
    		</div>
    	);
    }
//

}

export default NewAlarmPage;

//<audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
//<PlayAudioButton blob={this.state.blobURL} />