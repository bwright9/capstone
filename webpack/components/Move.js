import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Request from 'superagent';

class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: null, geoState: '', neighborhoods: null };
		this.handleSelect = this.handleSelect.bind(this);
		this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
		this.showNeighborhoods = this.showNeighborhoods.bind(this);
	}

	handleSelect(e) {
		e.preventDefault();
		this.setState( { city: this.refs.city.value, geoState: this.refs.geoState.value }, function stateUpdated () {
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
			let names = this.state.neighborhoods.names.map( neighborhood => {
				return(
	  	    <li>{neighborhood}</li>
				)
			})
			return(
				<div>				
					<p>There are {this.state.neighborhoods.count} neighborhoods in {this.state.city}, {this.state.geoState}.</p>
					<ul>
						{ names }
					</ul>
				</div>
			)
		}
	}

	render() {
		return(
			<div>
				<h1 className="center">Move Component</h1>
				<div className="container">
			    <form onSubmit={this.handleSelect}>
						<input ref='city' type='text' placeholder='Seattle' />
						<input ref='geoState' type='text' placeholder='WA' />

						<input type='submit' className='btn' />
					</form>
				{ this.showNeighborhoods() }

			  </div>
			</div>
		)
	}
}

export default Move;
