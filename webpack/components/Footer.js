import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
	<footer className='page-footer'>
	<div className="footer-copyright center">
	    <div className="container footer">
      		<Link to="/about">about</Link>|
      		<Link to="/contact">contact</Link>|
      		<a href="https://github.com/bwright9/capstone">github</a>
	    </div>
	  </div>
	</footer>
)

export default Footer;