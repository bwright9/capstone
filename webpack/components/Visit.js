import React from 'react';
import { Link } from 'react-router';
import Walkscore from './Walkscore';
import TextField from 'material-ui/TextField';
import MoveMap from './MoveMap';

class Visit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null, geoHood: null };
		this.selectRegion = this.selectRegion.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		this.showNeighborhoods = this.showNeighborhoods.bind(this);
		this.selectNeighborhood = this.selectNeighborhood.bind(this);
		this.showCoordinates = this.showCoordinates.bind(this);
	}

	componentDidMount() {
	  $('select').material_select();
	}

	selectRegion(e) {
		e.preventDefault();
		let city = this.refs.city.value.replace(/[ ]+/g, "").trim();
		this.setState( { city: city, geoState: this.refs.geoState.value }, function stateUpdated () {
			this.fetchNeighborhoods() 
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
					<MoveMap hood_lat={hood_lat} hood_long={hood_long} />
				</div>
			)
		}
	}

	render() {
		let commercial = "commercial";
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state || "";
		return(
			<div>
				<h1 className="center">Visit Component</h1>
				<div className="container">
			    <form onSubmit={this.selectRegion}>
						<input ref='city' type='text' placeholder='Your city' defaultValue={city} />
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
								<option value="dc">District of Columbia</option>
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
								<option value="newhampshire">New Hampshire</option>
								<option value="newjersey">New Jersey</option>
								<option value="newmexico">New Mexico</option>
								<option value="newyork">New York</option>
								<option value="northcarolina">North Carolina</option>
								<option value="northdakota">North Dakota</option>
								<option value="ohio">Ohio</option>
								<option value="oklahoma">Oklahoma</option>
								<option value="oregon">Oregon</option>
								<option value="pennsylvania">Pennsylvania</option>
								<option value="rhodeisland">Rhode Island</option>
								<option value="southcarolina">South Carolina</option>
								<option value="southdakota">South Dakota</option>
								<option value="tennessee">Tennessee</option>
								<option value="texas">Texas</option>
								<option value="utah">Utah</option>
								<option value="vermont">Vermont</option>
								<option value="virginia">Virginia</option>
								<option value="washington">Washington</option>
								<option value="westvirginia">West Virginia</option>
								<option value="wisconsin">Wisconsin</option>
								<option value="wyoming">Wyoming</option>
						</select>
						<input type='submit' className='btn' />
					</form>
					{ this.showNeighborhoods() }
					{ this.showCoordinates() }

					<br />
					<br />
					
					<Walkscore industry={commercial} />	
				</div>
			</div>
		)
	}
}

export default Visit;