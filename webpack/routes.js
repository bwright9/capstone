import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Move from './components/Move';
import Visit from './components/Visit';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import Login from './components/auth/Login';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';
import Signup from './components/auth/Signup'; 


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => handleLogout(browserHistory),
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute  />
    	<Route path="move" component={Move}></Route>
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    	<Route path="visit" component={Visit}></Route>
    	<Route path="discover" component={Discover}></Route>
    	<Route path="favorites" component={Favorites}></Route>
      <Route path="profile" component={Profile}></Route>
    </Route>
    <Route path="*" status={404} />
  </Route>
)

