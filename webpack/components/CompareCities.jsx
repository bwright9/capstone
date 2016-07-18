import React from 'react';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';

class CompareCities extends React.Component {
	constructor(props) {
		super(props);

		this.state = { city1: null, geoState1: '', city2: null, geoState2: '', compare: null };
		this.compareStuffs = this.compareStuffs.bind(this);
		this.fetchComparisons = this.fetchComparisons.bind(this);
	}

	compareStuffs(e) {
		e.preventDefault();
		let city1 = this.refs.city1.value.replace(/[ ]+/g, "_").trim();
		let city2 = this.refs.city2.value.replace(/[ ]+/g, "_").trim();
		this.setState( { city1: city1, geoState1: this.refs.geoState1.value, city2: city2, geoState2: this.refs.geoState2.value }, function stateUpdated () {
		this.fetchComparisons()

		})
	}


	fetchComparisons() {
		$.ajax({
			url: "/api/compare_cities",
			type: 'GET',
			data: { city1: this.state.city1, state1: this.state.geoState1, city2: this.state.city2, state2: this.state.geoState2 },
			dataType: 'JSON'
		}).done( compare => {
			console.log(compare)
			this.setState({ compare });
		}).fail( data => {
			console.log(data);
		})
	}

	ShowComparisons() {
		if(this.state.compare === null) {
			return(
				<div></div>
			)
		}else if (this.state.compare.length === 0) {
		return(
			<div>No Comparison Found</div>
		) 
		} else {
			return(
				<div className="row compare">
    		  <div className="col s12 m6 category">
						<h5>Population</h5>
    		  	<div>{ this.state.compare[0] }</div>
						<div>{ this.state.compare[1] }</div>
						<div>{ this.state.compare[2] }</div>
					</div>
					<div className="col s12 m6 category">
						<h5>Cost of Living</h5>
    		  	<div>{ this.state.compare[3] }</div>
						<div>{ this.state.compare[4] }</div>
						<div>{ this.state.compare[5] }</div>
					</div>
					<div className="col s12 m6 category">
						<h5>Economy</h5>
    		  	<div>{ this.state.compare[6] }</div>
					</div>
    		  <div className="col s12 m6 category">
						<h5>Housing</h5>
    		  	<div>{ this.state.compare[7] }</div>
						<div>{ this.state.compare[8] }</div>
					</div>
					<div className="col s12 m6 category">
						<h5>Education</h5>
    		  	<div>{ this.state.compare[9] }</div>
						<div>{ this.state.compare[10] }</div>
						<div>{ this.state.compare[11] }</div>
					</div>
					<div className="col s12 m6 category">
						<h5>Commute</h5>
    		  	<div>{ this.state.compare[12] }</div>
						<div>{ this.state.compare[13] }</div>
					</div>
					<div className="col s12 m12 category-last">
						<h5>Climate</h5>
    		  	<div>{ this.state.compare[14] }</div>
						<div>{ this.state.compare[15] }</div>
					</div>
    		</div>
			)
		}
	}

	render() {
		return(
			<div className="container">
				<div className="center">
					<h2>Compare Two Cities </h2>
			    <form onSubmit={this.compareStuffs}>
			    <div className='row'>
			    	<div className='col s12 m6'>
							<input ref='city1' type='text' placeholder='Current city' />
							<select ref='geoState1'>
				  	    <option value="" disble selected>Choose your state</option>
				  	    <option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>
						<div className='col s12 m6'>
							<input ref='city2' type='text' placeholder='City you want to move in' />
							<select ref='geoState2'>
					      <option value="" disabled selected>Choose your state</option>
					      <option value="AL">Alabama</option>
								<option value="AK">Alaska</option>
								<option value="AZ">Arizona</option>
								<option value="AR">Arkansas</option>
								<option value="CA">California</option>
								<option value="CO">Colorado</option>
								<option value="CT">Connecticut</option>
								<option value="DE">Delaware</option>
								<option value="DC">District Of Columbia</option>
								<option value="FL">Florida</option>
								<option value="GA">Georgia</option>
								<option value="HI">Hawaii</option>
								<option value="ID">Idaho</option>
								<option value="IL">Illinois</option>
								<option value="IN">Indiana</option>
								<option value="IA">Iowa</option>
								<option value="KS">Kansas</option>
								<option value="KY">Kentucky</option>
								<option value="LA">Louisiana</option>
								<option value="ME">Maine</option>
								<option value="MD">Maryland</option>
								<option value="MA">Massachusetts</option>
								<option value="MI">Michigan</option>
								<option value="MN">Minnesota</option>
								<option value="MS">Mississippi</option>
								<option value="MO">Missouri</option>
								<option value="MT">Montana</option>
								<option value="NE">Nebraska</option>
								<option value="NV">Nevada</option>
								<option value="NH">New Hampshire</option>
								<option value="NJ">New Jersey</option>
								<option value="NM">New Mexico</option>
								<option value="NY">New York</option>
								<option value="NC">North Carolina</option>
								<option value="ND">North Dakota</option>
								<option value="OH">Ohio</option>
								<option value="OK">Oklahoma</option>
								<option value="OR">Oregon</option>
								<option value="PA">Pennsylvania</option>
								<option value="RI">Rhode Island</option>
								<option value="SC">South Carolina</option>
								<option value="SD">South Dakota</option>
								<option value="TN">Tennessee</option>
								<option value="TX">Texas</option>
								<option value="UT">Utah</option>
								<option value="VT">Vermont</option>
								<option value="VA">Virginia</option>
								<option value="WA">Washington</option>
								<option value="WV">West Virginia</option>
								<option value="WI">Wisconsin</option>
								<option value="WY">Wyoming</option>
							</select>
						</div>
					</div>
					<input type='submit' className='btn compare-btn' />
					</form>
					{ this.ShowComparisons() }
				</div>
			</div>
		)
	}
}

export default CompareCities;
