const auth = (state= [], action) => {
	switch(action.type) {
		case 'LOGIN':
			return {
				isAuthenticated: true,
				id: action.id,
				apiKey: action.apiKey,
				firstName: action.firstName,
				lastName: action.lastName,
			}
		case 'LOGOUT':
			return {
				isAuthenticated: false,
				id: null,
				apiKey: null,
				firstName: null,
				lastName: null,
			}
		default:
			return state;
	}	
}

export default auth;