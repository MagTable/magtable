import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { clearAuthError, login } from "../../actions/auth";

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
	const { isAuthenticated, loading, error } = useSelector(
		state => state.auth
	);
	const dispatch = useDispatch();
	const history = useHistory(); // to allow us to redirect the user

	const [formData, setFormData] = useState({
		username: "mustafa",
		password: "password"
	});

	useEffect(() => {
		if (error?.status === 303) {
			// error status 303 is the specific error status that tells us the user needs to reset their password
			dispatch(clearAuthError()); // clear the error before we redirect as it's served its purpose. leaving it in would cause a bad bug
			history.push("/password/reset");
		}
	}, [error, dispatch, history]);

	// if an authenticated user renders this component, they're sent back to homepage
	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	// destructuring formData
	const { username, password } = formData;

	// ask Arran if this syntax is confusing
	const handleChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		dispatch(login(username, password));
	};

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
