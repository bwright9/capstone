import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MoveMap from './MoveMap';
import Walkscore from './Walkscore';

class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null, geoHood: null, ws_lat: null, ws_lon: null };
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
		return(
			<div>
				<h1 className="center">Move Component</h1>
				<div className="container">
			    
			    <form onSubmit={this.selectRegion}>
						<input ref='city' type='text' placeholder='Choose your city' />
						<select ref='geoState'>
				      <option value="" disabled selected>Choose your state</option>
				      <option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
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
					    
						<input type='submit' className='btn' />
					</form>
				{ this.showNeighborhoods() }
				{ this.showCoordinates() }
				
				<br />
				<br />
				
				<Walkscore />
			  </div>
			</div>
		)
	}
}

export default Move;
