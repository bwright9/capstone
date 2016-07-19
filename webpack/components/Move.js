// 1. add addtional data to profile - rails migration
// 2. make sure the profile component shows that data and is able to update that data
// 3. make the discover states a link - <Link to='/move?city=San%20Fan&state=CA'>San Francisco, CA</Link>

import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MoveMap from './MoveMap';
import Walkscore from './Walkscore';
import { connect } from 'react-redux';


class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null, geoHood: null, ws_lat: null, ws_lon: null, geoWalkscore: null, average: null, crimerate: null };
		this.selectRegion = this.selectRegion.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		this.showNeighborhoods = this.showNeighborhoods.bind(this);
		this.selectNeighborhood = this.selectNeighborhood.bind(this);
		this.showCoordinates = this.showCoordinates.bind(this);
		this.fetchSchRate = this.fetchSchRate.bind(this);
		this.fetchCrimeRate = this.fetchCrimeRate.bind(this);
		this.showWalkscore = this.showWalkscore.bind(this);
	}

	componentDidMount() {
	  $('select').material_select();
	}

	selectRegion(e) {
		e.preventDefault();
		let city = this.refs.city.value.replace(/[ ]+/g, "_").trim();
		this.setState( { city: city, geoState: this.refs.geoState.value }, function stateUpdated () {
		  this.fetchNeighborhoods()
			this.fetchSchRate()
		  this.fetchCrimeRate()
		})
	}

	fetchNeighborhoods() {
		$.ajax({
			url: "/api/neighborhoods",
			type: 'GET',
			data: { city: this.state.city, geoState: this.state.geoState },
			dataType: 'JSON'
		}).done( neighborhoods => {
			console.log(neighborhoods)
			this.setState({ neighborhoods });
		}).fail( data => {
			console.log(data);
		})
	}

	fetchSchRate() {
		$.ajax({
			url: "/api/city_schrate",
			type: 'GET',
			data: { city: this.state.city, state: this.state.geoState },
			dataType: 'JSON'
		}).done( average => {
			console.log("Average:", average)
			this.setState({ average });
		}).fail( data => {
			console.log(data);
		})
	}

	ShowSchoolRate() {
		if(this.state.average === null) {
			return(
				<div></div>
			)
		}else if (this.state.average.length === 0) {
		return(
			<div>No School Ratings Found</div>
		) 
		} else {
			return(
				<div>
					<h4>
					<span> Average School Rate:</span>
					{ this.state.average }
					</h4>
				</div>
			)
		}
	}

	fetchCrimeRate() {
		$.ajax({
			url: "/api/city_crimerate",
			type: 'GET',
			data: { city: this.state.city, state: this.state.geoState },
			dataType: 'JSON'
		}).done( crimerate => {
			console.log(crimerate)
			this.setState({ crimerate });
		}).fail( data => {
			console.log(data);
		})
	}

	ShowCrimeRate() {
		if(this.state.crimerate === null) {
			return(
				<div></div>
			)
		}else if (this.state.crimerate.length === 0) {
		return(
			<div>No Crime Ratings Found</div>
		) 
		} else {
			return(
				<div>
					<h4>
					<span> Voilent Crime Rate:</span>
					{ this.state.crimerate }
					</h4>
				</div>
			)
		}
	}

	showNeighborhoods() {
		if(this.state.neighborhoods === null) {
			return(
				<div></div>
			)
		} else if (this.state.neighborhoods.names.length === 0 ) {
			return(
				<div>No neighborhoods, sorry</div>
			)
		} else {
			let names = this.state.neighborhoods.names.map( (neighborhood, index) => {
				return(
	  	    <li><a href="#" key={`hood-${index}`} onClick={(e) => this.selectNeighborhood(e, neighborhood)}>{neighborhood}</a></li>
				)
			})
			return(
				<div>				
					<p>There are {this.state.neighborhoods.count} neighborhoods in {this.refs.city.value.trim()}, {this.state.geoState}.</p>
					<ul className="neighborhoods-list" >
						{ names }
					</ul>
				</div>
			)
		}
	}

	selectNeighborhood(e, neighborhood) {
		e.preventDefault();
		this.setState({geoHood: neighborhood});
	}

	showCoordinates() {
		if(this.state.geoHood === null) {
			return(
				<div></div>
			)
		} else {
			let hood = this.state.geoHood;
			let index = this.state.neighborhoods.names.indexOf(hood);
			let hood_lat = this.state.neighborhoods.lat[index];
			let hood_long = this.state.neighborhoods.long[index];
			return(
				<div>				
					<p>The coordinates of {this.state.geoHood} are {hood_lat}, {hood_long}.</p>
					{ this.showWalkscore() }
					<MoveMap hood_lat={hood_lat} hood_long={hood_long} />
				</div>
			)
		}
	}

	showWalkscore() {
		$.ajax({
			url: "/api/new_walkscore",
			type: 'GET',
			data: { lat: this.state.neighborhoods.lat[this.state.neighborhoods.names.indexOf(this.state.geoHood)], long: this.state.neighborhoods.long[this.state.neighborhoods.names.indexOf(this.state.geoHood)] },
			dataType: 'JSON'
		}).done( score => {
			this.setState({ geoWalkscore: score });
		}).fail( data => {
			console.log(data);
		});
		return(
			<div>				
				<p>The walkscore of {this.state.geoHood} is {this.state.geoWalkscore}.</p>
			</div>
		)
	}

	render() {
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state;
		return(
			<div>
				<h1 className="center">Move Component</h1>
				<div className="container">
					<p className="center">Current Walkscore: {this.props.walkscore}</p>
			    <form onSubmit={this.selectRegion}>
						<input ref='city' type='text' placeholder='Choose your city' defaultValue={city} />
						<select ref='geoState' defaultValue={state}>
				      <option value="" disabled selected>Choose your state</option>
				      <option value="alabama">Alabama</option>
							<option value="alaska">Alaska</option>
							<option value="arizona">Arizona</option>
							<option value="arkansas">Arkansas</option>
							<option value="california">California</option>
							<option value="colorado">Colorado</option>
							<option value="connecticut">Connecticut</option>
							<option value="delaware">Delaware</option>
							<option value="district_of_columbia">District Of Columbia</option>
							<option value="florida">Florida</option>
							<option value="georgia">Georgia</option>
							<option value="hawaii">Hawaii</option>
							<option value="idaho">Idaho</option>
							<option value="illinois">Illinois</option>
							<option value="indiana">Indiana</option>
							<option value="iowa">Iowa</option>
							<option value="kansas">Kansas</option>
							<option value="kentucky">Kentucky</option>
							<option value="louisiana">Louisiana</option>
							<option value="maine">Maine</option>
							<option value="maryland">Maryland</option>
							<option value="massachusetts">Massachusetts</option>
							<option value="michigan">Michigan</option>
							<option value="minnesota">Minnesota</option>
							<option value="mississippi">Mississippi</option>
							<option value="missouri">Missouri</option>
							<option value="montana">Montana</option>
							<option value="nebraska">Nebraska</option>
							<option value="nevada">Nevada</option>
							<option value="new_hampshire">New Hampshire</option>
							<option value="new _jersey">New Jersey</option>
							<option value="new_mexico">New Mexico</option>
							<option value="new_york">New York</option>
							<option value="north_carolina">North Carolina</option>
							<option value="north_dakota">North Dakota</option>
							<option value="ohio">Ohio</option>
							<option value="oklahoma">Oklahoma</option>
							<option value="oregon">Oregon</option>
							<option value="pennsylvania">Pennsylvania</option>
							<option value="rhode_island">Rhode Island</option>
							<option value="south_carolina">South Carolina</option>
							<option value="south_dakota">South Dakota</option>
							<option value="tennessee">Tennessee</option>
							<option value="texas">Texas</option>
							<option value="utah">Utah</option>
							<option value="vermont">Vermont</option>
							<option value="virginia">Virginia</option>
							<option value="washington">Washington</option>
							<option value="west_virginia">West Virginia</option>
							<option value="wisconsin">Wisconsin</option>
							<option value="wyoming">Wyoming</option>
						</select>
					    
						<input type='submit' className='btn' />
					</form>
				{ this.showNeighborhoods() }
				{ this.showCoordinates() }
				{ this.ShowSchoolRate() }
				{ this.ShowCrimeRate() }
				<br />
				<br />
				<Walkscore />
			  </div>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return { walkscore: state.profile.walkscore }
}

export default connect(mapStateToProps)(Move);
