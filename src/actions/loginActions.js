
import axios from 'axios';
//import setAuthToken from '../setAuthToken';
//import jwt_decode from 'jwt-decode';

//export const registerUser2 = (user) => dispatch => {
export const registerUser = (user) => {
  return function (dispatch) {
    console.log("loginActions.registerUser called");
    axios.post('/api/user/register', user)
      .then(res => createSuccessRegisterPost(res.data) )
      .catch(err => createFailedRegisterPost(err));
    }
}

export const createSuccessRegisterPost =  (data) => {
  console.log("createSuccessRegisterPost called. Data: " + data.email)
  return {
    type: 'REGISTRATION_SUCCEED',
    user: data
  }
};

export const createFailedRegisterPost =  (data) => {
  console.log("createFailedRegisterPost called" + data)
  return {
    type: 'REGISTRATION_FAILED',
    payload: data
  }
};

export const setUserName = (userName) => {
  // Return action
  return {
    // Unique identifier
    type: 'SET_USER_NAME',
    // Payload
    userName: userName
  }
};

export const setShowCreateNewAlarmPage = (showCreateNewAlarmPage) => {
  // Return action
  return {
    // Unique identifier
    type: 'SHOW_CREATE_NEW_ALARM_PAGE',
    // Payload
    showCreateNewAlarmPage: showCreateNewAlarmPage
  }
};

export const setDummyFlag = (dummyFlag) => {
  // Return action
  return {
    // Unique identifier
    type: 'SET_DUMMY_FLAG',
    // Payload
    dummyFlag: dummyFlag
  }
};

export const setNewAlarm = (newAlarmName) => {
  // Return action
  return {
    // Unique identifier
    type: 'NEW_ALARM',
    // Payload
    newAlarm: newAlarmName
  }
};

export const deleteAlarmTime = (alarmId, alarmTime, dayNumber) => {
  // Return action
  console.log('loginActions.setAllAlarms called')
  return {
    // Unique identifier
    type: 'DELETE_ALARM_TIME',
    // Payload
    alarmId: alarmId,
    alarmTime: alarmTime,
    dayNumber: dayNumber
  }
};

