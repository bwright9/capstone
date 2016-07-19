import React from 'react';
import { Link } from 'react-router';


const NoMatch = () => (
  <div>    
    <h1 className='center'>Are you lost? </h1>
    <div className="container">
      <img src="/assets/lost.gif" alt='tag' className='lost'/>
      <br />
      <Link to='/' className='btn back'>Go Back</Link>
    </div>
  </div>
)

export default NoMatch;
