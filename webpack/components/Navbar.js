import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	logout(e) {
		e.preventDefault();
		this.props.dispatch(handleLogout(this.props.history));
	}

	authLink() {
		if(this.props.auth)
			return(
				<li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>
			)
		else {
			return(
				<li><Link to='login' className='btn'>Login</Link></li>
			)
		}
	}

	render() {
		return(
			<nav>
				<div className="nav-wrapper">
				  <Link to="/" className="brand-logo">s o m e T h e r e</Link>
				    <ul id="nav-mobile" className="right hide-on-med-and-down">
				      { this.authLink() }
				    </ul>
				</div>
			</nav>
		)
	}

}

export default connect()(Navbar);