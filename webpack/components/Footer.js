import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<footer className='page-footer'>
	<div className="footer-copyright center">
	    <div className="container footer">
      	<Link to="/about">About</Link>|
      	<Link to="/contact">Contact</Link>|
      	<a href="https://github.com/bwright9/capstone">GitHub</a>
	    </div>
	  </div>
	</footer>
)

export default Footer;