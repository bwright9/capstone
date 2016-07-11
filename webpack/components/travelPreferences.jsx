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
			<div>
				<div>
				<div className='container'>
					<h3>Visit Preferences</h3>
						</div>
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
				 		 	<button className='btn'>Submit</button>
				 		 	<button className='btn grey'><Link to={'/preferenceSelect'}>Back</Link></button>
				 		</div>
				 	</div>

		)
	}
}
	


export default travelPreferences