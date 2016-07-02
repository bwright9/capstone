import React from 'react';
import { Link } from 'react-router';
import Slider from '../components/Slider';

class Discover extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header"><i className="material-icons">local_atm</i>Take-Home Pay Calculator</div>
			      <div className="collapsible-body calculator">
			      	
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">event_seat</i>Hamilton</div>
			      <div className="collapsible-body">
			      	<ul className="collapsible-list hamilton-list">
			      		<li>San Francisco, CA</li>
			      		<li>Los Angeles, CA</li>
			      		<li>Washington, DC</li>
			      		<li>Atlanta, GA</li>
			      		<li>Boston, MA</li>
			      		<li>Charlotte, NC</li>
			      		<li>Cleveland, OH</li>
			      		<li>Costa Mesa, CA</li>
			      		<li>Denver, CO</li>
			      		<li>Des Moines, IA</li>
			      		<li>Houston, TX</li>
			      		<li>Las Vegas, NV</li>
			      		<li>Portland, OR</li>
			      		<li>Salt Lake City, UT</li>
			      		<li>San Diego, CA</li>
			      		<li>Seattle, WA</li>
			      		<li>St. Louis, MO</li>
			      		<li>Tempa, AZ</li>
			      	</ul>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">check_circle</i>Rock the Vote</div>
			      <div className="collapsible-body">
			      	<p>Lorem ipsum dolor sit amet.</p>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">wifi</i>Google Fiber</div>
			      <div className="collapsible-body fiber">
			      	<h3>Current Cities</h3>
			      	<ul className="collapsible-list fiber-list">
			      		<li>Atlanta, GA</li>
			      		<li>Austin, TX</li>
			      		<li>Kansas City, MO</li>
			      		<li>Kansas City, KS</li>
			      		<li>Nashville, TN</li>
			      		<li>Provo, UT</li>
			      	</ul>
			      	<h3>Upcoming Cities</h3>
			      	<ul className="collapsible-list fiber-list">
			      		<li>Charlotte, NC</li>
			      		<li>Huntsville, AL</li>
			      		<li>Raleigh-Durham, NC</li>
			      		<li>Salt Lake City, UT</li>
			      		<li>San Antonio, TX</li>
			      		<li>San Francisco, CA</li>
			      	</ul>
			      </div>
			    </li>
			  </ul>
			</div>
		)
	}
}

export default Discover;
