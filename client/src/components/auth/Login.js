import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';

/**
 * @date 2/10/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 * This component allows the user to enter a username and password and in turn makes an authorization request to the API
 * @constructor
 * @returns {*} The Login component
 */
function Login() {
	const { isAuthenticated, loading } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		username: 'mustafa',
		password: 'password'
	});

	const { username, password } = formData;

	const handleChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		dispatch(login(username, password));
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	return (
		<form onSubmit={e => onSubmit(e)}>
			<input
				type="text"
				placeholder="Username"
				name="username"
				value={username}
				onChange={e => handleChange(e)}
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				value={password}
				onChange={e => handleChange(e)}
			/>
			<button type="submit" disabled={loading}>
				Login
			</button>
		</form>
	);
}

export default Login;
