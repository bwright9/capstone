import React from 'react';

class MoveMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = { url: null };
	}

	componentWillMount() {
    $.ajax({
			type: 'GET',
			url: '/api/maps_key',
			dataType: 'JSON'
		}).done( data => {
			this.setState({ url: `https://www.google.com/maps/embed/v1/view?key=${data.maps_key}&zoom=15&center=${this.props.hood_lat},${this.props.hood_long}` });
		}).fail( data => {
			console.log(`Failed getting maps api key: ${data}`);
		});  
	}

	componentWillReceiveProps() {
    $.ajax({
			type: 'GET',
			url: '/api/maps_key',
			dataType: 'JSON'
		}).done( data => {
			this.setState({ url: `https://www.google.com/maps/embed/v1/view?key=${data.maps_key}&zoom=15&center=${this.props.hood_lat},${this.props.hood_long}` });
		}).fail( data => {
			console.log(`Failed getting maps api key: ${data}`);
		});  
	}

	render() {
		if(this.state.url) {
			return(
				<iframe width="840" height="450" frameborder="0" style={{border:0}} 
					src={this.state.url} allowfullscreen>
				</iframe>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
}

export default MoveMap;
