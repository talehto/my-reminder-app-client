import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-stepzilla/src/css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import reducer from './reducers/reducer';
import registerServiceWorker from './registerServiceWorker';
import * as loginActions from './actions/loginActions';

const store = createStore(reducer)
const render = () => ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
//
render()
//store.subscribe(render)
registerServiceWorker();

