import React from 'react';
import { Link } from 'react-router';

const Sidenav = () => (
  <div>
    <ul id="slide-out" className="side-nav fixed">
      <li className="search">
        <div className="search-wrapper focused">
          <input id="search" placeholder="Search" />
        </div>
      </li>
      <li><Link to="/move">Move</Link></li>
      <li><Link to="/visit">Visit</Link></li>
      <li><Link to="/discover">Discover</Link></li>
      <li><Link to="/favorites">Favorites</Link></li>
      <li><p className= "center" id="city">Current City: Anywhere, USA</p></li>
    </ul>
    <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
  </div>
)

export default Sidenav;
