import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import store, { history } from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

if($('#app').length) {
	ReactDOM.render(
	  <Provider store={store}>
	    <Router history={history} routes={routes} />
	  </Provider>,
	  document.getElementById('app')
	);
}

