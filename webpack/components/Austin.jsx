import React from 'react';
import { Link } from 'react-router';
import { Parallax } from 'react-parallax';
		 
	const Austin = () => (
		<div>
	  	<Parallax bgImage="https://a1.muscache.com/locations/uploads/photo/image/110/0_4200_0_2352_one_USA_Austin_HydePark_002_NM.jpg" strength={200}>
	   		<div style={{width: '100vw', height: '60vh', marginTop: 1, }}>
	   		  <br />
	   		  <br />
	   		  <h1 className="center white-text">Hyde Park</h1>
	   		  <div className="row">
	   		    <h5 className="center white-text">Small-town charm with trendy coffee shops and local bakeries.</h5>
	   		  </div>
	   		</div>
	   	</Parallax>
	   		<div className="section grey lighten-2">
	   			<div className='row'>
	   		    <div className="container">
	   		      <div className='col s6'>Livibility: 83</div>
	   		      <div className='col s6'>Cost of Living: D</div>
	   		      <div className='col s6'>Median Age: 30</div>
	   		      <div className='col s6'>Crime: B+</div>
	   		      <div className='col s6'>Education: A+</div>
	   		      <div className='col s6'>Walkscore: 75</div>
	   		      <div className='col s6'><a href="https://www.tripadvisor.com/Hotels-g30196-zfn21431-Austin_Texas-Hotels.html" target="_blank">Accomodations</a></div>
	   		      <div className='col s6'><a href="https://www.tripadvisor.com/Restaurants-g30196-zfn21431-Austin_Texas.htmlRestaurants" target="_blank">Restaurants</a></div>
	   		      
	   		      <img className='austin_map' src="assets/Austin.jpg" />
	   		    </div>
	   		   </div>
	   		  </div>
	   		<Parallax bgImage="https://a0.muscache.com/locations/uploads/photo/image/19/0_4200_0_2800_one_USA_Austin_HydePark_006_NM.jpg" strength={200}>
	   		        <div style={{width: 800, height: 425 }}></div>
	   		      </Parallax>
	  </div>
	)



export default Austin;