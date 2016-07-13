export const loggedIn = (id, apiKey, firstName, lastName) => {
	return {
		type: 'LOGIN',
		id,
		apiKey,
		firstName,
		lastName, 
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT',
	}
}

export const profileUpdate = (profile) => {
	return{
		type: 'PROFILE_UPDATE',
		profile
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
			localStorage.setItem('firstName', response.first_name);
			localStorage.setItem('lastName', response.last_name);
			// dispatch the login action
			$.ajax({
	      url: "/api/user_profile",
	      type: 'GET',
	      dataType: 'JSON'
	    }).done( data => { 
	      localStorage.setItem('currentCity', data.profile.current_city);
	      localStorage.setItem('currentState', data.profile.current_state);
	      dispatch(loggedIn(response.id, response.api_key, response.first_name, response.last_name));
	      dispatch(profileUpdate(data.profile));
	    }).fail( data => {
	      console.log(data);
	    });
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




