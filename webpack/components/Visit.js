import React from 'react';
import { Link } from 'react-router';
import Walkscore from './Walkscore';

class Visit extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div className="center">
				<h1>Visit Component</h1>
				<Walkscore />
			</div>

		)
	}
}

export default Visit;