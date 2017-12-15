import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// creates a store using Redux createStore function
let store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
