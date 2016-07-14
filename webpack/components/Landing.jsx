import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { handleLogin } from '../actions';
import { connect } from 'react-redux';

class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = { discoverDetail: false, travelDetail: false, moveDetail: false }
		this.travelCard = this.travelCard.bind(this);
		this.moveCard = this.moveCard.bind(this);
		this.discoverCard = this.discoverCard.bind(this);

	}

	
	discoverCard() {
		if (this.state.discoverDetail) {
			return(
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/discover.jpg" />
 				    <h4 className="card-title">DISCOVER</h4>
 				    <div className="dialog-box center">
 				    	<h5>Want to know how far your salary will go in another city? Or how much you can afford to spend on a house or rent? Use our discover tools to help determine your next move.</h5>
 				    </div>
 				    <button className='btn-large' onClick={() => this.setState( {discoverDetail: !this.state.discoverDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return(
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/discover.jpg" />
 				    <h4 className="card-title">DISCOVER</h4>
 				    <button className='btn-large' onClick={() => this.setState( {discoverDetail: !this.state.discoverDetail }) }>learn more</button>
 				  </div>
 				</div>
			)
		}
	}

	travelCard() {
		if (this.state.travelDetail) {
			return(
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/balcony.jpg" />
 				    <h4 className="card-title">TRAVEL</h4>
 				    <div className="dialog-box center">
 				    	<h5>Visiting a new city and not sure which neighborhood has the best restaurants or is closest to the stadium? Help us help you find the perfect spot.</h5>
 				    </div>
 				    <button className='btn-large' onClick={() => this.setState( {travelDetail: !this.state.travelDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return(
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/balcony.jpg" />
 				    <h4 className="card-title">TRAVEL</h4>
 				    <button className='btn-large' onClick={() => this.setState( {travelDetail: !this.state.travelDetail }) }>learn more</button>
 				  </div>
 				</div>
 			)
		}
	}

	moveCard() {
		if (this.state.moveDetail) {
			return(
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/home.jpg" />
 				    <h4 className="card-title">MOVE</h4>
 				    <div className="dialog-box center">
 				    	<h5>Relocating and want to find somewhere that feels like home? Help us help you find the perfect spot.</h5>
 				    </div>
 				    <button className='btn-large' onClick={() => this.setState( {moveDetail: !this.state.moveDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return (
				<div className="card">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/home.jpg" />
 				    <h4 className="card-title">MOVE</h4>
 				    <button className='btn-large' onClick={() => this.setState( {moveDetail: !this.state.moveDetail }) }>learn more</button>
 				  </div>
 				</div>
			)	
		}
	}

	render() {
		return(	
 			<div className="row">
 			  <div className="col s12 m4">
 			    { this.travelCard() }
 			  </div>
			
 			  <div className="col s12 m4">
 			    { this.moveCard() }
 			  </div>
			
 			  <div className="col s12 m4">
 			    { this.discoverCard() }
 			  </div>
 			</div>
 		)
	}
}

export default connect()(Landing);
