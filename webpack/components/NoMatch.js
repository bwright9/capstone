import React from 'react';
import { Link } from 'react-router';

const NoMatch = () => (
  <div className="container">
  	<div>
  		<h4 className="red-text">OOPS.. Page Not Found!!</h4>
  		<p> Click <Link to='/'>Back</Link> to visit the Homepage.</p>
  	</div>

  </div>
)

export default NoMatch;
