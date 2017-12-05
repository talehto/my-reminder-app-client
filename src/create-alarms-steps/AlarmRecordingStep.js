
import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';
import { ReactMic } from 'react-mic';
import './../App.css';
import mic from './../mic.svg';
import stop from './../stop2.svg';
import PlayAudioButton from '../PlayAudioButton'


class AlarmRecordingStep extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
     		record: false,
     		isRecording: false
    	}
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

  	onStop = (blobObject) => {
    	console.log('recordedBlob is: ', blobObject.blobURL);
    	this.setState({
      		blobURL : blobObject.blobURL
    	});
  	}

    render() {
    	const { isRecording } = this.state;
    	var recordButton;
    	if(isRecording){
    		recordButton = <Button onClick={this.stopRecording} bsSize="small" bsStyle="primary"><img src={stop} class="rec-icon"  alt="mymic" /></Button>
    	} else {
    		recordButton = <Button onClick={this.startRecording} bsSize="small" bsStyle="primary"><img src={mic} class="rec-icon"  alt="mymic" /></Button>
    	}
    	return (
    		<div className="step step2">
		      	<div className="row">
		        	<form id="Form" className="form-horizontal">
		          		<div className="form-group">
	            			<div className="row" id="record-button-row">
		            			<div className="col-md-offset-3 col-md-1 col-sm-offset-3 col-sm-1 col-xs-offset-3 col-xs-1">
		            				{recordButton}
		            			</div>
		            			<div className="col-md-offset-1 col-md-1 col-sm-offset-1 col-sm-2 col-xs-offset-2 col-xs-1">
				    				<PlayAudioButton blob={this.state.blobURL}/>
				    			</div>
			    			</div>
							<div className="row">
								<div className="col-md-2 col-sm-6 col-xs-6">
		            				<ReactMic
				    					className="oscilloscope"
				    					record={this.state.record}
				    					backgroundColor="#e6e6ff"
				    					visualSetting="frequencyBars"
				    					audioBitsPerSecond= {128000}
				    					onStop={this.onStop}
				    					onStart={this.onStart}
				    					strokeColor="#000000" />
				    			</div>
				    		</div>
		         		</div>
		        	</form>
		      	</div>
    		</div>
    	)
    }

}
//
export default AlarmRecordingStep;

