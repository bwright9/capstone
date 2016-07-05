import React from 'react';
import { connect } from 'react-redux';
import { handleSignup } from './actions';

class Signup extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		const firstName = this.refs.firstName.value;
		const lastName = this.refs.lastName.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		this.props.dispatch(handleSignup(email, password, firstName, lastName, this.props.history));
	}

	render() {
		return(
			<div>
				<h3>Sign Up</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='text' placeholder='First Name' ref='firstName' required />
					<input type='text' placeholder='Last Name' ref='lastName' required />
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' required />
					<input type='submit' className='btn' value='Sign Up' />
 				</form>
			</div>
		);
	}
}

export default connect()(Signup);