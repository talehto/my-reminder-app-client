
import {Map, List, fromJS} from 'immutable';

const initialState = fromJS(
	{
		userName:"", 
		showCreateNewAlarmPage:false, 
		showAddAlarmDialog: false,
		allAlarms: []
	});

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
  case 'SET_USER_NAME':
    console.log("REDUCER Setting name:")
    return state.set('userName', action.userName);
  case 'SHOW_CREATE_NEW_ALARM_PAGE':
  	console.log("REDUCER Setting showCreateNewAlarmPage:")
  	return state.set('showCreateNewAlarmPage',action.showCreateNewAlarmPage);
  case 'SHOW_ADD_ALARM_DIALOG':
  	console.log("REDUCER Setting showAddAlarmDialog:")
  	return state.set('showAddAlarmDialog',action.showAddAlarmDialog);
  case 'NEW_ALARM':
  	return state.update('allAlarms', alarms => alarms.push(action.newAlarm));
  case 'NEW_USER_ALARM':
  	return state.set('newUserAlarm', action.newUserAlarm);
  default:
    return state;
  }
}
