import React from 'react';
import { Link } from 'react-router';
 
// when sidenav mounts
// make ajax call to get user profile data 
// on a component will mount


class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCity: '', abbrevState: '', currentState: '' };
    this.convertCurrentState = this.convertCurrentState.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: "/api/user_profile",
      type: 'GET',
      dataType: 'JSON'
    }).done( profile => { 
      this.setState({ currentCity: profile.profile.current_city, abbrevState: profile.profile.current_state });
      this.convertCurrentState();
    }).fail( data => {
      console.log(data);
    })
  }

  convertCurrentState() {
    let geoStates = {
      "AK": "alaska", 
      "AL": "alabama", 
      "AR": "arkansas", 
      "AZ": "arizona", 
      "CA": "california", 
      "CO": "colorado", 
      "CT": "connecticut", 
      "DC": "dc", 
      "DE": "delaware", 
      "FL": "florida", 
      "GA": "georgia", 
      "HI": "hawaii", 
      "IA": "iowa", 
      "ID": "idaho", 
      "IL": "illinois", 
      "IN": "indiana", 
      "KS": "kansas", 
      "KY": "kentucky", 
      "LA": "louisiana", 
      "MA": "massachusetts", 
      "MD": "maryland", 
      "ME": "maine", 
      "MI": "michigan", 
      "MN": "minnesota", 
      "MO": "missouri", 
      "MS": "mississippi", 
      "MT": "montana", 
      "NC": "northcarolina", 
      "ND": "northdakota", 
      "NE": "nebraska", 
      "NH": "newhampshire", 
      "NJ": "newjersey", 
      "NM": "newmexico", 
      "NV": "nevada", 
      "NY": "newyork", 
      "OH": "ohio", 
      "OK": "oklahoma", 
      "OR": "oregon", 
      "PA": "pennsylvania", 
      "RI": "rhodeisland", 
      "SC": "southcarolina", 
      "SD": "southdakota", 
      "TN": "tennessee", 
      "TX": "texas", 
      "UT": "utah", 
      "VA": "virginia", 
      "VT": "vermont", 
      "WA": "washington", 
      "WI": "wisconsin", 
      "WV": "westvirginia", 
      "WY": "wyoming"
    }
    this.setState({ currentState: geoStates[this.state.abbrevState] });
  }

  render() {
    return(
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li className="search">
            <div className="search-wrapper focused">
              <input id="search" placeholder="Search" />
            </div>
          </li>
          <li><Link to="/move">Move</Link></li>
          <li><Link to="/visit">Visit</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li>
            <div className="center">
              <img className="home-state" src={`assets/states/${this.state.currentState}.png`} />
            </div>
          </li>
          <li>
            <p className="center" id="city">Current City: {this.state.currentCity}, {this.state.abbrevState}</p>
          </li>
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </div>
    )
  }
}

export default Sidenav;
