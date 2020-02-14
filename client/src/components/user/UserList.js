import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { UserListDiv, UserListRoleHeader } from "../../styled/user/User";

import AddUser from "./AddUser";
import UserListItem from "./UserListItem";

const UserList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const users = useSelector(state => state.user.users);
	const roles = useSelector(state => state.user.roles);

	if (!users) return <h1>No Users in the System!</h1>;

	return (
		<UserListDiv>
			<i>
				<UserListRoleHeader>Add User</UserListRoleHeader>
			</i>
			<AddUser />
			{roles.map(role => (
				<div key={role.id}>
					<UserListRoleHeader>
						<b>{role.name}</b>
					</UserListRoleHeader>
					{/*This part checks for users with the same role as above and adds them to that section*/}
					{users.map(
						user =>
							user.role.id === role.id && (
								<UserListItem key={user.id} user={user} />
							)
					)}
				</div>
			))}
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

export default UserList;
