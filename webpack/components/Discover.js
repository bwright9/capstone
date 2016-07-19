import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import CompareCities from './CompareCities';
import CompareSalary from './CompareSalary';
import ExploreNeighborhoods from './exploreNeighborhoods';
import { connect } from 'react-redux';
 
class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stateSelect: 'utah', salary: 35000, afterTaxCurrent: null, afterTaxNew: null, capital: "Salt Lake City" };
		this.convertCurrentState = this.convertCurrentState.bind(this);
    this.showCurrentState = this.showCurrentState.bind(this);
    this.showGeoState = this.showGeoState.bind(this);
		this.calculateTax = this.calculateTax.bind(this);
    this.findStateCapitals = this.findStateCapitals.bind(this);
	}

	componentWillMount() {
    let firstSalary = this.state.salary * 0.85;
    this.calculateTax();   
  }
  
  componentDidMount() {
    $('.collapsible').collapsible();
    $('select').material_select();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (!this.state.afterTaxCurrent) {
      this.calculateTax();   
    } 
  }
 
	handleSelect(event, index, value) {
    this.setState({stateSelect: value, capital: this.findStateCapitals(value)}, function afterStateUpdated() {
 	    this.calculateTax();    	
    });
  }

	handleFirstSlider(event, value) {
    this.setState({salary: value}, function afterNumberChanges() {
 	    this.calculateTax();    	
    });
  }

  findStateCapitals(searchState) {
    let capital = {
      "alabama": "Birmingham",
      "alaska": "Anchorage",
      "arizona": "Phoenix",
      "arkansas": "Little Rock",
      "california": "Los Angeles",
      "colorado": "Denver",
      "connecticut": "Bridgeport",
      "delaware": "Wilmington",
      "districtofcolumbia": "District Of Columbia",
      "florida": "Jacksonville",
      "georgia": "Atlanta",
      "hawaii": "Honolulu",
      "idaho": "Boise",
      "illinois": "Chicago",
      "indiana": "Indianapolis",
      "iowa": "Des Moines",
      "kansas": "Wichita",
      "kentucky": "Louisville",
      "louisiana": "New Orleans",
      "maine": "Portland",
      "maryland": "Baltimore",
      "massachusetts": "Boston",
      "michigan": "Detroit",
      "minnesota": "Minneapolis",
      "mississippi": "Jackson",
      "missouri": "Kansas City",
      "montana": "Billings",
      "nebraska": "Omaha",
      "nevada": "Las Vegas",
      "newhampshire": "Manchester",
      "newjersey": "Newark",
      "newmexico": "Albuquerque",
      "newyork": "New York City",
      "northcarolina": "Charlotte",
      "northdakota": "Fargo",
      "ohio": "Columbus",
      "oklahoma": "Oklahoma City",
      "oregon": "Portland",
      "pennsylvania": "Philadephia",
      "rhodeisland": "Providence",
      "southcarolina": "Columbia",
      "southdakota": "Sioux Falls",
      "tennessee": "Nashville",
      "texas": "Houston",
      "utah": "Salt Lake City",
      "vermont": "Burlington",
      "virginia": "Virginia Beach",
      "washington": "Seattle",
      "westvirginia": "Charleston",
      "wisconsin": "Milwaukee",
      "wyoming": "Cheyenne"
    }
    return capital[searchState];
  } 

  calculateTax() {
    let oldSalary = 0;
    let newSalary = 0;
    let flatTaxBrackets = {
    		"alabama": 0.05,
				"alaska": 0,
				"arizona": 0.0454,
				"arkansas": 0.07,
				"colorado": 0.0463,
				"connecticut": 0.06,
				"delaware": 0.066,
				"dc": 0.085,
				"florida": 0,
				"georgia": 0.06,
				"hawaii": 0.09,
				"idaho": 0.074,
				"illinois": 0.05,
				"indiana": 0.034,
				"iowa": 0.0898,
				"kansas": 0.049,
				"kentucky": 0.06,
				"louisiana": 0.06,
				"maine": 0.0795,
				"maryland": 0.0575,
				"massachusetts": 0.051,
				"michigan": 0.0425,
				"minnesota": 0.08,
				"mississippi": 0.05,
				"missouri": 0.06,
				"montana": 0.069,
				"nebraska": 0.0684,
				"nevada": 0,
				"newhampshire": 0,
				"newjersey": 0.0637,
				"newmexico": 0.049,
				"newyork": 0.0685,
				"northcarolina": 0.0575,
				"northdakota": 0.0399,
				"ohio": 0.0499,
				"oklahoma": 0.0525,
				"oregon": 0.099,
				"pennsylvania": 0.0307,
				"rhodeisland": 0.05,
				"southcarolina": 0.07,
				"southdakota": 0,
				"tennessee": 0.06,
				"texas": 0,
				"utah": 0.05,
				"vermont": 0.08,
				"virginia": 0.0575,
				"washington": 0,
				"westvirginia": 0.065,
				"wisconsin": 0.07,
				"wyoming": 0
    }
    let stateTax = 0;
    let federalTax = 0;
    if (this.state.salary < 9225) {
    	federalTax = (this.state.salary*0.1)
    } else if (this.state.salary >= 9225 && this.state.salary < 37450) {
	   	federalTax = (9225*0.1) + ((this.state.salary-9225)*0.15)
    } else if (this.state.salary >= 37450 && this.state.salary < 90750) {
    	federalTax = (9225*0.1) + ((37450-9225)*0.15) + ((this.state.salary-37450)*0.25)
    } else if (this.state.salary >= 90750 && this.state.salary < 189300) {
    	federalTax = (9225*0.1) + ((37450-9225)*0.15) + ((90750-37450)*0.25) + ((this.state.salary-90750)*0.28)
    } else {
    	federalTax = (9225*0.1) + ((37450-9225)*0.15) + ((90750-37450)*0.25) + ((189300-90750)*0.28) + ((this.state.salary-189300)*0.33)
    }
    if (this.state.stateSelect === "california") {
    	if (this.state.salary < 7582) {
	    	stateTax = (this.state.salary*0.01)
	    } else if (this.state.salary >= 7582 && this.state.salary < 17976) {
		   	stateTax = (7582*0.01) + ((this.state.salary-7582)*0.02)
	    } else if (this.state.salary >= 17976 && this.state.salary < 28371) {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((this.state.salary-17976)*0.04)
	    } else if (this.state.salary >= 28371 && this.state.salary < 39384) {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((28371-17976)*0.04) + ((this.state.salary-28371)*0.06)
	    } else if (this.state.salary >= 39384 && this.state.salary < 49774) {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((28371-17976)*0.04) + ((39384-28371)*0.06) + ((this.state.salary-39384)*0.08)
	    } else if (this.state.salary >= 49774 && this.state.salary < 254250) {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((28371-17976)*0.04) + ((39384-28371)*0.06) + ((49774-39384)*0.08) + ((this.state.salary-49774)*0.093)
	    } else if (this.state.salary >= 254250 && this.state.salary < 305100) {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((28371-17976)*0.04) + ((39384-28371)*0.06) + ((49774-39384)*0.08) + ((254250-49774)*0.093) + ((this.state.salary-254250)*0.0103)
	    } else {
	    	stateTax = (7582*0.01) + ((17976-7582)*0.02) + ((28371-17976)*0.04) + ((39384-28371)*0.06) + ((49774-39384)*0.08) + ((254250-49774)*0.093) + ((305100-254250)*0.0103) + ((this.state.salary-305100)*0.0113)
	    }
    } else {
    	stateTax = this.state.salary * (flatTaxBrackets[this.state.stateSelect])
    }
    let oldSalaryState = this.convertCurrentState();
    oldSalary = this.state.salary - federalTax - (this.state.salary * (flatTaxBrackets[oldSalaryState]) );
		this.setState({afterTaxCurrent: oldSalary});
    newSalary = this.state.salary - federalTax - stateTax;
		this.setState({afterTaxNew: newSalary});
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

  showCurrentState() {
    if(this.props.currentState) {
      let imageState = this.convertCurrentState();
      return(
        <img className="tax-state" src={`assets/states/${imageState}.png`} />
      )
    } else {
      return(
        <div>             
          <i className="large material-icons">terrain</i>
        </div>
      )
    }
  }

  showGeoState() {
    if(this.state.stateSelect) {
      return(
        <img className="tax-state" src={`assets/states/${this.state.stateSelect}.png`} />
      )
    } else {
      return(
        <div>             
          <i className="large material-icons">terrain</i>
        </div>
      )
    }
  }
   
	render() {
		return(
			<div>
        <h1 className="center spaced">discover</h1>
				<ul className="collapsible" data-collapsible="accordion">
			    <li>
			      <div className="collapsible-header"><i className="material-icons">local_atm</i>Take-Home Pay Calculator</div>
			      <div className="collapsible-body calculator">

			      	<div className="row state-selector">
				      	<div className="input-field">
				      		<div className="col s3">Choose your state:</div>
					      	<SelectField className="states-list" value={this.state.stateSelect} onChange={this.handleSelect.bind(this)}>
				      		  <MenuItem value="" disabled>Choose your state</MenuItem>
						        <MenuItem value="alabama" primaryText="Alabama" />
										<MenuItem value="alaska" primaryText="Alaska" />
										<MenuItem value="arizona" primaryText="Arizona" />
										<MenuItem value="arkansas" primaryText="Arkansas" />
										<MenuItem value="california" primaryText="California" />
										<MenuItem value="colorado" primaryText="Colorado" />
										<MenuItem value="connecticut" primaryText="Connecticut" />
										<MenuItem value="delaware" primaryText="Delaware" />
										<MenuItem value="dc" primaryText="District of Columbia" />
										<MenuItem value="florida" primaryText="Florida" />
										<MenuItem value="georgia" primaryText="Georgia" />
										<MenuItem value="hawaii" primaryText="Hawaii" />
										<MenuItem value="idaho" primaryText="Idaho" />
										<MenuItem value="illinois" primaryText="Illinois" />
										<MenuItem value="indiana" primaryText="Indiana" />
										<MenuItem value="iowa" primaryText="Iowa" />
										<MenuItem value="kansas" primaryText="Kansas" />
										<MenuItem value="kentucky" primaryText="Kentucky" />
										<MenuItem value="louisiana" primaryText="Louisiana" />
										<MenuItem value="maine" primaryText="Maine" />
										<MenuItem value="maryland" primaryText="Maryland" />
										<MenuItem value="massachusetts" primaryText="Massachusetts" />
										<MenuItem value="michigan" primaryText="Michigan" />
										<MenuItem value="minnesota" primaryText="Minnesota" />
										<MenuItem value="mississippi" primaryText="Mississippi" />
										<MenuItem value="missouri" primaryText="Missouri" />
										<MenuItem value="montana" primaryText="Montana" />
										<MenuItem value="nebraska" primaryText="Nebraska" />
										<MenuItem value="nevada" primaryText="Nevada" />
										<MenuItem value="newhampshire" primaryText="New Hampshire" />
										<MenuItem value="newjersey" primaryText="New Jersey" />
										<MenuItem value="newmexico" primaryText="New Mexico" />
										<MenuItem value="newyork" primaryText="New York" />
										<MenuItem value="northcarolina" primaryText="North Carolina" />
										<MenuItem value="northdakota" primaryText="North Dakota" />
										<MenuItem value="ohio" primaryText="Ohio" />
										<MenuItem value="oklahoma" primaryText="Oklahoma" />
										<MenuItem value="oregon" primaryText="Oregon" />
										<MenuItem value="pennsylvania" primaryText="Pennsylvania" />
										<MenuItem value="rhodeisland" primaryText="Rhode Island" />
										<MenuItem value="southcarolina" primaryText="South Carolina" />
										<MenuItem value="southdakota" primaryText="South Dakota" />
										<MenuItem value="tennessee" primaryText="Tennessee" />
										<MenuItem value="texas" primaryText="Texas" />
										<MenuItem value="utah" primaryText="Utah" />
										<MenuItem value="vermont" primaryText="Vermont" />
										<MenuItem value="virginia" primaryText="Virginia" />
										<MenuItem value="washington" primaryText="Washington" />
										<MenuItem value="westvirginia" primaryText="West Virginia" />
										<MenuItem value="wisconsin" primaryText="Wisconsin" />
										<MenuItem value="wyoming" primaryText="Wyoming" />
	    		        </SelectField>
						    </div>
						  </div>

		      		<div className="row state-selector">
		      			<div className="col s3">Salary: </div>
		      			<span>${this.state.salary.toLocaleString()}</span>
		      		</div>

							<Slider
			          defaultValue={35000}
			          min={0}
			          max={400000}
			          step={1}
			          value={this.state.salary}
			          onChange={this.handleFirstSlider.bind(this)}
			        />
			        
							<div className="row">
								<div className="compare-states col s6 center">
									{ this.showCurrentState() }
                  <p>After-Tax Income: ${Math.round(this.state.afterTaxCurrent).toLocaleString()}</p>
								</div>
								<div className="compare-states col s6 center">
									{ this.showGeoState() }
									<p>After-Tax Income: ${Math.round(this.state.afterTaxNew).toLocaleString()}</p>
								</div>
							</div>

							<div className="center">
                  <Link to={`/move?city=${this.state.capital}&state=${this.state.stateSelect}`} className='btn'>Show neighborhoods in {this.state.capital}, {this.state.stateSelect}</Link>
							</div>							

			      </div>
			    </li>
			    <li>
            <div className="collapsible-header"><i className="material-icons">wifi</i>Google Fiber</div>
            <div className="collapsible-body">
              <h3 className="fiber">Current Cities</h3>
              <div className="row">
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/georgia.png' />
                    <p><Link to='/move?city=Atlanta&state=georgia'>Atlanta, GA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p><Link to='/move?city=Austin&state=texas'>Austin, TX</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/missouri.png' />
                    <p><Link to='/move?city=Kansas%20City&state=missouri'>Kansas City, MO</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/kansas.png' />
                    <p><Link to='/move?city=Kansas%20City&state=kansas'>Kansas City, KS</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/tennessee.png' />
                    <p><Link to='/move?city=Nashville&state=tennessee'>Nashville, TN</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p><Link to='/move?city=Provo&state=utah'>Provo, UT</Link></p>
                </div>
              </div>
              <h3 className="fiber">Upcoming Cities</h3>
              <div className="row">
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p><Link to='/move?city=Charlotte&state=northcarolina'>Charlotte, NC</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/alabama.png' />
                    <p><Link to='/move?city=Huntsville&state=alabama'>Huntsville, AL</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p><Link to='/move?city=Raleigh&state=northcarolina'>Raleigh-Durham, NC</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p><Link to='/move?city=Salt%20Lake%20City&state=utah'>Salt Lake City, UT</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p><Link to='/move?city=San%20Antonio&state=texas'>San Antonio, TX</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p><Link to='/move?city=San%20Francisco&state=california'>San Francisco, CA</Link></p>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <div className="collapsible-header"><i className="material-icons">event_seat</i>Hamilton</div>
            <div className="collapsible-body">
              <div className="row hamilton-cities">
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p><Link to='/move?city=San%20Francisco&state=california'>San Francisco, CA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p><Link to='/move?city=Los%20Angeles&state=california'>Los Angeles, CA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/dc.png' />
                    <p><Link to='/move?city=Washington&state=districtofcolumbia'>Washington D.C.</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/georgia.png' />
                    <p><Link to='/move?city=Atlanta&state=georgia'>Atlanta, GA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/massachusetts.png' />
                    <p><Link to='/move?city=Boston&state=massachusetts'>Boston, MA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p><Link to='/move?city=Charlotte&state=northcarolina'>Charlotte, NC</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/ohio.png' />
                    <p><Link to='/move?city=Cleveland&state=ohio'>Cleveland, OH</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p><Link to='/move?city=Costa%20Mesa&state=california'>Costa Mesa, CA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/colorado.png' />
                    <p><Link to='/move?city=Denver&state=colorado'>Denver, CO</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/iowa.png' />
                    <p><Link to='/move?city=Des%20Moines&state=iowa'>Des Moines, IA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p><Link to='/move?city=Houston&state=texas'>Houston, TX</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/nevada.png' />
                    <p><Link to='/move?city=Los%20Vegas&state=nevada'>Las Vegas, NV</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/oregon.png' />
                    <p><Link to='/move?city=Portland&state=oregon'>Portland, OR</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p><Link to='/move?city=Salt%20Lake%20City&state=utah'>Salt Lake City, UT</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p><Link to='/move?city=San%20Diego&state=california'>San Deigo, CA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/washington.png' />
                    <p><Link to='/move?city=Seattle&state=washington'>Seattle, WA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/missouri.png' />
                    <p><Link to='/move?city=Saint%20Louis&state=missouri'>Saint Louis, MO</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/arizona.png' />
                    <p><Link to='/move?city=Tempe&state=arizona'>Tempe, AZ</Link></p>
                </div>
              </div>                
            </div>
          </li>

          <li>
            <div className="collapsible-header"><i className="material-icons">&#xE915;</i>Compare</div>
            <div className="collapsible-body">
              <CompareCities />
            </div>
          </li>

          <li>
            <div className="collapsible-header"><i className="material-icons">home</i>Featured Neighborhoods</div>
            <div className="collapsible-body"><ExploreNeighborhoods /></div>
          </li>

			  </ul>
			  <ExploreNeighborhoods />
			</div>
		)
	}
}
 
const mapStateToProps = (state) => {
  return { currentCity: state.profile.current_city, currentState: state.profile.current_state }
}

export default connect(mapStateToProps)(Discover);
