import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.convertCurrentState = this.convertCurrentState.bind(this);
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
    return geoStates[this.props.currentState];
  }

  cityStateDisplay() {
    if(this.props.currentCity && this.props.currentState) {
      let imageState = this.convertCurrentState();
      return(
        <div>
          <li>
            <div className="center">
              <img className="home-state" src={`assets/states/${imageState}.png`} />
            </div>
          </li>
          <li>
            <p className="center" id="city">Current City: {this.props.currentCity}, {this.props.currentState}</p>
          </li>
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/profile'>Create Profile</Link>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC47oD2Sle3KuVFzOpPzDeQEnPRuR_qwOE?libraries=places"></script>
        <ul id="slide-out" className="side-nav fixed">
          <li className="search">
            <div className="search-wrapper focused">
              <input id="search" type="search" placeholder="Search" />
            </div>
          </li>
          <li><Link to="/move">Move</Link></li>
          <li><Link to="/visit">Visit</Link></li>
          <li><Link to="/discover">Discover</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          { this.cityStateDisplay() }
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentCity: state.profile.current_city, currentState: state.profile.current_state }
}

export default connect(mapStateToProps)(Sidenav);
