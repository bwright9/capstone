import React from 'react';
import { Link } from 'react-router';

class preferenceSelect extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
		<div className="preference_select">
			<div className="row">
				<div className="container">
					<div className="center">
		      	<div className="col s12 m9">
		         	<div className="card white z-depth-2">
		           	<div className="card-content black-text">
		             	<span className="card-title">Moving or Visiting?</span>
		             	<p className='pref_desc'>Whether you&rsquo;re moving or traveling to a new location, 
		             	someThere helps you match neighborhoods according to what is most important to you.</p>
		             		<button className="btn z-depth-2"><Link to={'/movePreferences'}><div className="white-text">Move</div></Link></button>  |  <button className="btn blue-grey z-depth-2"><Link to={'/travelPreferences'}><div className="white-text">Visit</div></Link></button>
		           		</div>
		         	</div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
		)
	}
}

export default preferenceSelect;