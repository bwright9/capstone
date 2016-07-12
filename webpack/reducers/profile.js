const profile = (state= [], action) => {
	switch(action.type) {
		case 'PROFILE_UPDATE':
			return {
				...action.profile
			}
		default:
			return state;
	}	
}

export default profile;
