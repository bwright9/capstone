import React from 'react';
import { Link } from 'react-router';

class Austin extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
			<div className="center">
				<h1>Austin</h1>
				<img className='austin' src="assets/austin.jpg" />
			</div>

		)
	}
}

export default Austin;