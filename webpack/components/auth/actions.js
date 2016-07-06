export const loggedIn = (id, apiKey) => {
	return {
		type: 'LOGIN',
		id,
		apiKey
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT',
	}
}

export const handleLogin = (email, password, history) => {
	return(dispatch) => {
		$.ajax({
			url: '/users/sign_in',
			type: 'POST',
			data: {user: { email, password }},
			dataType: 'JSON'
		}).done( response => {
			// set localStorage apiKey
			localStorage.setItem('apiKey', response.api_key);
			// set localStorage userId
			localStorage.setItem('userId', response.id);
			// dispatch the login action
			dispatch(loggedIn(response.id, response.api_key));
			// redirect
			history.push('/discover')
		}).fail( response => {
			// TODO: hand this better
			console.log(response);
		});
	}
}

export const handleSignup = (email, password, first_name, last_name, history) => {
	return(dispatch) => {
		$.ajax({
			url: '/users',
			type: 'POST',
			data: {user: { email, password, first_name, last_name }},
			dataType: 'JSON'
		}).done( response => {
			// set localStorage apiKey
			localStorage.setItem('apiKey', response.api_key);
			// set localStorage userId
			localStorage.setItem('userId', response.id);
			// dispatch the login action
			dispatch(loggedIn(response.id, response.api_key));
			// redirect
			history.push('/')
		}).fail( response => {
			alert( response.responseText)
		});
	}
}


export const handleLogout = (history) => {
	return(dispatch) => {
		$.ajax({
			url: '/users/sign_out',
			type: 'DELETE',
			dataType: 'JSON'
		}).done( response => {
			localStorage.removeItem('userId');
			localStorage.removeItem('apiKey');
			dispatch(logout());
			history.push('/')
		}).fail( response => {
			// TODO: handle this better
			console.log(response);
		})
	}
}

