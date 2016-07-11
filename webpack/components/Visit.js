import React from 'react';
import { Link } from 'react-router';
import Walkscore from './Walkscore';

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
			debugger
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
			<div className="center">
				<h1>Visit Component</h1>
				<Walkscore />
			</div>
		)
	}
}

export default Visit;