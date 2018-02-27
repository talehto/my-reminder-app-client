import React, { Component } from 'react';
import { Map, List, Set, fromJS } from 'immutable';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import './App.css';
import Header from './Header'
import * as loginActions from './actions/loginActions';

import StepZilla from 'react-stepzilla'
import 'react-stepzilla/src/css/main.css'
import AlarmNameStep from './create-alarms-steps/AlarmNameStep'
import AlarmRecordingStep from './create-alarms-steps/AlarmRecordingStep'
import AlarmSchedulingStep from './create-alarms-steps/AlarmSchedulingStep'
import AlarmSavedStep from './create-alarms-steps/AlarmSavedStep'
import uuid from 'uuid/v4'

import { Redirect } from 'react-router-dom'

//import NameStep from './create-alarms-steps/NameStep'
//import LastStep from './create-alarms-steps/LastStep'

class NewAlarmPage extends Component {

	constructor(props) {
    	super(props);

    	this.newAlarmData = {
      		alarmName: '',
      		alarmRecord: null,
     		alarmTimes: Map({ 0: Set(), 1: Set(), 2: Set(), 3: Set(), 4: Set(), 5: Set(), 6: Set() }),
     		saveNewAlarm: false
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

    	if(this.newAlarmData.saveNewAlarm === true){
    		var newObj = {
    			alarmId: uuid(),
    			alarmName: this.newAlarmData.alarmName,
      			alarmRecord: this.newAlarmData.alarmRecord,
     			alarmTimes: this.newAlarmData.alarmTimes
    		};
    		this.props.setNewAlarm(newObj)
    	}
  	}

    render() {

    	if(this.newAlarmData.saveNewAlarm === true){
    		return <Redirect to="/" push={true} />
    		//
    	}

    	//const steps =
	    //[
	    //  {name: 'Name', component: <NameStep/>},
	    //  {name: 'Last', component: <LastStep/>},
	    //]

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
            			//hocValidationAppliedTo={[0,1]}
            			nextTextOnFinalActionStep={"Save"}
            			nextButtonCls='btn btn-prev btn-primary btn-primary pull-right'
                  		backButtonCls='btn btn-next btn-primary btn-primary pull-left'
                  	/>
        		</div>
    		</div>
    	);
    }
//

}

//const mapStateToProps = (state, ownProps) => {
//  return {
//    newAlarmReduxData: state.get('newAlarmReduxData')
//  }
//};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewAlarm: newAlarmData => dispatch(loginActions.setNewAlarm(newAlarmData))
  }
};

export default NewAlarmPage;
//export default connect(null,mapDispatchToProps)(NewAlarmPage);

