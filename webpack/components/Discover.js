import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';

class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = { stateSelect: '', firstSlider: 35000 };
		this.showGeoState = this.showGeoState.bind(this);
	}

	componentDidMount() {
	  $('.collapsible').collapsible();
	  $('select').material_select();
	}

	handleSelect(event, index, value) {
		this.setState({stateSelect: value});
	}

	handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
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
		      			<span>${this.state.firstSlider.toLocaleString()}</span>
		      		</div>

							<Slider
			          defaultValue={35000}
			          min={0}
			          max={400000}
			          step={1}
			          value={this.state.firstSlider}
			          onChange={this.handleFirstSlider.bind(this)}
			        />
			        
							<div className="row">
								<div className="compare-states col s6 center">
									<img className="home-state" src="assets/states/alabama.png" />
									<p>After-Tax Income: ${this.state.firstSlider.toLocaleString()}</p>
								</div>
								<div className="compare-states col s6 center">
									{ this.showGeoState() }
									<p>After-Tax Income: ${this.state.firstSlider.toLocaleString()}</p>
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
									<img className='state' src='assets/states/california.png' />
									<p><a href="https://www.shnsf.com/Online/default.asp?BOparam::WScontent::loadArticle::permalink=hamilton&BOparam::WScontent::loadArticle::context_id=" target="_blank">San Francisco, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://hollywoodpantages.com/showinfo.php?id=75" target="_blank">Los Angeles, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/dc.png' />
									<p><a href="https://medium.com/@kennedycenter/hamilton-at-the-kennedy-center-4245b945b0f4?promotionno=227963#.oi6v6ol6n" target="_blank">Washington D.C.</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/georgia.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Atlanta, GA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/massachusetts.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Boston, MA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Charlotte, NC</a></p>
								</div>
							</div>

			      	<h3 className="fiber">Upcoming Cities</h3>

			      	<div className="row">
								<div className="col s4 center">
									<img className='state' src='assets/states/ohio.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Cleveland, OH</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Costa Mesa, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/colorado.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Denver, CO</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/iowa.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Des Moines, IA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Houston, TX</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/nevada.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Las Vegas, NV</a></p>
								</div>
							</div>
			      </div>
			    </li>
			    <li>
			      <div className="collapsible-header"><i className="material-icons">event_seat</i>Hamilton</div>
			      <div className="collapsible-body">
			      	<div className="row hamilton-cities">
								<div className="col s4 center">
									<img className='state' src='assets/states/oregon.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Portland, OR</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">Salt Lake City, UT</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p><a href="http://www.hamiltonbroadway.com/tour.php" target="_blank">San Diego, CA</a></p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/washington.png' />
									<p>Seattle, WA</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/missouri.png' />
									<p>St. Louis, MO</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/arizona.png' />
									<p>Tempe, AZ</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/georgia.png' />
									<p>Atlanta, GA</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p>Austin, TX</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/missouri.png' />
									<p>Kansas City, MO</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/kansas.png' />
									<p>Kansas City, KS</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/tennessee.png' />
									<p>Nashville, TN</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p>Provo, UT</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p>Charlotte, NC</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/alabama.png' />
									<p>Huntsville, AL</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/northcarolina.png' />
									<p>Raleigh-Durham, NC</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/utah.png' />
									<p>Salt Lake City, UT</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/texas.png' />
									<p>San Antonio, TX</p>
								</div>
								<div className="col s4 center">
									<img className='state' src='assets/states/california.png' />
									<p>San Francisco, CA</p>
								</div>
							</div>				
			      </div>
			    </li>  
			  </ul>
			</div>
		)
	}
}

export default Discover;
