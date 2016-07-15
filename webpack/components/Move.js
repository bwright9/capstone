import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MoveMap from './MoveMap';
import Walkscore from './Walkscore';
import CrimeRate from './CrimeRate';
import { connect } from 'react-redux';

class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null, scores: null, geoHood: null, geoWalkscore: null, ws_lat: null, ws_lon: null };
		this.selectRegion = this.selectRegion.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		this.showNeighborhoods = this.showNeighborhoods.bind(this);
		this.selectNeighborhood = this.selectNeighborhood.bind(this);
		this.showCoordinates = this.showCoordinates.bind(this);
		this.fetchWalkscore = this.fetchWalkscore.bind(this);
		this.showWalkscore = this.showWalkscore.bind(this);
		this.fetchAllWalkscores = this.fetchAllWalkscores.bind(this);
		this.recommendNeighborhood = this.recommendNeighborhood.bind(this);
		this.runUpdate = true;
	}

	componentDidMount() {
	  $('select').material_select();
	}

	selectRegion(e) {
		e.preventDefault();
		let city = this.refs.city.value.replace(/[ ]+/g, "").trim();
		this.runUpdate = false;
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
			this.runUpdate = true;
			this.setState({ neighborhoods }, function stateUpdated () {
				this.fetchAllWalkscores() 
			})
		}).fail( data => {
			this.runUpdate = true;
			console.log(data);
		})
	}

	fetchAllWalkscores() {
		let coordinatesArr = [];
		for(var i = 0; i < this.state.neighborhoods.lat.length; i++){
	    coordinatesArr.push({lat: this.state.neighborhoods.lat[i], long: this.state.neighborhoods.long[i]})
		}
		$.ajax({
			url: "/api/set_walkscore_arr",
			type: 'GET',
			data: { coordinates: coordinatesArr },
			dataType: 'JSON'
		}).done( scores => {
			console.log(scores);
			this.setState({ scores }, function stateUpdated () {
				this.recommendNeighborhood() 
			})
		}).fail( data => {
			console.log('did not work');
		});
	}
	
	recommendNeighborhood() {
		let point = this.props.walkscore;
		let matchPoint = null;
		let scores = [...this.state.scores]
		let sortedScores = scores.sort(function(a, b){return a-b});
		for(var i = 0; i < this.state.scores.length; i++){
	    if (point === i) {
	    	matchPoint = i
	    } else if (matchPoint == null && i > point ) {
	    	matchPoint = i 
	    } else {
	    
	    }
		}
		if (matchPoint == null) matchPoint = sortedScores[sortedScores.length - 1]
		this.state.scores.indexOf(matchPoint)
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
	  	    <li key={`hood-${index}`}><a href="#" onClick={(e) => this.selectNeighborhood(e, neighborhood)}>{neighborhood}</a></li>
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

	shouldComponentUpdate(nextProps, nextState) {
		return this.runUpdate;
	}

	selectNeighborhood(e, neighborhood) {
		e.preventDefault();
		this.setState({geoHood: neighborhood}, function stateUpdated () {
			this.fetchWalkscore()
		})
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

	fetchWalkscore() {
		if (this.state.geoHood) {
			let index = this.state.neighborhoods.names.indexOf(this.state.geoHood);
			let lat = this.state.neighborhoods.lat[index];
			let long = this.state.neighborhoods.long[index];
			$.ajax({
				url: "/api/new_walkscore",
				type: 'GET',
				data: { lat , long },
				dataType: 'JSON'
			}).done( score => {
				this.setState({ geoWalkscore: score });
			}).fail( data => {
				console.log(data);
			});
		} else {
			console.log('could not find score');
		}
	}

	showWalkscore() {
		if(this.state.geoWalkscore === null) {
			return(
				<div></div>
			)
		} else {
			return(
				<div>				
					<p>The walkscore of {this.state.geoHood} is {this.state.geoWalkscore}.</p>
				</div>
			)
		}
	}

	render() {
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state || "";
		return(
			<div>
				<h1 className="center">Move Component</h1>
				<div className="container">
					<p className="center">Current Walkscore: {this.props.walkscore}</p>
					<p className="center">New City Walkscores: {this.state.scores}</p>
			    <form onSubmit={this.selectRegion}>
						<input ref='city' type='text' placeholder='Choose your city' defaultValue={city} />
						<select ref='geoState' defaultValue={state}>
				      <option value="" disabled>Choose your state</option>
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
				{ this.showWalkscore() }
				
				<br />
				<br />
				
				<Walkscore />
				<CrimeRate />
			  </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { walkscore: state.profile.walkscore }
}

export default connect(mapStateToProps)(Move);
