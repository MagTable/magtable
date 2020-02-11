import React, { useEffect } from "react";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";

const Logout = () => {
	// simple component assigned to /logout that calls the logout function
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(logout());
	}, [logout]);

	return null;
};

export default Logout;
