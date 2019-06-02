import axios from 'axios';
//import setAuthToken from '../setAuthToken';
//import jwt_decode from 'jwt-decode';

const apiUrl = 'http://localhost:5000';

export const setProgramState = (state) => {
  console.log("setProgramState called. State: " + state)
  return {
    type: 'UPDATE_PROGRAM_STATE',
    state: state
  }
};

export const registerUser = (user,history) => dispatch => {  
  axios.post(`${apiUrl}/api/user/register`, user)
    .then(response => {
      console.log("SUCCESS!!!!!")
      console.log(response.data.email)
      dispatch(createSuccessRegisterPost(response.data))
      history.push('/')
    })
    .catch(error => {
      console.log("ERROR!!!!!!!!!!!!")
      dispatch(createFailedRegisterPost(error.response.data))
    });
};

export const createSuccessRegisterPost =  (data) => {
  console.log("createSuccessRegisterPost called. Data: " + data.email)
  return {
    type: 'REGISTRATION_SUCCEED',
    user: data
  }
};

export const createFailedRegisterPost =  (error) => {
  console.log("createFailedRegisterPost called: " + error)
  //console.log(error.response.data);
  //console.log(error.response.status);
  //console.log(error.response.headers);
  return {
    type: 'REGISTRATION_FAILED',
    payload: error
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

