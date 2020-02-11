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

const UserList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const users = useSelector(state => state.user.users);

	const handlePasswordReset = id => {
		dispatch(resetPassword(id));
	};

	const handleDelete = id => {
		dispatch(deleteUser(id));
	};

	// todo this should probably throw an error?
	if (!users) return <h1>No Users in the System!</h1>;

	return (
		<UserListDiv>
			{users.map(user => (
				<UserListRow key={user.id} isFresh={user.tempPassword}>
					<UserListItem>
						<b>{user.role ? user.role.name : "No Role"}</b>
					</UserListItem>
					<UserListItem>{user.username}</UserListItem>
					<UserListItem>{user.password}</UserListItem>
					<UserManipulateBlock>
						<ManipImg
							className="fas fa-trash-alt"
							onClick={() => handleDelete(user.id)}
						/>
						<ManipImg
							className="fas fa-redo"
							onClick={() => handlePasswordReset(user.id)}
						/>
						{user.reset && (
							<i className="fas fa-exclamation-triangle" />
						)}
					</UserManipulateBlock>
				</UserListRow>
			))}
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

export default UserList;
