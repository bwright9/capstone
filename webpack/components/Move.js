import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import Request from 'superagent';

class Move extends React.Component {
	constructor(props) {
		super(props);
		this.state = { city: '', geoState: '' };
		this.handleSelect = this.handleSelect.bind(this);
		this.showNeighborhoods = this.showNeighborhoods.bind(this);
	}

	handleSelect(e) {
		e.preventDefault();
		this.setState( { city: this.refs.city.value, geoState: this.refs.geoState.value }, function stateUpdated () {
			this.showNeighborhoods() 
		})
	}

	showNeighborhoods() {
		$.ajax({
			url: "/api/neighborhoods",
			type: 'GET',
			dataType: 'JSON'
		}).done( neighborhoods => {
			console.log(neighborhoods)
		}).fail( data => {
			console.log(data);
		})
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
			  </div>
 				<p>You are looking at neighborhoods in {this.state.city}, {this.state.geoState}.</p>
			</div>
		)
	}
}

export default Move;
