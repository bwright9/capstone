import React from 'react';
import Profile from './travelPreferences';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router';

class travelPreferences extends React.Component {
	constructor(props) {
		super(props)
  }

	render() {
		return(
			<div className="row">
				<div>
					<div>
					<div className='travel_title'>
						<h4>Visit Preferences</h4>
						</div>
							</div>
							<div className='container'>
							<Table multiSelectable={true}>
				   			<TableBody>
				 				  <TableRow>
				 						<TableRowColumn>Safety</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Restaurants</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Arts and Culture</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Shopping</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Parks and Nature</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Nightlife</TableRowColumn>
				 				  </TableRow>
				 				  <TableRow>
				 				  	<TableRowColumn>Walk Score</TableRowColumn>
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
	}
}
	


export default travelPreferences