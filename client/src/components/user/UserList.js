import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getUsers, deleteUser, resetPassword } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import {
	UserListRow,
	UserListItem,
	UserManipulateBlock,
	ManipImg,
	UserListDiv
} from "../../styled/client/User";
import AddUser from "./AddUser";
import { connect } from "react-redux";
import { Switch, useLocation } from "react-router-dom";

// const UserList = ({ getUsers, deleteUser, users, roles }) => {
const UserList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const users = useSelector(state => state.user.users);
	const roles = useSelector(state => state.user.roles);
	const authUser = useSelector(state => state.auth.user);

	const location = useLocation();
	const handlePasswordReset = id => {
		dispatch(resetPassword(id));
	};

	const handleDelete = id => {
		dispatch(deleteUser(id));
	};

	// todo this should probably throw an error?
	if (users === null) return <h1>No Users in the System!</h1>;
	console.log(roles);
	if (!users) return <h1>No Users in the System!</h1>;

	return (
		<UserListDiv>
			<div>
				{roles.map(role => (
					<>
						<h1>{role.name}</h1>

						{users.map(
							user =>
								user.role.id === role.id && <p>user.username</p>
						)}
					</>
				))}
				;
			</div>
			<AddUser />
		</UserListDiv>
	);
};

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			username: PropTypes.string.isRequired,
			password: PropTypes.string,
			role: PropTypes.object.isRequired,
			reset: PropTypes.bool.isRequired
		}).isRequired
	)
};

const mapStateToProps = state => {
	return {
		users: state.user.users,
		roles: state.roles
	};
};

export default connect(mapStateToProps, {
	getUsers,
	deleteUser,
	resetPassword
})(UserList);
