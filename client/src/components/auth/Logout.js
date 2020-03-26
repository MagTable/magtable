import { useEffect } from "react";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";

/**
 * @date 2/10/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 * Simple redirect, mapped to /logout
 * When this component is rendered, the logout function is immediately called
 *
 * @returns {null}
 * @constructor
 */
function Logout() {
	// simple component assigned to /logout that calls the logout function
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(logout());
	}, [dispatch]);

	return null;
}

export default Logout;
