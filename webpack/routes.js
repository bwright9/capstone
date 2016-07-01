import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Move from './components/Move';
import Visit from './components/Visit';
import Discover from './components/Discover';
import Favorites from './components/Favorites';





export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute  />
    	<Route path="move" component={Move}></Route>
    	<Route path="visit" component={Visit}></Route>
    	<Route path="discover" component={Discover}></Route>
    	<Route path="favorites" component={Favorites}></Route>
    </Route>
    <Route path="*" status={404} />
  </Route>
)

