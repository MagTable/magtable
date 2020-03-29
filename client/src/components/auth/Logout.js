import { useEffect } from "react";
import { logout } from "../../actions/auth";
import { useDispatch } from "react-redux";

/**
 *
 * The Logout component.
 *
 * @date 2/10/2020
 * @author Arran Woodruff
 * @name Logout
 * @category Component/Auth
 * @returns {*} The logout component
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
