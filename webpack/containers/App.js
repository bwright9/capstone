import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loggedIn, logout, profileUpdate } from '../components/auth/actions';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideNav = this.sideNav.bind(this);
  }

  componentWillMount() {
    const userId = localStorage.getItem('userId');
    const apiKey = localStorage.getItem('apiKey');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if(!this.props.auth && userId) {
      this.props.dispatch(loggedIn(userId, apiKey, firstName, lastName))
      $.ajax({
        url:`/api/profiles/${userId}`,
        type: 'GET',
        dataType: 'JSON',
      }).done( profile => {
        profile = profile.profile 
        this.props.dispatch( profileUpdate(profile) )
      }).fail( data => {
        alert('Something went wrong')
      });
    } else
        this.props.dispatch(logout())        
  }

  sideNav() {
    if(this.props.auth)
      return(
        <Sidenav />
      )
  }

  render() {
    if(!this.props.auth) {
      return (
        <MuiThemeProvider>
          <div>
            <Navbar auth={this.props.auth} history={this.props.history} />
              { this.props.children }
            <Footer />
          </div>
        </MuiThemeProvider>

      )
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Navbar auth={this.props.auth} history={this.props.history} />
            <div className='wrapper'>
              {this.sideNav()}
              { this.props.children }
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      )
    }
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
