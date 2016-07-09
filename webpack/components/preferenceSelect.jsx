import React from 'react';
import { Link } from 'react-router';

class preferenceSelect extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
		  <div className='preference_desc'><p>Move or Visit?</p> 
		 			<button className="btn"><Link to={'/movePreferences'}>Move</Link></button>
		 			<button className="btn blue-grey"><Link to={'/travelPreferences'}>Visit</Link></button>
		 			<button className='btn grey'><Link to={'/profile'}>Back</Link></button>
				</div>

		)
	}
}

export default preferenceSelect;