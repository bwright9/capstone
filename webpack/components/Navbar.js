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

	componentDidUpdate() {
		$('.dropdown-button').dropdown();
	}

	authLink() {
		if(this.props.auth)
			return(
				[<li key="profile"><Link className='sm-spaced' to="/profile">profile</Link></li>,
				<li key="logout"><a className='sm-spaced'href='#' onClick={this.logout.bind(this)}>logout</a></li>]
			)
		else {
			return( 
				[<li key="profile"><Link to='login' className='sm-spaced'>login</Link></li>, 
				<li key="logout"><Link to='signup' className='sm-spaced'>sign up</Link></li>]
			)
		}
	}

	dropDownButton() {
		if(this.props.auth) {
			return(<li><a className="dropdown-button sm-spaced" href="#!" data-activates="dropdown1">{`${this.props.firstName} ${this.props.lastName}`}<i className="material-icons right">arrow_drop_down</i></a></li>)
		} else {
			return([<li key="signup"><Link to='signup' className='sm-spaced'>sign up</Link></li>,
				      <li key="login"><Link to='login' className='sm-spaced'>login</Link></li>])
		}
	}

	render() {
		return(
			<div>
				<ul id="dropdown1" className="dropdown-content">
				  { this.authLink() }
				  <li className="divider"></li>
				</ul>
				<div className='navbar-fixed z-depth-1'>
					<nav>
					  <div className="nav-wrapper">
					   <Link to='/' className='logo'>someThere</Link>
					    <ul className="right hide-on-med-and-down">
					      { this.dropDownButton() }
					    </ul>
					  </div>
					</nav>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		//if login with auth
		firstName: state.auth.firstName,
		lastName: state.auth.lastName 
	}
}

export default connect(mapStateToProps)(Navbar);