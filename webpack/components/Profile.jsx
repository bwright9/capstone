import React from 'react';

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { profile: [] }
		this.displayProfile = this.displayProfile.bind(this)
	}

	componentWillMount() {
		$.ajax({
			url:'/api/profiles',
			type: 'GET',
			dataType: 'JSON'
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
			url: `/api/profiles/${this.state.userId}/profiles`,
			type: 'POST',
			dataType: 'JSON',
			data: { profile: { current_city, current_state, current_neighborhood, current_zipcode, age } }
		}).done( profile => {
			this.setState({ profile: [
					{...profile},
					...this.state.profile
				]
			})
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

	deleteProfile(id) {
		$.ajax({
			url: `/api/users/${this.props.params.userId}/profiles/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let profile = this.state.profile
			let index = profile.findIndex( p => p.id === id)
			this.setState({
				profile: [
					...profile.slice(0, index),
					...profile.slice(index + 1, profile.length)
				]
			})
		})
	}

	displayProfile() {
		return this.state.profile.map( profile => {
			return (
				<Profile key={profile.id} profile={profile} userId={this.props.params.userId} deleteProfile={this.deleteProfile.bind(this)} updateProfile={this.updateProfile.bind(this)}/>
			)
		})
	}

	render() {
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
				{this.displayProfile()}
			</div>
		)
	}
}

export default Profile;