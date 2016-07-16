import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<footer className='center page-footer z-depth-1'>
	<div className="footer-copyright">
	    <div className="container footer">
      		<Link to="/about" className='white-links'> about </Link>|
      		<Link to="/contact" className='white-links'> contact </Link>|
      		<a href="https://github.com/bwright9/capstone" className='white-links' target='_blank'> github</a>
	    </div>
	  </div>
	</footer>
)

export default Footer;