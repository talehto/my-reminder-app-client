
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

