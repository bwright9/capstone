import React from 'react';
import { Link } from 'react-router';

class preferenceSelect extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
		<div className="preference_select">
			<div className="container">
				<div className="row">
					<div className="center">
		      	<div className="col s12 m10">
		         	<div className="card white z-depth-2">
		           	<div className="card-content black-text">
		             	<span className="card-title">Moving or Visiting?</span>
		             	<p>Whether youre moving or traveling to a new location, 
		             	someThere helps you match neighborhoods according to what is most important to you.</p>
		           		<div className="card-action">
		             		<button className="btn z-depth-2"><Link to={'/movePreferences'}><span className="white-text">Move</span></Link></button>  |  <button className="btn blue-grey z-depth-2">
		             		<Link to={'/travelPreferences'}><span className="white-text ">Visit</span></Link></button>
		           		</div>
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