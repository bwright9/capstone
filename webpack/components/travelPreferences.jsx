import React from 'react';
import Profile from './travelPreferences';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router';

class travelPreferences extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
	  $.ajax({
		    url: "/api/visit_preferences",
		    type: 'GET',
		    dataType: 'JSON',
		  }).done( visitPreferences => {
		  	console.log('success');
		  	this.setState({ visitPreferences })
		  }).fail( data => {
		  	console.log('oh no!')
		  });
  }

  handleSelect(rowNumber, columnId) {
  	let ref = rowNumber.toString();
  	let rootChildren = this.refs[ref].props.children;
  	let checked = !rootChildren[0].props.children.props.checked;
  	let value = rootChildren[1].props.children.toLowerCase();
  	let formData = {};
  	formData[value] = checked;
  	$.ajax({
	    url: "/api/visit_preferences",
	    type: 'PUT',
	    dataType: 'JSON',
	    data: { visit_preferences: formData }
	  }).done( data => {
	  	console.log('success')
	  }).fail( data => {
	  	console.log('oh no!')
	  });
	}

	render() {
		console.log(this.state.visitPreferences);
		if (this.state.visitPreferences) {
			return(
				<div className="row">
					<div>
						<div>
						<div className='travel_title'>
							<h4>Visit Preferences</h4>
							</div>
								</div>
								<div className='container'>
								<Table multiSelectable={true} onCellClick={this.handleSelect}>
					   			<TableBody>
					 				  <TableRow ref='0' selected={this.state.visitPreferences.food} onRowSelection={this.handleSelect}>
					 						<TableRowColumn>Food</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='1' selected={this.state.visitPreferences.drinks} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Drinks</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='2' selected={this.state.visitPreferences.coffee} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Coffee</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='3' selected={this.state.visitPreferences.shops} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Shops</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='4' selected={this.state.visitPreferences.arts} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Arts</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='5' selected={this.state.visitPreferences.outdoors} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Outdoors</TableRowColumn>
					 				  </TableRow>
					 				  <TableRow ref='6' selected={this.state.visitPreferences.sights} onRowSelection={this.handleSelect}>
					 				  	<TableRowColumn>Sights</TableRowColumn>
					 				  </TableRow>
					 		  	</TableBody>
					 		 	</Table>
					 		 	<div className='button_spacing'>
					 		 		<button className='btn offset-s2'>Match Neighborhood!</button>  |   <button className='btn grey'><Link to={'/preferenceSelect'}><div className="white-text">Back</div></Link></button>
					 			</div>
					 		</div>
					 		</div>
					 </div>
			)	
		} else {
			return(
				<div className='container'>
					<p>Loading preferences</p>
				</div>
			)
		}
	}
}

export default travelPreferences
