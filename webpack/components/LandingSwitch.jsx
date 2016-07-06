import React from 'react';
import { connect } from 'react-redux';
import Landing from '../components/Landing';
import Discover from '../components/Discover';


class LandingSwitch extends React.Component {
	constructor(props) {
		super(props);
	}


	switch() {
		if(this.props.auth.isAuthenticated)
			return(<Discover />)
		else 
			return(<Landing />)
	}


	render() {
		return(
			<div>
				{ this.switch() }
			</div>
		)
	}

}
const mapStateToProps = (state) => {
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps)(LandingSwitch);