import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { profileUpdate } from './auth/actions';

class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = { edit: false }
		this.addProfile = this.addProfile.bind(this);
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
	  }).done( profile => {
	  	this.props.dispatch(profileUpdate(profile));
	    // this.setState({ profile });
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
	  	this.props.dispatch(profileUpdate(profile));
		})
		this.refs.addProfileForm.reset()
	}

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
			        <p>Current City: {this.props.profile.current_city}</p>
			        <p>Current State: {this.props.profile.current_state}</p>
			        <p>Current Neighborhood: {this.props.profile.current_neighborhood}</p>
			        <p>Current Zipcode: {this.props.profile.current_zipcode}</p>
			        <p>Age: {this.props.profile.age}</p>
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
		  <div key={this.props.profile.id} className="col s12 m6">
		    <div className="card grey lighten-3">
		      <div className="card-content">
		        <form onSubmit={this.handleSubmit.bind(this)}>
		          <input ref="currentCity" placeholder="Current City" defaultValue={this.props.profile.current_city} />
		          <input ref="currentState" placeholder="Current State" defaultValue={this.props.profile.current_state} />
		          <input ref="currentNeighborhood" placeholder="Current Neighborhood" defaultValue={this.props.profile.current_neighborhood} />
		          <input ref="currentZipcode" placeholder="Current Zipcode" defaultValue={this.props.profile.current_zipcode} />
		          <input ref="age" placeholder="Age" defaultValue={this.props.profile.age} />
		          <button type="submit" className="btn">Update</button>
		          <button type="button" className="btn blue-grey" onClick={this.toggleEdit.bind(this)}>Cancel</button>
		        </form>
		      </div>
		    </div>
		  </div>
		)
	}

	render() {
		if (this.props.profile) {
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
	return { id: state.auth.id, 
					 profile: state.profile
				 };
}

export default connect(mapStateToProps)(Profile);
