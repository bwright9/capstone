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
				<div>
					<div className='container'>
						<h3>Move Preferences</h3>
							</div>
								</div>
									<Table multiSelectable={true}>
				  	 			 	<TableBody>
				  	    		<TableRow>
				 			  	   <TableRowColumn>Buy</TableRowColumn>
				 			  	  </TableRow>
				 			  	  <TableRow>
				 			  	    <TableRowColumn>Rent</TableRowColumn>
				 			  	  </TableRow>
				 			  	  <TableRow>
				 			  	    <TableRowColumn>Housing Cost</TableRowColumn>
				 			  	  </TableRow>
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
				 		 	<button className='btn'>Submit</button>
				 		 	<button className='btn grey'><Link to={'/preferenceSelect'}>Back</Link></button>
				 		</div>
		)
	}
}
	


export default movePreferences