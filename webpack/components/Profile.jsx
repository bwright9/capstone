import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { profile: null, edit: false }
		this.updateProfile = this.updateProfile.bind(this);
		this.addProfile = this.addProfile.bind(this);
	}

	componentWillMount() {
		let profile = null;
		$.ajax({
			url:`/api/profiles/${this.props.id}`,
			type: 'GET',
			dataType: 'JSON',
		}).done( profile => {
			profile = profile.profile 
			this.setState({ profile })
		}).fail( data => {
			alert('Something went wrong')
		})
	}

	toggleEdit() {
	  this.setState({ edit: !this.state.edit })
	}

	handleSubmit(e) {
		// TODO ensure variables are called corrently 
	  e.preventDefault();
	  let current_city = this.refs.currentCity.value
	  let current_state = this.refs.currentState.value
	  let current_neighborhood = this.refs.currentNeighborhood.value
	  let current_zipcode = this.refs.currentZipcode.value
	  let age = this.refs.age.value
	  this.toggleEdit();
	  $.ajax({
	    url: `/api/profiles/${this.props.id}`,
	    type: 'PUT',
	    dataType: 'JSON',
	    data: { profile: { current_city, current_state, current_neighborhood, current_zipcode, age } }
	  }).done( ProfileEdit => {
	    this.setState({ profile: ProfileEdit });
	  });
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

	// DON'T NEED THIS
	// updateProfile(profile) {
	// 	let userProfile = this.state.profile;
	// 	let index = userProfile.findIndex( p => p.id === profile.id)
	// 	this.setState({
	// 		profile: [
	// 			...profile.slice(0, index),
	// 			{...profile},
	// 			...profile.slice(index + 1, profile.length)
	// 		]
	// 	})
	// }

	newProfile() {
		return(
			<div className='row'>
				<h1 className="center">Profile</h1>
				<div className="container">
					<form ref='addProfileForm' onSubmit={this.addProfile}>
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
	}

	show() {
		return (
			<div>
		  	<div key={this.props.id} className="col s12 m6">
			    <div className="card grey lighten-5">
			      <div className="card-content">
			        <p>Current City: {this.state.profile.current_city}</p>
			        <p>Current State: {this.state.profile.current_state}</p>
			        <p>Current Neighborhood: {this.state.profile.current_neighborhood}</p>
			        <p>Current Zipcode: {this.state.profile.current_zipcode}</p>
			        <p>Age: {this.state.profile.age}</p>
			      </div>
			      <div className="card-action">
			        <button className="btn blue-grey" onClick={this.toggleEdit.bind(this)}>Edit</button>
			    </div>
			  </div>
			</div>
			<div className='profile_desc col 2'>
			 	<p>someThere helps you match your current neighborhood with other similar neighborhoods.
			  		You can also customize your own preferences.</p> 
				<p>Select from the options below:</p>
			 	<button className="btn">Current Neighborhood</button>
			 	<button className='btn blue-grey'><Link to={'/preferenceSelect'}>Set Preferences</Link></button>
			</div>
		</div>
		
		)
	}

	edit() {
		return (
		  <div key={this.state.profile.id} className="col s12 m6">
		    <div className="card grey lighten-3">
		      <div className="card-content">
		        <form onSubmit={this.handleSubmit.bind(this)}>
		          <input ref="currentCity" placeholder="Current City" defaultValue={this.state.profile.current_city} />
		          <input ref="currentState" placeholder="Current State" defaultValue={this.state.profile.current_state} />
		          <input ref="currentNeighborhood" placeholder="Current Neighborhood" defaultValue={this.state.profile.current_neighborhood} />
		          <input ref="currentZipcode" placeholder="Current Zipcode" defaultValue={this.state.profile.current_zipcode} />
		          <input ref="age" placeholder="Age" defaultValue={this.state.profile.age} />
		          <button type="submit" className="btn">Update</button>
		          <button type="button" className="btn blue-grey" onClick={this.toggleEdit.bind(this)}>Cancel</button>
		        </form>
		      </div>
		    </div>
		  </div>
		)
	}

	render() {
		if (this.state.profile) {
			if (this.state.edit) {
				return this.edit();
			} else {
				return this.show(); 
			} 
		} else {
			return this.newProfile();	
		}
	}


}	

	const mapStateToProps = (state) => {
		return { id: state.auth.id };
	}

export default connect(mapStateToProps)(Profile);