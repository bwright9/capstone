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
				<li><a className='logo-header'href='#' onClick={this.logout.bind(this)}>Logout</a></li>
			)
		else {
			return(
				<li><Link to='login' className='login'>login</Link></li>
			)
		}
	}

	render() {
		return(
			<div className='navbar-fixed'>
				<nav>
					<div className="nav-wrapper">
					  <Link to="/" className="brand-logo">someThere</Link>
					    <ul id="nav-mobile" className="right hide-on-med-and-down">
					      { this.authLink() }
					    </ul>
					</div>
				</nav>
			</div>
		)
	}

}

export default connect()(Navbar);