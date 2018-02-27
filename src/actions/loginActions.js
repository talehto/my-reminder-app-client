
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

export const setNewAlarm = (newAlarmName) => {
  // Return action
  return {
    // Unique identifier
    type: 'NEW_ALARM',
    // Payload
    newAlarm: newAlarmName
  }
};

//export const setNewUserAlarm = (newUserAlarm) => {
//  // Return action
//  return {
//    // Unique identifier
//    type: 'NEW_USER_ALARM',
//    // Payload
//    newUserAlarm: newUserAlarm
//  }
//};

