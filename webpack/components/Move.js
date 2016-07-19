import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import MoveMap from './MoveMap';
import Walkscore from './Walkscore';
import { connect } from 'react-redux';

class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null, geoHood: null, scores: null, ws_lat: null, ws_lon: null, geoWalkscore: null, average: null, crimerate: null };
		this.showForm = this.showForm.bind(this);
		this.selectRegion = this.selectRegion.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		// this.showNeighborhoods = this.showNeighborhoods.bind(this);
		this.selectNeighborhood = this.selectNeighborhood.bind(this);
		this.showCoordinates = this.showCoordinates.bind(this);
		this.fetchSchRate = this.fetchSchRate.bind(this);
		this.fetchCrimeRate = this.fetchCrimeRate.bind(this);
		this.fetchWalkscore = this.fetchWalkscore.bind(this);
		this.showWalkscore = this.showWalkscore.bind(this);
		// this.fetchAllWalkscores = this.fetchAllWalkscores.bind(this);
		this.recommendNeighborhood = this.recommendNeighborhood.bind(this);
		this.showRecommendation = this.showRecommendation.bind(this);

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
			this.runUpdate = true;
			this.setState({ neighborhoods }, function stateUpdated () {
				this.recommendNeighborhood(); 
			})
		}).fail( data => {
			this.runUpdate = true;
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
		} else if (this.state.crimerate.length === 0) {
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

	// fetchAllWalkscores() {
	// 	let coordinatesArr = [];
	// 	for(var i = 0; i < this.state.neighborhoods.lat.length; i++){
	//     coordinatesArr.push({lat: this.state.neighborhoods.lat[i], long: this.state.neighborhoods.long[i]})
	// 	}
	// 	$.ajax({
	// 		url: "/api/set_walkscore_arr",
	// 		type: 'GET',
	// 		data: { coordinates: coordinatesArr },
	// 		dataType: 'JSON'
	// 	}).done( scores => {
	// 		console.log(scores);
	// 		this.setState({ scores }, function stateUpdated () {
	// 			this.recommendNeighborhood() 
	// 		})
	// 	}).fail( data => {
	// 		console.log('did not work');
	// 	});
	// }
	
	recommendNeighborhood() {
		let point = this.props.walkscore;
		let matchPoint = null;
		let matchName = null;
		let neighborhoods = this.state.neighborhoods;
		let names = Object.keys(neighborhoods);
		for(var i = 0; i < names.length; i++){
	    if (point === neighborhoods[names[i]].score) {
	    	matchPoint = i;
	    	matchName = names[i]
	    } else if (matchPoint == null && neighborhoods[names[i]].score > point ) {
	    	matchPoint = i 
	    	matchName = names[i]
	    }
		}
		if (matchPoint === null) {
			matchPoint = neighborhoods[names[names.length - 1]].score;
			matchName = names[names.length-1]
		}
		this.setState({ geoHood: matchName, geoWalkscore: matchPoint });
	}

	showRecommendation() {
		if(this.state.geoHood === null) {
			return(
				<div></div>
			)
		} else {
			// let names = this.state.neighborhoods.names.map( (neighborhood, index) => {
			// 	return(
	  // 	    <li key={`hood-${index}`}><a href="#" onClick={(e) => this.selectNeighborhood(e, neighborhood)}>{neighborhood}</a></li>
			// 	)
			// })
			return(
				<div>				
					<p>Based on your current neightborhood walkscore of {this.props.walkscore}, 
						 we recommend {this.state.geoHood} which has a walkscore of {this.state.geoWalkscore}.</p>
				</div>
			)
		}
	}

	// showNeighborhoods() {
	// 	if(this.state.neighborhoods === null) {
	// 		return(
	// 			<div></div>
	// 		)
	// 	} else if (this.state.neighborhoods.names.length === 0 ) {
	// 		return(
	// 			<div>No neighborhoods, sorry</div>
	// 		)
	// 	} else {
	// 		let names = this.state.neighborhoods.names.map( (neighborhood, index) => {
	// 			return(
	//   	    <li key={`hood-${index}`}><a href="#" onClick={(e) => this.selectNeighborhood(e, neighborhood)}>{neighborhood}</a></li>
	// 			)
	// 		})
	// 		return(
	// 			<div>				
	// 				<p>There are {this.state.neighborhoods.count} neighborhoods in {this.refs.city.value.trim()}, {this.state.geoState}.</p>
	// 				<ul className="neighborhoods-list" >
	// 					{ names }
	// 				</ul>
	// 			</div>
	// 		)
	// 	}
	// }

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
			console.log(this.state.neighborhoods);
			let hood = this.state.geoHood;
			let hood_lat = this.state.neighborhoods[hood].lat;
			let hood_long = this.state.neighborhoods[hood].long;
			return(
				<div>		
					<Walkscore hood_lat={hood_lat} hood_long={hood_long}/>	
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

	showForm() {
		let location = this.props.location;
		let city = location.query.city;
		let state = location.query.state || "";
		if (this.state.geoWalkscore === null) {
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
		// let disabled = this.state.geoWalkscore ? true : false;
		// let button = !disabled ? (<input type="submit" className='btn' />) : (<button type="button" className="btn" onClick={(e) => this.reload(e)}>Search Again</button>)
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
				{ this.showForm() }
				{ this.showRecommendation() }
				{ this.showCoordinates() }
				{ this.ShowSchoolRate() }
				{ this.ShowCrimeRate() }
				
				<br />
				<br />
				
			  </div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { walkscore: state.profile.walkscore }
}

export default connect(mapStateToProps)(Move);
