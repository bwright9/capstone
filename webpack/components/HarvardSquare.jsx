import React from 'react';
import { Link } from 'react-router';
		 
	const HarvardSquare = () => (
		<div>
			<div className="textimg">
	  		<img style={{width: '100%', height: '480', opacity: '0.7'}} src="assets/neighborhoods/harvard_square_secondary.jpg" />
	   		  <h1 className="title-sub" style={{ top: '150', marginLeft: '350' }}>Harvard Square</h1>
	   		  <h5 className="title-sub" style={{ top: '250', marginLeft: '420'}}>An art seeker&apos;s paradise.</h5>
	   	</div>
	   				<div className="section grey lighten-2">
	   					<div className='row'>
	   		   		 <div className="container">
	   		      		<div className='col s5 offset-s1'>LIVIBILITY: <span className="austin-bold"> 83</span></div>
	   		      		<div className='col s5 offset-s1'>COST OF LIVING: <span className="austin-bold"> F</span></div>
	   		      		<div className='col s5 offset-s1'>MEDIAN AGE: <span className="austin-bold"> 36</span></div>
	   		      		<div className='col s5 offset-s1'>CRIME: <span className="austin-bold"> C</span></div>
	   		      		<div className='col s5 offset-s1'>EDUCATION: <span className="austin-bold"> A+</span></div>
	   		      		<div className='col s5 offset-s1'>WALKSCORE: <span className="austin-bold"> 88</span></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/HotelsNear-g60890-d102693-Harvard_Square-Cambridge_Massachusetts.html" target="_blank">Accomodations</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Restaurants-g60890-Cambridge_Massachusetts.html" target="_blank">Restaurants</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g60890-Activities-Cambridge_Massachusetts.html" target="_blank">Entertainment</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g60890-Activities-c26-Cambridge_Massachusetts.html" target="_blank">Shopping</a></div>
	   		      		<img className='austin_map' src="assets/neighborhoods/harvard_square_map.jpg" />
	   		    		</div>
	   		   		</div>
	   		  	</div>
	   				<img className="austin" style={{width: '100%', height: '450', opacity: '0.7' }} src="assets/neighborhoods/harvard_square_primary.jpg" />
	  				</div>
	)



export default HarvardSquare;