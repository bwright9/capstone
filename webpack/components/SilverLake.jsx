import React from 'react';
import { Link } from 'react-router';
		 
	const SilverLake = () => (
		<div>
			<div className="textimg">
	  		<img className="austin" style={{width: '100%', height: '480', opacity: '0.7'}} src="assets/neighborhoods/silver_lake_main.jpg" />
	   		  <h1 className="title-sub" style={{ top: '75', marginLeft: '400' }}>Silver Lake</h1>
	   		  <h5 className="title-sub" style={{ top: '175', marginLeft: '300'}}>Trendy, hip vibes with a Rock-n-Roll attidude.</h5>
	   	</div>
	   				<div className="section grey lighten-2">
	   					<div className='row'>
	   		   		 <div className="container">
	   		      		<div className='col s5 offset-s1'>LIVIBILITY: <span className="austin-bold"> 80</span></div>
	   		      		<div className='col s5 offset-s1'>COST OF LIVING: <span className="austin-bold"> F</span></div>
	   		      		<div className='col s5 offset-s1'>MEDIAN AGE: <span className="austin-bold"> 38</span></div>
	   		      		<div className='col s5 offset-s1'>CRIME: <span className="austin-bold"> B</span></div>
	   		      		<div className='col s5 offset-s1'>EDUCATION: <span className="austin-bold"> B</span></div>
	   		      		<div className='col s5 offset-s1'>WALKSCORE: <span className="austin-bold"> 76</span></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Hotels-g32655-Los_Angeles_California-Hotels.html" target="_blank">Accomodations</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Restaurants-g32655-Los_Angeles_California.html" target="_blank">Restaurants</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g32655-Activities-Los_Angeles_California.html" target="_blank">Entertainment</a></div>
	   		      		<div className='col s5 offset-s1'><a href="https://www.tripadvisor.com/Attractions-g32655-Activities-c26-Los_Angeles_California.html" target="_blank">Shopping</a></div>
	   		      		<img className='silver_lake_map' src="assets/silver_lake_map.png" />
	   		    		</div>
	   		   		</div>
	   		  	</div>
	   					<img className="austin" style={{width: '100%', height: '450', opacity: '0.7' }} src="assets/neighborhoods/silver_lake_secondary.jpg" />
	  				</div>
	)



export default SilverLake;