import React from 'react';
import { Link } from 'react-router';
		 
	const Austin = () => (
		<div>
			<div className="textimg">
	  		<img style={{width: '100%', height: '480', opacity: '0.7'}} src="assets/neighborhoods/hyde_park_primary.jpg" />
	   		  <h1 className="title-sub" style={{ top: '75', marginLeft: '400' }}>Hyde Park</h1>
	   		  <h5 className="title-sub" style={{ top: '175', marginLeft: '200'}}>Small-town charm with trendy coffee shops and local bakeries.</h5>
	   	</div>
	   				<div className="section grey lighten-2">
	   					<div className='row'>
	   		   		 <div className="container">
	   		      		<div className='col s5 offset-s1'>LIVIBILITY: <span className="austin-bold"> 83</span></div>
	   		      		<div className='col s5 offset-s1'>COST OF LIVING: <span className="austin-bold"> D</span></div>
	   		      		<div className='col s5 offset-s1'>MEDIAN AGE: <span className="austin-bold"> 30</span></div>
	   		      		<div className='col s5 offset-s1'>CRIME: <span className="austin-bold"> B+</span></div>
	   		      		<div className='col s5 offset-s1'>EDUCATION: <span className="austin-bold"> A+</span></div>
	   		      		<div className='col s5 offset-s1'>WALKSCORE: <span className="austin-bold"> 75</span></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Hotels-g30196-zfn21431-Austin_Texas-Hotels.html" target="_blank">Accomodations</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Restaurants-g30196-zfn21431-Austin_Texas.htmlRestaurants" target="_blank">Restaurants</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g30196-Activities-Austin_Texas.html" target="_blank">Entertainment</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g30196-Activities-c26-Austin_Texas.html" target="_blank">Shopping</a></div>
	   		      		<img className='austin_map' src="assets/hyde_park_map.jpg" />
	   		    		</div>
	   		   		</div>
	   		  	</div>
	   				<img className="austin" style={{width: '100%', height: '450', opacity: '0.7' }} src="assets/neighborhoods/hyde_park_secondary.jpg" />
	  				</div>
	)

export default Austin;
