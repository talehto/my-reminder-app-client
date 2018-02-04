import React, { Component } from 'react';
import { Map, List, Set, fromJS } from 'immutable';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import './App.css';
import Header from './Header'

import StepZilla from 'react-stepzilla'
import 'react-stepzilla/src/css/main.css'
import AlarmNameStep from './create-alarms-steps/AlarmNameStep'
import AlarmRecordingStep from './create-alarms-steps/AlarmRecordingStep'
import AlarmSchedulingStep from './create-alarms-steps/AlarmSchedulingStep'
import AlarmSavedStep from './create-alarms-steps/AlarmSavedStep'

class NewAlarmPage extends Component {

	constructor(props) {
    	super(props);

    	this.newAlarmData = {
      		alarmName: '',
      		alarmRecord: null,
      		//selectedTime: "08:00",
     		alarmTimes: Map({ 0: Set(), 1: Set(), 2: Set(), 3: Set(), 4: Set(), 5: Set(), 6: Set() })
    	};
    }

    getStore() {
    	return this.newAlarmData;
  	}

  	updateStore(update) {
    	this.newAlarmData = {
      		...this.newAlarmData,
      		...update,
    	}
    	console.log('NewAlarmPage.newAlarmData.alarmName: ' + this.newAlarmData.alarmName)
    	console.log('NewAlarmPage.newAlarmData.alarmRecord: ' + this.newAlarmData.alarmRecord)
    	console.log('NewAlarmPage.newAlarmData.alarmTimes: ' + this.newAlarmData.alarmTimes)
  	}

    render() {
    	const steps =
	    [
	      {name: 'Name', component: <AlarmNameStep getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
	      {name: 'Alarm recording', component: <AlarmRecordingStep getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
	      {name: 'Alarm scheduling', component: <AlarmSchedulingStep getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
	      {name: 'Alarm saved', component: <AlarmSavedStep getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
	    ]
    	return (
    		<div id="NewAlarmPage">
    			<Header />
				<div className='step-progress col-md-6 col-sm-8 col-xs-8'>
        			<StepZilla steps={steps}
        				preventEnterSubmission={true}
            			hocValidationAppliedTo={[0,1]}
            			nextTextOnFinalActionStep={"Save"}
            			//dontValidate={false}
            			//prevBtnOnLastStep={true}
            			//nextTextOnFinalActionStep="Save"
            			nextButtonCls='btn btn-prev btn-primary btn-primary pull-right'
                  		backButtonCls='btn btn-next btn-primary btn-primary pull-left'
                  	/>
        		</div>
    		</div>
    	);
    }
//

}

export default NewAlarmPage;

