
import {Map, List, fromJS} from 'immutable';

const initialState = fromJS(
	{
		userName:"",
    user: {},
    isAuthenticated: false,
		showCreateNewAlarmPage:false, 
		showAddAlarmDialog: false,
		allAlarms: List(),
    dummyFlag: false,
    state: 'INITIAL',
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
  case 'SET_DUMMY_FLAG':
    return state.set('dummyFlag', !state.get('dummyFlag'))
  case 'DELETE_ALARM_TIME':
    console.log("REDUCER DELETE_ALARM_TIME deleting alarm")
    //action.allAlarms.map( item => {
    //              item.alarmTimes.get('0').map(item2 => {
    //                console.log('alarmName: ' + item.alarmName)
    //                console.log('alarmTime: ' + item2)
    //                }
    //              )} //
    //            )
    //state.get('allAlarms').map( item4 => {
    //              item4.alarmTimes.get('0').map(item5 => {
    //                console.log(' allAlarms alarmName: ' + item4.alarmName)
    //                console.log('allAlarms alarmTime: ' + item5)
    //                }
    //              )} //
    //            )
    //return state.set('allAlarms', action.allAlarms);

    var newState = fromJS(state)
    const index = newState.get('allAlarms').findIndex(function(item){return item.alarmId === action.alarmId})
    console.log('index: ' + index)
    var alarmItem = newState.get('allAlarms').get(index);
    console.log("alarmItem.alarmTimes before: " + alarmItem.alarmTimes)
    alarmItem.alarmTimes = alarmItem.alarmTimes.update(action.dayNumber, list => list.delete(action.alarmTime))
    console.log("alarmItem.alarmTimes after: " + alarmItem.alarmTimes)
    var beforeReturn = newState.get('allAlarms').set(index,alarmItem)
    beforeReturn.forEach(item => console.log(item.alarmName ))
    beforeReturn.map( item4 => {
                  item4.alarmTimes.get('0').map(item5 => {
                    console.log(' allAlarms alarmName: ' + item4.alarmName)
                    console.log('allAlarms alarmTime: ' + item5)
                    }
                  )} //
                )
    console.log('userName: ' + newState.get('userName'))
    console.log('showCreateNewAlarmPage: ' + newState.get('showCreateNewAlarmPage'))
    console.log('showAddAlarmDialog: ' + newState.get('showAddAlarmDialog'))
    return newState.set('allAlarms',beforeReturn);
    //const index = state.get('allAlarms').findIndex(function(item){return item.alarmId === action.alarmId})
    //return state.set('allAlarms',
    //                  state.get('allAlarms').set(index,
    //                    state.get('allAlarms').get(index).alarmTimes.set(
    //                      state.get('allAlarms').get(index).alarmTimes.update(action.dayNumber, list => list.delete(action.alarmTime)) )));
  default:
    return state;
  }
}
