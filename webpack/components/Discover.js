import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import CompareCities from './CompareCities';
import CompareSalary from './CompareSalary';
import ExploreNeighborhoods from './exploreNeighborhoods';

 
class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stateSelect: 'utah', salary: 35000, afterTaxCurrent: null, afterTaxNew: null };
		this.showGeoState = this.showGeoState.bind(this);
		this.calculateTax = this.calculateTax.bind(this);
	}

	componentWillMount() {
		let firstSalary = this.state.salary * 0.85;
  	this.setState({afterTaxCurrent: firstSalary, afterTaxNew: firstSalary});
  	this.calculateTax();
	}

	componentDidMount() {
	  $('.collapsible').collapsible();
	  $('select').material_select();
	}

	handleSelect(event, index, value) {
		this.setState({stateSelect: value}, function afterStateUpdated() {
 	    this.calculateTax();    	
    });
  }

	handleFirstSlider(event, value) {
    this.setState({salary: value}, function afterNumberChanges() {
 	    this.calculateTax();    	
    });
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
    oldSalary = this.state.salary - federalTax - (this.state.salary * (flatTaxBrackets["utah"]) );
		this.setState({afterTaxCurrent: oldSalary});
    newSalary = this.state.salary - federalTax - stateTax;
		this.setState({afterTaxNew: newSalary});
  }
  
   showGeoState() {
    if(this.state.stateSelect) {
      return(
        <img className="home-state" src={`assets/states/${this.state.stateSelect}.png`} />
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
									<img className="home-state" src="assets/states/utah.png" />
									<p>After-Tax Income: ${Math.round(this.state.afterTaxCurrent).toLocaleString()}</p>
								</div>
								<div className="compare-states col s6 center">
									{ this.showGeoState() }
									<p>After-Tax Income: ${Math.round(this.state.afterTaxNew).toLocaleString()}</p>
								</div>
							</div>

							<div className="center">
									<button className="btn">Show neighborhoods in {this.state.stateSelect}</button>
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
                    <p>Atlanta, GA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p>Austin, TX</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/missouri.png' />
                    <p>Kansas City, MO</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/kansas.png' />
                    <p>Kansas City, KS</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/tennessee.png' />
                    <p>Nashville, TN</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p>Provo, UT</p>
                </div>
              </div>
              <h3 className="fiber">Upcoming Cities</h3>
              <div className="row">
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p>Charlotte, NC</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/alabama.png' />
                    <p>Huntsville, AL</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p>Raleigh-Durham, NC</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p>Salt Lake City, UT</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p>San Antonio, TX</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p>San Francisco, CA</p>
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
                    <p><Link to='/move?city=San%20Francisco&state=CA'>San Francisco, CA</Link></p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p>Los Angeles, CA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/dc.png' />
                    <p>Washington, D.C.</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/georgia.png' />
                    <p>Atlanta, GA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/massachusetts.png' />
                    <p>Boston, MA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/northcarolina.png' />
                    <p>Charlotte, NC</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/ohio.png' />
                    <p>Cleveland, OH</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p>Costa Mesa, CA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/colorado.png' />
                    <p>Denver, CO</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/iowa.png' />
                    <p>Des Moines, IA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/texas.png' />
                    <p>Houston, TX</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/nevada.png' />
                    <p>Las Vegas, NV</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/oregon.png' />
                    <p>Portland, OR</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/utah.png' />
                    <p>Salt Lake City, UT</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/california.png' />
                    <p>San Diego, CA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/washington.png' />
                    <p>Seattle, WA</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/missouri.png' />
                    <p>St. Louis, MO</p>
                </div>
                <div className="col s4 center">
                    <img className= 'state' src='assets/states/arizona.png' />
                    <p>Tempe, AZ</p>
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
            <div className="collapsible-body"><p><ExploreNeighborhoods /></p></div>
          </li>
			  </ul>
			  <ExploreNeighborhoods />
			</div>
		)
	}
}
 
export default Discover;
