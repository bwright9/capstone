import React from 'react';
import { connect } from 'react-redux';
import { handleLogin, handleFacebookLogin } from './actions';
// import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {
	constructor(props) {
		super(props);
		const redirectLocation = '/'
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { error: false, redirectRoute: redirectLocation }
	}

	responseFacebook = (auth) => {
		this.props.dispatch(handleFacebookLogin(auth, this.props.history))
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		// TODO: dispatch login action
		this.props.dispatch(handleLogin(email, password, this.state.redirectRoute, this.props.history));
	}

	render() {
		return(
			<div className='container'>
				<h3>Login</h3>
				<form onSubmit={ this.handleSubmit.bind(this) } >
					<input type='email' placeholder='Email' ref='email' required />
					<input type='password' placeholder='Password' ref='password' required />
					<input type='submit' className='btn' value='Login' />
 				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { auth: state.auth.api_key }
}

export default connect()(Login);