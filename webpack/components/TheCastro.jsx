import React from 'react';
import { Link } from 'react-router';
		 
	const TheCastro = () => (
		<div>
			<div className="textimg">
	  		<img className="austin" style={{width: '100%', height: '480', opacity: '0.8'}} src="assets/neighborhoods/castro.jpg" />
	   		  <h1 className="title-sub" style={{ top: '200', marginLeft: '400' }}>The Castro</h1>
	   		  <h5 className="title-sub" style={{ top: '300', marginLeft: '220'}}>Flamboyant, vibrant culture with a repuation for rainbow flags.</h5>
	   	</div>
	   				<div className="section grey lighten-2">
	   					<div className='row'>
	   		   		 <div className="container">
	   		      		<div className='col s5 offset-s1'>LIVIBILITY: <span className="austin-bold"> 82</span></div>
	   		      		<div className='col s5 offset-s1'>COST OF LIVING: <span className="austin-bold"> F</span></div>
	   		      		<div className='col s5 offset-s1'>MEDIAN AGE: <span className="austin-bold"> 41</span></div>
	   		      		<div className='col s5 offset-s1'>CRIME: <span className="austin-bold"> C+</span></div>
	   		      		<div className='col s5 offset-s1'>EDUCATION: <span className="austin-bold"> A+</span></div>
	   		      		<div className='col s5 offset-s1'>WALKSCORE: <span className="austin-bold"> 91</span></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Hotels-g60713-San_Francisco_California-Hotels.html" target="_blank">Accomodations</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Restaurants-g60713-San_Francisco_California.html" target="_blank">Restaurants</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g60713-Activities-San_Francisco_California.html" target="_blank">Entertainment</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g60713-Activities-c26-San_Francisco_California.html" target="_blank">Shopping</a></div>
	   		      		<img className='austin_map' src="assets/castro_map.jpg" />
	   		    		</div>
	   		   		</div>
	   		  	</div>
	   					<img style={{width: '100%', height: '450', opacity: '0.7' }} src="assets/neighborhoods/castro_main.jpg" />
	  				</div>
	)



export default TheCastro;