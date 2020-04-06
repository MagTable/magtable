import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../actions/auth";
import {
	PERSONNEL_MANAGER,
	SYSTEM_ADMINISTRATOR
} from "../../actions/constants";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";

/**
 *
 * The Private Routes Component.
 *
 * @date 2/10/2020
 * @author Arran Woodruff, Steven Wong
 * @name PrivateRoute
 * @category Component/Auth
 * @param Component The Component to return
 * @param data The Component data
 * @param adminRoute The route for only admins
 * @param personnelManagerRoute The route for only Personnel Managers
 * @param rest whatever this this is
 * @returns {*} The Private Route Component
 * @constructor
 */
const PrivateRoute = ({
	component: Component,
	data,
	adminRoute,
	personnelManagerRoute,
	...rest
}) => {
	// destructure necessary attributes from auth state
	const { isAuthenticated, loading, user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	// this will prevent crashes and provide a waiting state. can be replaced with a spinner gif component in the future
	if (loading)
		return (
			<SpinnerWrap fullPage>
				<LoadingImg className="fas fa-circle-notch fa-2x" />
			</SpinnerWrap>
		);

	if (!isAuthenticated) return <Redirect to={"/login"} />;

	// if the private route has been declared as an admin route via the adminRoute boolean prop,
	// we check the user's role and redirect if it's not sufficient
	if (adminRoute && user?.role?.name !== SYSTEM_ADMINISTRATOR) {
		return <Redirect to="/" />;
	}

	// more checks for user role depending on the personnelManagerRoute boolean prop
	// if not a personnel manager, or system administrator send the user to the truck page.
	if (
		personnelManagerRoute &&
		user.role.name !== PERSONNEL_MANAGER &&
		user.role.name !== SYSTEM_ADMINISTRATOR
	) {
		return <Redirect to="/truck/all" />;
	}

	// lastly, ensure that a token exists in local storage. if not, logout and redirect to /login
	if (!localStorage.token) {
		dispatch(logout);
		return <Redirect to="/login" />;
	}

	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} {...data} />
				)
			}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired,
	data: PropTypes.object,
	adminRoute: PropTypes.bool,
	personnelManagerRoute: PropTypes.bool
};

export default PrivateRoute;
