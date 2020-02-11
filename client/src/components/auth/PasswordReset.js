import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPassword } from "../../actions/auth";

/**
 * @date 2/10/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 * This component allows the user to enter a username and password and in turn makes an authorization request to the API
 * @constructor
 * @returns {*} The ResetPassword component
 */
function ResetPassword() {
	const { isAuthenticated, loading } = useSelector(state => state.auth);
	const username = useSelector(state => state.auth.user?.username);
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		password: "",
		newPassword: "password",
		confirmNewPassword: "password"
	});

	// deconstructing formData object
	const { password, newPassword, confirmNewPassword } = formData;

	// ask Arran if this syntax is confusing
	const handleChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		dispatch(setUserPassword(username, password, newPassword));
	};

	// if an authenticated user ends up with this component, they are sent back to the homepage
	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	// if we don't have the username, redirect them to login this component won't work without username
	if (!username) {
		return <Redirect to="/login" />;
	}

	return (
		<form onSubmit={e => onSubmit(e)}>
			<input
				type="text"
				value={username}
				onChange={e => handleChange(e)}
				disabled
			/>
			<input
				type="password"
				placeholder="Temporary Password"
				name="password"
				value={password}
				onChange={e => handleChange(e)}
			/>
			<input
				type="password"
				placeholder="New Password"
				name="newPassword"
				value={newPassword}
				onChange={e => handleChange(e)}
			/>
			<input
				type="password"
				placeholder="Confirm New Password"
				name="confirmNewPassword"
				value={confirmNewPassword}
				onChange={e => handleChange(e)}
			/>
			<button type="submit" disabled={loading}>
				Reset Password
			</button>
		</form>
	);
}

export default ResetPassword;
