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
 				    	<h6 className='center'>
 				    		Want to know how far your salary will go in another city? Or how the schools compare?
 				    		Want to compare climates or cost of living? Our Discover tools are meant to help you determine where you will be going next. 
 				    		Whether that be for a weekend getaway or a new start in a new city, someThere puts all the information at your fingertips.
 				    	</h6>
 				    </div>
 				    <button className='btn z-depth-5 close' onClick={() => this.setState( {discoverDetail: !this.state.discoverDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return(
				<div className="card hoverable">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/discover.jpg" />
 				    <h4 className="card-title">DISCOVER</h4>
 				    <button className='btn z-depth-5' onClick={() => this.setState( {discoverDetail: !this.state.discoverDetail }) }>learn more</button>
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
 				    <h2 className="card-title">TRAVEL</h2>
 				    <div className="dialog-box center">
 				    	<h6 className='center'>
 				    		Taking a trip and not sure where to stay? Looking for a place close to the theaters? 
 				    		Or maybe you want to have a wide variety of restaurants right outside your door. 
 				    		Complete a list of travel preferences and someThere Visit will match you with a neighborhood that meets your needs.  
 				    	</h6>
 				    </div>
 				    <button className='btn z-depth-5 close' onClick={() => this.setState( {travelDetail: !this.state.travelDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return(
				<div className="card hoverable">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/balcony.jpg" />
 				    <h2 className="card-title">TRAVEL</h2>
 				    <button className='btn z-depth-5' onClick={() => this.setState( {travelDetail: !this.state.travelDetail }) }>learn more</button>
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
 				    <h2 className="card-title">MOVE</h2>
 				    <div className="dialog-box center">
 				    	<h6 className='center'>
 				    		Relocating and want to find somewhere that feels like home? 
 				    		If you like your current neighborhood, the Move search tool will find neighborhood with a similar vibe and amenities in your new city. 
 				    		If you are looking for something different, complete a search based on a list preferences you set.
 				    		Leave the worry to us. SomeThere Move will help you find a home there.
 				    	</h6>
 				    </div>
 				    <button className='btn z-depth-5 close' onClick={() => this.setState( {moveDetail: !this.state.moveDetail }) }>close</button>
 				  </div>
 				</div>
			)
		} else {
			return (
				<div className="card hoverable">
 				  <div className="card-image" >
 				    <img className='responsive-img landing_img' src="assets/home.jpg" />
 				    <h2 className="card-title">MOVE</h2>
 				    <button className='btn z-depth-5' onClick={() => this.setState( {moveDetail: !this.state.moveDetail }) }>learn more</button>
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
