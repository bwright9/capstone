import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import Walkscore from './Walkscore';

class Visit extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', count: null, neighborhoods: null, geoHood: null, scores: null,
									 geoWalkscore: null, venues: null, preferences: null};
		this.showForm = this.showForm.bind(this);
		this.selectRegion = this.selectRegion.bind(this);
		this.fetchCount = this.fetchCount.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		this.selectNeighborhood = this.selectNeighborhood.bind(this);
		this.showCoordinates = this.showCoordinates.bind(this);
		this.fetchWalkscore = this.fetchWalkscore.bind(this);
		this.showWalkscore = this.showWalkscore.bind(this);
		this.recommendNeighborhood = this.recommendNeighborhood.bind(this);
		this.showCount = this.showCount.bind(this);
		this.showRecommendation = this.showRecommendation.bind(this);
		this.fetchPreferences = this.fetchPreferences.bind(this);
		this.fetchVenues = this.fetchVenues.bind(this);
		this.showVenuesFood = this.showVenuesFood.bind(this);
		this.showVenuesDrinks = this.showVenuesDrinks.bind(this);
		this.showVenuesCoffee = this.showVenuesCoffee.bind(this);
		this.showVenuesShops = this.showVenuesShops.bind(this);
		this.showVenuesArts = this.showVenuesArts.bind(this);
		this.showVenuesOutdoors = this.showVenuesOutdoors.bind(this);
		this.showVenuesSights = this.showVenuesSights.bind(this);
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
	  	this.fetchCount()
		})
	}

	fetchCount() {
		$.ajax({
			url: "/api/count",
			type: 'GET',
			data: { city: this.state.city, geoState: this.state.geoState },
			dataType: 'JSON'
		}).done( count => {
			this.runUpdate = true;
			this.setState({ count }, function stateUpdated () {
				this.fetchNeighborhoods(); 
			})
		}).fail( data => {
			console.log(data);
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
				this.recommendNeighborhood(); 
			})
		}).fail( data => {
			this.runUpdate = true;
			console.log(data);
		})
	}

	recommendNeighborhood() {
		let matchPoint = null;
		let matchName = null;
		let neighborhoods = this.state.neighborhoods;
		let names = Object.keys(neighborhoods);
		matchPoint = neighborhoods[names[names.length - 1]].score;
		matchName = names[names.length-1];
		this.setState({ geoHood: matchName, geoWalkscore: matchPoint }, function stateUpdated () {
				this.fetchPreferences(); 
			})
	}

	fetchPreferences() {
		$.ajax({
	    url: "/api/visit_preferences",
	    type: 'GET',
	    dataType: 'JSON',
	  }).done( visitPreferences => {
	  	this.setState({ preferences: visitPreferences }, function stateUpdated () {
				this.fetchVenues(); 
			})
	  }).fail( data => {
	  	console.log('oh no!')
	  });
	}

	fetchVenues() {
		let hood = this.state.geoHood;
		let lat = this.state.neighborhoods[hood].lat;
		let long = this.state.neighborhoods[hood].long;
		let preferences = this.state.preferences
		let keys = Object.keys(preferences);
		let filtered = keys.filter(function(key) {
		  return preferences[key]
		});
		$.ajax({
			url: "/api/foursquare",
			type: 'GET',
			data: { lat, long, filtered }
		}).done( venues => {
			this.setState({ venues });
		}).fail( data => {
			console.log('did not work');
		})
	}

	showCount() {
		if(this.state.count && this.state.geoHood === null) {
			return(
				<div>
					<p>We are currently searching through {this.state.count} neighborhoods to find the best one to visit.</p>
					 <LinearProgress mode="indeterminate" />
				</div>
			)
		}	else {
			return(
				<div>				
					<p></p>
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
	
	showRecommendation() {
		if(this.state.geoHood === null) {
			return(
				<div></div>
			)
		} else {
			return(
				<div>				
					<p>We recommend {this.state.geoHood} which has the highest walkscore of {this.state.geoWalkscore}.</p>
				</div>
			)
		}
	}

	showVenuesFood() {
		if (this.state.venues) {
			if (this.state.venues.food) {
				return(
					<div className="col s12 m4">
						<p className="rex">Food</p>
						<p>{this.state.venues.food[0][0]} ({this.state.venues.food[0][1]}/10)</p>
						<p>{this.state.venues.food[1][0]} ({this.state.venues.food[1][1]}/10)</p>
						<p>{this.state.venues.food[2][0]} ({this.state.venues.food[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesDrinks() {
		if (this.state.venues) {
			if (this.state.venues.drinks) {
				return(
					<div className="col s12 m4">
						<p className="rex">Drinks</p>
						<p>{this.state.venues.drinks[0][0]} ({this.state.venues.drinks[0][1]}/10)</p>
						<p>{this.state.venues.drinks[1][0]} ({this.state.venues.drinks[1][1]}/10)</p>
						<p>{this.state.venues.drinks[2][0]} ({this.state.venues.drinks[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesCoffee() {
		if (this.state.venues) {
			if (this.state.venues.coffee) {
				return(
					<div className="col s12 m4">
						<p className="rex">Coffee</p>
						<p>{this.state.venues.coffee[0][0]} ({this.state.venues.coffee[0][1]}/10)</p>
						<p>{this.state.venues.coffee[1][0]} ({this.state.venues.coffee[1][1]}/10)</p>
						<p>{this.state.venues.coffee[2][0]} ({this.state.venues.coffee[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesShops() {
		if (this.state.venues) {
			if (this.state.venues.shops) {
				return(
					<div className="col s12 m4">
						<p className="rex">Shops</p>
						<p>{this.state.venues.shops[0][0]} ({this.state.venues.shops[0][1]}/10)</p>
						<p>{this.state.venues.shops[1][0]} ({this.state.venues.shops[1][1]}/10)</p>
						<p>{this.state.venues.shops[2][0]} ({this.state.venues.shops[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesArts() {
		if (this.state.venues) {
			if (this.state.venues.arts) {
				return(
					<div className="col s12 m4">
						<p className="rex">Arts</p>
						<p>{this.state.venues.arts[0][0]} ({this.state.venues.arts[0][1]}/10)</p>
						<p>{this.state.venues.arts[1][0]} ({this.state.venues.arts[1][1]}/10)</p>
						<p>{this.state.venues.arts[2][0]} ({this.state.venues.arts[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesOutdoors() {
		if (this.state.venues) {
			if (this.state.venues.outdoors) {
				return(
					<div className="col s12 m4">
						<p className="rex">Outdoors</p>
						<p>{this.state.venues.outdoors[0][0]} ({this.state.venues.outdoors[0][1]}/10)</p>
						<p>{this.state.venues.outdoors[1][0]} ({this.state.venues.outdoors[1][1]}/10)</p>
						<p>{this.state.venues.outdoors[2][0]} ({this.state.venues.outdoors[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showVenuesSights() {
		if (this.state.venues) {
			if (this.state.venues.sights) {
				return(
					<div className="col s12 m4">
						<p className="rex">Sights</p>
						<p>{this.state.venues.sights[0][0]} ({this.state.venues.sights[0][1]}/10)</p>
						<p>{this.state.venues.sights[1][0]} ({this.state.venues.sights[1][1]}/10)</p>
						<p>{this.state.venues.sights[2][0]} ({this.state.venues.sights[2][1]}/10)</p>
					</div>
				)
			}
		} else {
			return(
				<div></div>
			)
		}
	}

	showCoordinates() {
		if(this.state.geoHood === null) {
			return(
				<div></div>
			)
		} else {
			let commercial = "commercial";
			let hood = this.state.geoHood;
			let hood_lat = this.state.neighborhoods[hood].lat;
			let hood_long = this.state.neighborhoods[hood].long;
			return(
				<div>		
					<Walkscore industry={commercial} hood_lat={hood_lat} hood_long={hood_long}/>	
				</div>
			)
		}
	}

	showForm() {
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state || "";
		if (this.state.city === null) {
			return(
				<div>
					<div className="container">
						<form onSubmit={this.selectRegion}>
							<input ref='city' type='text' placeholder='Choose your city' defaultValue={city} />
							<select ref='geoState' defaultValue={state}>
					      <option value="" disabled>Choose your state</option>
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
					</div>
				</div>
			)
		} else {
			return(
				<div>
					<button type="button" className="btn" onClick={(e) => this.reload(e)}>Search Again</button>
				</div>
			)
		}	
	}

	reload(e) {
		e.preventDefault()
		window.location.reload();
	}

	render() {
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state || "";
		return(
			<div>
				<h1 className="center spaced">visit</h1>
				<div className="container">

					{ this.showForm() }
					{ this.showCount() }
					{ this.showRecommendation() }

					<div className="row">
						{ this.showVenuesFood() }
						{ this.showVenuesDrinks() }
						{ this.showVenuesCoffee() }
						{ this.showVenuesShops() }
						{ this.showVenuesArts() }
						{ this.showVenuesOutdoors() }
						{ this.showVenuesSights() }
					</div>


					{ this.showCoordinates() }

					<br />
					<br />
					
				</div>
			</div>
		)
	}
}

export default Visit;
