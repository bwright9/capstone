import React from 'react';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<h2 className='about-title spaced'>about someThere</h2>
				<div className="row">
					<div className='col s12 m4'>
						<img className='stein' src='/assets/stein.jpg' />
					</div>
					<div className='about col s12 m8'>
						<p>
							Nearly 45 years after moving away, Gertrude Stein returned to her native Oakland only to discover that the neighborhood she grew up in had been replaced by an industrial park. Describing this experience, Stein wrote “There is no there there”. Her neighborhood was no longer a representation of what it had once meant to her. It no longer embodied her idea of home.
						</p>
						<p>
							Many since have had the experience of moving to a new place and longing for what they left behind. SomeThere bridges that gap, helping you identify what home means to you. That may be tucked away in a quiet corner and a short distance from a park. Or perhaps it is on the busiest of streets, where live music can easily be found, and the smells of nearby restaurants come wafting through your windows. Whether it is for a day or for years to come, we hope you find some <i>there</i>, there. 
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;