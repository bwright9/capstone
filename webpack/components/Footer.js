import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<footer className='page-footer z-depth-1'>
	<div className="footer-copyright center">
	    <div className="container footer">
      		<Link to="/about" className='white-links'> about </Link>|
      		<Link to="/contact" className='white-links'> contact </Link>|
      		<a href="https://github.com/bwright9/capstone" className='white-links's> github</a>
	    </div>
	  </div>
	</footer>
)

export default Footer;