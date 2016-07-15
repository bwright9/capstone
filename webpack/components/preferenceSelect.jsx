import React from 'react';
import { Link } from 'react-router';

class preferenceSelect extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
		<div className="col s3">
		  <div className='preference_desc'><p>Move or Visit?</p> 
		 		<button className="btn z-depth-2"><Link to={'/movePreferences'}>Move</Link></button>
		 		<button className="btn blue-grey z-depth-2"><Link to={'/travelPreferences'}>Visit</Link></button>
		 		<button className='btn grey z-depth-2'><Link to={'/profile'}>Back</Link></button>
			</div>
		</div>

		)
	}
}

export default preferenceSelect;