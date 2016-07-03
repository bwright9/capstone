import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

class Discover extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	  var element = ReactDOM.findDOMNode(this.refs.dropdown)

	  $(element).ready(function() {
	    $('select').material_select();
	  });

	  $(document).ready(function(){
	    $('.collapsible').collapsible();
	  });
	}

	render() {
		return(
			<div>
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header"><i className="material-icons">local_atm</i>Take-Home Pay Calculator</div>
			      <div className="collapsible-body calculator">

			      	<div className="row state-selector">
				      	<div className="input-field">
				      		<div className="col s2">Choose your state:</div>
						      <select ref="dropdown" className="col s4 states-list">
						        <option value="" disabled>Choose your state</option>
						        <option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
						      </select>
						    </div>
						  </div>

			      	<label for="salary">Salary</label>
			      	<input className="mdl-slider mdl-js-slider" type="range" min="0" max="400000" step="1" defaultValue="35000" id="salary" />

							<br />
							<br />
							<br />

							<div className="row">
								<div className="compare-states col s6 center">
									<i className="large material-icons">terrain</i>
									<p>After-Tax Income: $</p>
								</div>
								<div className="compare-states col s6 center">
									<i className="large material-icons">terrain</i>
									<p>After-Tax Income: $</p>
								</div>
								<div className="center">
									<button className="btn">Show neighborhoods in Texas</button>
								</div>
							</div>							

			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">event_seat</i>Hamilton</div>
			      <div className="collapsible-body">
			      	<div className="row hamilton-cities">
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>San Francisco, CA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Los Angeles, CA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Washington, D.C.</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Atlanta, GA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Boston, MA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Charlotte, NC</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Cleveland, OH</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Costa Mesa, CA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Denver, CO</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Des Moines, IA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Houston, TX</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Las Vegas, NV</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Portland, OR</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Salt Lake City, UT</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>San Diego, CA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Seattle, WA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>St. Louis, MO</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Tempe, AZ</p>
								</div>
							</div>				

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
			      <div className="collapsible-body">

			      	<h3 className="fiber">Current Cities</h3>

			      	<div className="row">
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Atlanta, GA</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Austin, TX</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Kansas City, MO</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Kansas City, KS</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Nashville, TN</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Provo, UT</p>
								</div>
							</div>

			      	<h3 className="fiber">Upcoming Cities</h3>

			      	<div className="row">
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Charlotte, NC</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Huntsville, AL</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Raleigh-Durham, NC</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>Salt Lake City, UT</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>San Antonio, TX</p>
								</div>
								<div className="col s4 center">
									<i className="large material-icons">terrain</i>
									<p>San Francisco, CA</p>
								</div>
							</div>
			      </div>
			    </li>
			  </ul>
			</div>
		)
	}
}

export default Discover;
