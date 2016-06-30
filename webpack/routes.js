import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Move from './components/Move';


export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute  />
    	<Route path="move" component={Move}></Route>
    </Route>


    <Route path="*" status={404} />
  </Route>
)

