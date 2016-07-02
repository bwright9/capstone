import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<footer className='page-footer'>
	<div className="footer-copyright center">
	    <div className="container footer">
      	<Link to="/about" className="white-text">About </Link>|
      	<Link to="/contact" className="white-text"> Contact </Link>|
      	<a href="https://github.com/bwright9/capstone" className="white-text"> GitHub</a>
	    </div>
	  </div>
	</footer>
)

export default Footer;