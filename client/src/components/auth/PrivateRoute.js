import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';
import { SYSTEM_ADMINISTRATOR } from '../../actions/constants';

const PrivateRoute = ({ component: Component, data, adminRoute, ...rest }) => {
	const { isAuthenticated, loading, user } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	if (loading) return <h1>Loading User...</h1>;

	// if (!loading && adminRoute && user.role.name !== SYSTEM_ADMINISTRATOR) {
	// 	return <Redirect to="/" />;
	// }

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
	component: PropTypes.object.isRequired,
	data: PropTypes.object,
	adminRoute: PropTypes.bool
};

export default PrivateRoute;
