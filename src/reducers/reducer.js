//import {List, Map} from 'immutable';
import {Map} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_USER_NAME':
    console.log("REDUCER Setting name:")
    console.log(action)
    return state.set('userName', action.userName);
  default:
    return state;
  }
}
