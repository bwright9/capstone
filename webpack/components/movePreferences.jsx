import React from 'react';
import Profile from './movePreferences';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

class movePreferences extends React.Component {
	constructor(props) {
		super(props)
  }

	render() {
		return(
			<div>
			<div className='row'>
				<div>
					<h4 className='move_title'>Move Preferences</h4>
						<div className='container'>
							<Table multiSelectable={true}>
				  	 	 	<TableBody>
				 			   <TableRow>
				 			     <TableRowColumn>School Rating</TableRowColumn>
				 			   </TableRow>
				 			   <TableRow>
				 			 		<TableRowColumn>Median Age</TableRowColumn>
				 			   </TableRow>
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
				 			<div className='move_button'>
				 		 	<button className='btn'>Match Neighborhood!</button>  |   <button className='btn grey'><Link to={'/preferenceSelect'}><div className="white-text">Back</div></Link></button>
				 		</div>
				 		</div>
				 	</div>
				 </div>
				</div>
		)
	}
}
	


export default movePreferences