import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {loggedIn, logout } from '../components/auth/actions';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideNav = this.sideNav.bind(this);
  }

  componentWillMount() {
  const userId = localStorage.getItem('userId');
  const apiKey = localStorage.getItem('apiKey');
  if(!this.props.auth && userId)
    this.props.dispatch(loggedIn(userId, apiKey))
  else
    this.props.dispatch(logout())        
  }

  sideNav() {
    if(this.props.auth)
      return(
        <Sidenav />
      )
  }

  render() {
    return (
      <div>
        <Navbar auth={this.props.auth} history={this.props.history} />
        <div className='wrapper'>
          { this.sideNav() }
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if(state.auth) {
    return {
      auth: state.auth.isAuthenticated
    }
  } else {
    return state;
  }
}

export default connect(mapStateToProps)(App);
