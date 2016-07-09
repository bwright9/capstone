import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='team-members'>
				<h2 className='center'>About the Team:</h2> 
					<div className='row team-members'>
						<div className='col m3 center'>
							<img className='team' src='assets/team/anamika.jpg' />
							<h4>Anamika Anand</h4>
      				<a href="https://www.linkedin.com/in/aanamikanand" target="_blank">LinkedIn</a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/Tom.jpg' />
							<h4 className='center'>Tom Lynam</h4>
      				<a href="https://www.linkedin.com/in/tomlynam" target="_blank">LinkedIn</a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/Rachel.jpg' />
							<h4 className='center'>Rachel Prows</h4>
      				<a href="https://www.linkedin.com/in/rachelprows" target="_blank">LinkedIn</a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/brant.jpg' />
							<h4 className='center'>Brant Wright</h4>
      				<a href="https://www.linkedin.com/in/bwright9" target="_blank">LinkedIn</a>
						</div>
					</div>     
			</div>
		)
	}
}

export default Contact;