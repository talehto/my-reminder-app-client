import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col, Grid } from 'react-bootstrap';
import { connect } from 'react-redux'
import './App.css';
import Header from './Header'


import StepZilla from 'react-stepzilla'
import 'react-stepzilla/src/css/main.css'
import AlarmNameStep from './create-alarms-steps/AlarmNameStep'
import AlarmRecordingStep from './create-alarms-steps/AlarmRecordingStep'
import AlarmSchedulingStep from './create-alarms-steps/AlarmSchedulingStep'

class NewAlarmPage extends Component {

	constructor(props) {
    	super(props);
    }

    render() {
    	const steps =
	    [
	      {name: 'Name', component: <AlarmNameStep />},
	      {name: 'Alarm recording', component: <AlarmRecordingStep />},
	      {name: 'Alarm scheduling', component: <AlarmSchedulingStep />}
	    ]
    	return (
    		<div id="NewAlarmPage">
    			<Header />
				<div className='step-progress col-md-6 col-sm-8 col-xs-8'>
        			<StepZilla steps={steps}
        				preventEnterSubmission={true}
            			hocValidationAppliedTo={[3]}
            			extTextOnFinalActionStep="Save"
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

