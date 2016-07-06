import React from 'react';
<<<<<<< 69ea1ddff973ea759e69667d30e9066ded2770bc
import { Link } from 'react-router';
=======
>>>>>>> landing page

class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h2 className='center'>About the Team:</h2> 
				<div className="center">
					<div className='row'>
						<div className='team-member col m2'>
							<img src='assets/balcony.jpg' />
							<h3 className='center'>Anamika Anand</h3>
      				<a href="https://www.linkedin.com/in/aanamikanand">LinkedIn</a>
						</div>
						<div className='team-member col m2'>
							<img src='assets/balcony.jpg' />
							<h3 className='center'>Tom Lynam</h3>
      				<a href="https://www.linkedin.com/in/tomlynam">LinkedIn</a>
						</div>
						<div className='team-member col m2'>
							<img src='assets/balcony.jpg' />
							<h3 className='center'>Rachel Prows</h3>
      				<a href="https://www.linkedin.com/in/rachelprows">LinkedIn</a>
						</div>
						<div className='team-member col m2'>
							<img src='assets/balcony.jpg' />
							<h3 className='center'>Brant Wright</h3>
      				<a href="https://www.linkedin.com/in/bwright9">LinkedIn</a>
						</div>
					</div>     
				</div>
			</div>
		)
	}
}

export default Contact;