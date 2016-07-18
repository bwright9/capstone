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
      				<a href="https://www.linkedin.com/in/aanamikanand" target="_blank"><img src='/assets/linkedin-icon.png'className='linkedin' /></a>
      				<a href="https://github.com/aanamikanand" target="_blank"><img src='/assets/github.png' className='github' /></a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/Tom.jpg' />
							<h4 className='center'>Tom Lynam</h4>
							<p>Born in Alexandria, VA, a former Yale oarsman and Venture for America alum. Skier, runner, pop culture omnivore.</p>
      				<a href="https://www.linkedin.com/in/tomlynam" target="_blank"><img src='/assets/linkedin-icon.png' className='linkedin'/></a>
      				<a href="https://github.com/tomlynam" target="_blank"><img src='/assets/github.png' className='github'/></a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/Rachel.jpg' />
							<h4 className='center'>Rachel Prows</h4>
							<p>A born and raised Chicagoan, with an inner-Seattlite, avid reader, dog enthusiast, and pop-culture junky with a chronic case of wanderlust.  </p>
      				<a href="https://www.linkedin.com/in/rachelprows" target="_blank"><img src='/assets/linkedin-icon.png' className='linkedin' /></a>
      				<a href="https://github.com/rkprows" target="_blank"><img src='/assets/github.png' className='github'/></a>
						</div>
						<div className='col m3 center'>
							<img className='team' src='assets/team/brant.jpg' />
							<h4 className='center'>Brant Wright</h4>
      				<a href="https://www.linkedin.com/in/bwright9" target="_blank"><img src='/assets/linkedin-icon.png' className='linkedin' /></a>
      				<a href="https://github.com/bwright9" target="_blank"><img src='/assets/github.png' className='github'/></a>
						</div>
					</div>     
			</div>
		)
	}
}

export default Contact;