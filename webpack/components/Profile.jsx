import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		
	}

	showProfile() {
		let profile = this.state.user.profile;
		if(this.state.user.profile) {
			return(
				<div className="center blue lighten-3 container" style={{borderRadius: '20px', paddingBottom: '10px', marginTop: '40px', marginBottom: '30px'}}>
					<h3>Current City: ${current_city}</h3>
					<h5>Current State: ${current_state}</h5>
					<h5>Current Neighborhood: ${current_neighborhood}</h5>
					<h5>Current Zip Code: ${current_zipcode}</h5>
				</div>
			)
		} else {
			return(
				<div>
					<h3 className="center">Please update your current neighborhood</h3>
					<div className="col s6 m4 offset-s3 offset-m4">
						<form ref='profileForm' onSubmit={this.updateProfile}>
							<input ref='current_city' type='text' placeholder="Current City" />
							<input ref='current_state' type='text' placeholder="Current State" />
							<input ref='current_neighborhood' type='text' placeholder="Current Neighborhood" />
							<input ref='current_zipcode' type='text' placeholder="Current Zip Code" />
						</form>
					</div>
				</div>
			)
		}
	}

	updateProfile(e) {
		e.preventDefault();
		let current_city = this.refs.current_city.value
		let current_state = this.refs.current_state.value
		let current_neighborhood = this.refs.current_neighborhood.value
		let current_zipcode = this.refs.current_zipcode.value
		this.refs.profileForm.reset()
		$.ajax({
			url: `/api/users/${this.state.user.id}`,
			type: 'PUT',
			dataType: 'JSON',
			data: { user: { current_city } }
		}).done( user => {
			this.setState({ user })
		}).fail( data => {
			alert('Could not update profile')
		})
	}

	render() {
		return(
			<div className="center">
				<h1>Profile Component</h1>
			</div>

		)
	}
}

export default Profile;