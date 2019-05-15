import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-stepzilla/src/css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import registerServiceWorker from './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App />
 </Provider>, 
  document.getElementById('root')
);

//const render = () => ReactDOM.render(
//	<Provider store={store}>
//		<App />
//	</Provider>, 
//	document.getElementById('root')
//);
////
//render()

//store.subscribe(render)
//registerServiceWorker();

