import React from 'react';
import { loggedIn } from './auth/actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';



class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.authFooter = this.authFooter.bind(this);
  }

  authFooter() {
    if(this.props.auth.isAuthenticated) {
      return(
        <footer className='page-footer z-depth-1'>
        <div className="footer-copyright">
          <div className="container footer logged-footer">
            <Link to="/about" className='white-links sm-spaced'> about </Link>|
            <Link to="/contact" className='white-links sm-spaced'> contact </Link>|
            <a href="https://github.com/bwright9/capstone" className='white-links sm-spaced' target='_blank'> github</a>
          </div>
        </div>
        </footer>
      ) 
    } else {
      return(
        <footer className='page-footer z-depth-1 center'>
        <div className="footer-copyright">
          <div className="container footer">
            <Link to="/about" className='white-links sm-spaced'> about </Link>|
            <Link to="/contact" className='white-links sm-spaced'> contact </Link>|
            <a href="https://github.com/bwright9/capstone" className='white-links sm-spaced' target='_blank'> github</a>
          </div>
        </div>
        </footer>
      )
    }  
  }

  render() {
    return(
      <div>
        { this.authFooter() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Footer);