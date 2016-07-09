import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { profile: undefined }
	}

	componentWillMount() {
		$.ajax({
			url:`/api/profiles/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON',
		}).done( profile => {
			this.setState({ profile })
		}).fail( data => {
			alert('Something went wrong')
		})
	}

	addProfile(e) {
		e.preventDefault();
		let current_city = this.refs.currentCity.value
		let current_state = this.refs.currentState.value
		let current_neighborhood = this.refs.currentNeighborhood.value
		let current_zipcode = this.refs.currentZipcode.value
		let age = this.refs.age.value
		$.ajax({
			url: `/api/profiles`,
			type: 'POST',
			dataType: 'JSON',
			data: { profile: { current_city, current_state, current_neighborhood, current_zipcode, age, user_id: this.props.id } }
		}).done( profile => {
			this.setState({ profile })
		})
		this.refs.addProfileForm.reset()
	}

	updateProfile(profile) {
		let profiles = this.state.profile
		let index = profile.findIndex( p => p.id === profile.id)
		this.setState({
			profile: [
				...profile.slice(0, index),
				{...profile},
				...profile.slice(index + 1, profile.length)
			]
		})
	}
	render() {
		let profile = this.state.profile;
		if (!profile) {
			return(
				<div className='row'>
					<h1 className="center">Profile</h1>
					<div className="container">
						<form ref='addProfileForm' onSubmit={this.addProfile.bind(this)}>
							<input ref='currentCity' type='text' placeholder='Current City' />
							<input ref='currentState' type='text' step='any' placeholder='Current State' />
							<input ref='currentNeighborhood' type='text' step='any' placeholder='Current Neighborhood' />
							<input ref='currentZipcode' type='number' step='any' placeholder='Current Zip Code' />
							<input ref='age' type='number' step='any' placeholder='Age' />
							<button type='submit' className='btn'>Create Profile</button>
						</form>
					</div>
				</div>
			)
		} else {
			return(
				<div>
					<div className="row">
						<div className='profile'>
					  	<div className="col s12 m6">
			  	    		<div className="card grey lighten 2">
			  	      		<div className="card-content white-text">
			  	        		<p>Current City: {profile.current_city}</p>
			  	        		<p>Current State: {profile.current_state}</p>
			  	        		<p>Current Neighborhood: {profile.current_neighborhood}</p>
			  	        		<p>Current Zip Code: {profile.current_zipcode}</p>
			  	        		<p>Age: {profile.age}</p>
			  	      		</div>
			  	     		<div className="card-action">
			  	       		<a href="#">Edit</a>
			  	      	</div>
			  	    	</div>
			  	  	</div>
			  	 	</div>
			  	 	<div>
			    <div className='profile_desc col 2'><p>someThere helps you match your current neighborhood with other similar neighborhoods.
			    		You can also customize your own preferences.</p> 
			    		<p>Select from the options below:</p>
			   			<button className="btn">Current Neighborhood</button>
			   			<button className='btn blue-grey'><Link to={'/preferenceSelect'}>Set Preferences</Link></button>
			  		</div>
			  		</div>
			  	</div>
			  </div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return { id: state.auth.id };
}

export default connect(mapStateToProps)(Profile);