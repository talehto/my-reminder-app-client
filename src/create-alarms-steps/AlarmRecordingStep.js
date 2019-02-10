
import React, { Component } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { ReactMic } from 'react-mic';
import './../App.css';
import mic from './../mic.svg';
import stop from './../stop2.svg';
import PlayAudioButton from '../PlayAudioButton'
import validation from 'react-validation-mixin';
import strategy from 'joi-validation-strategy';
import Joi from 'joi';

class AlarmRecordingStep extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
     		isRecording: false,
     		alarmRecord : '',
    	}

    	this.validatorTypes = {
      		alarmRecord: Joi.string().uri().trim().required()
    	};

    	this.isValidated = this.isValidated.bind(this);
    	this.getValidatorData = this.getValidatorData.bind(this);
    }

    startRecording = () => {
    	this.setState({
      		isRecording: true
    	});
  	}

  	stopRecording = () => {
    	this.setState({
      		isRecording: false
    	});
  	}

  	onStop = (blobObject) => {
    	console.log('recordedBlob is: ', blobObject.blob);
    	this.setState({
      		alarmRecord : blobObject.blobURL
    	});
  	}

  	getValidatorData() {
  		console.log('AlarmRecordingStep.getValidatorData()');
  		console.log(this.state.alarmRecord);
		return {
      		alarmRecord: this.state.alarmRecord,
    	}
  	};

  	isValidated() {
  		console.log("AlarmRecordingStep.isValidated called");
  		return new Promise((resolve, reject) => {
      		this.props.validate((error) => {
	        	if (error) {
	        		console.log("validate returned error");
	          		reject('Error'); // form contains errors
	        	}

	        	if (this.props.getStore().alarmRecord != this.getValidatorData().alarmRecord) { // only update store of something changed
		          this.props.updateStore({
		            ...this.getValidatorData()
		            //savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
		          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
		        }

	        	resolve();
        	});
    	});
  	}

    render() {
    	const { isRecording } = this.state;
    	var recordButton;
    	if(isRecording){
    		recordButton = <Button onClick={this.stopRecording} bsSize="small" variant="primary"><img src={stop} class="rec-icon"  alt="mymic" /></Button>
    	} else {
    		recordButton = <Button onClick={this.startRecording} bsSize="small" variant="primary"><img src={mic} class="rec-icon"  alt="mymic" /></Button>
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
				    				<PlayAudioButton blob={this.state.alarmRecord}/>
				    			</div>
			    			</div>
							<div className="row">
								<div className="col-md-2 col-sm-6 col-xs-6">
		            				<ReactMic
				    					className="oscilloscope"
				    					record={isRecording}
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
//export default AlarmRecordingStep;
export default validation(strategy)(AlarmRecordingStep);

