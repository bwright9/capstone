import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
	
  <div>

		<nav>
	    <div className="nav-wrapper">
	      <a href="#" className="brand-logo">somethere</a>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><a href="#!" className="btn">Login</a></li>
	      </ul>
	    </div>
	  </nav>

		
    <ul id="slide-out" className="side-nav fixed">
      <li className="search">
      	<div className="search-wrapper  focused">
      		<input id="search" placeholder="Search" />
      	</div>
      </li>
      <li><Link to="/move">Move</Link></li>
      <li><a href="#!">Visit</a></li>
      <li><a href="#!">Discover</a></li>
      <li><a href="#!">Favorites</a></li>
      <li><p className="" id="city">Current City: </p></li>

    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>

    <h1 className="center">Hello World</h1>

    { children }



  </div>
)

export default App;
