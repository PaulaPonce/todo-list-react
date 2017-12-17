import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers'; // <------
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// creates a store using Redux createStore function
const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
