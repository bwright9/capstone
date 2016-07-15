import React from 'react';
import { Link } from 'react-router';
import { handleLogout, loggedIn } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		//if user id and api key
		//check for empty firstname lastame and set as props
		if (localStorage.apiKey && localStorage.userId) {
			if (this.props.firstName === undefined && this.props.lastName === undefined) {
				this.props.dispatch(loggedIn(localStorage.userId, localStorage.apiKey, localStorage.firstName, localStorage.lastName))
			}
		}
	}

	logout(e) {
		e.preventDefault();
		this.props.dispatch(handleLogout(this.props.history));
	}



	authLink() {
		if(this.props.auth)
			return(
					[<li><Link to="/profile">Profile</Link></li>,
					<li><a className='logo-header'href='#' onClick={this.logout.bind(this)}>logout</a></li>]
			)
		else {
			return( 
				[<li><Link to='login' className='login'>login</Link></li>, 
				<li><Link to='signup'>Sign Up</Link></li>]
			)
		}
	}

	dropDownButton() {
		if(this.props.auth) {
			return(<li><a className="dropdown-button" href="#!" data-activates="dropdown1">{`${this.props.firstName} ${this.props.lastName}`}<i className="material-icons right"></i></a></li>)
		} else {
			return(<li><a className="dropdown-button" href="#!" data-activates="dropdown1">Menu<i className="material-icons right"></i></a></li>)
		}
	}

	render() {
		return(
			<div>
				<ul id="dropdown1" className="dropdown-content">
				  { this.authLink() }
				  <li className="divider"></li>
				</ul>
				<nav>
				  <div className="nav-wrapper">
				    <Link to='/' className='brand-logo'>someThere</Link>
				    <ul className="right hide-on-med-and-down">
				      { this.dropDownButton() }
				    </ul>
				  </div>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		//if login with auth
		firstName: state.auth.firstName,
		lastName: state.auth.lastName 
		// if login with facebook
	}
}

export default connect(mapStateToProps)(Navbar);
