import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import Move from './components/Move';
import Visit from './components/Visit';
import Discover from './components/Discover';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/auth/Login';
import LandingSwitch from './components/LandingSwitch';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { handleLogout } from './components/auth/actions';
import Signup from './components/auth/Signup'; 
import NoMatch from './components/NoMatch';
import movePreferences from './components/movePreferences';
import travelPreferences from './components/travelPreferences';
import preferenceSelect from './components/preferenceSelect';
import exploreNeighborhoods from './components/exploreNeighborhoods';
import Austin from './components/Austin';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: () => handleLogout(browserHistory),
  wrapperDisplayName: 'UserIsAuthenticated'
});

const resetScriptCount = () => {
  scriptCount = 0;
}

export default (
  <Route>
    <Route path="/" component={App}>
    	<IndexRoute component={LandingSwitch} />
      <Route path="signup" component={Signup} />
      <Route path="landing" component={LandingSwitch}></Route>
    	<Route path="move" component={Move} onEnter={resetScriptCount}></Route>
      <Route path="login" component={Login} />
    	<Route path="visit" component={Visit} onEnter={resetScriptCount}d></Route>
    	<Route path="discover" component={Discover} ></Route>
    	<Route path="favorites" component={Favorites}></Route>
      <Route path="profile" component={UserIsAuthenticated(Profile)}></Route>
      <Route path="movePreferences" component={UserIsAuthenticated(movePreferences)}></Route>
      <Route path="travelPreferences" component={UserIsAuthenticated(travelPreferences)}></Route>
      <Route path="preferenceSelect" component={UserIsAuthenticated(preferenceSelect)}></Route>
      <Route path="exploreNeighborhoods" component={exploreNeighborhoods}></Route>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>
      <Route path="austin" component={Austin}></Route>
    </Route>
    <Route path="*" status={404} component={NoMatch} />
  </Route>
)
