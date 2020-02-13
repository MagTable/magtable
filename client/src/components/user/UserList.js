import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
	getUsers,
	deleteUser,
	resetPassword,
	getRoles
} from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import {
	UserListRow,
	UserListItem,
	UserManipulateBlock,
	ManipImg,
	UserListDiv,
	UserListRoleHeader
} from "../../styled/client/User";

import AddUser from "./AddUser";

const UserList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getRoles());
	}, [dispatch]);

	const users = useSelector(state => state.user.users);
	const authUser = useSelector(state => state.auth.user);
	const roles = useSelector(state => state.user.roles);

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
			{roles.map(role => (
				<div key={role.id}>
					<UserListRoleHeader>
						<b>{role.name}</b>
					</UserListRoleHeader>
					<b>
						{/*This part checks for users with the same role as above and adds them to that section*/}
						{users.map(
							user =>
								user.role.id === role.id && (
									<UserListRow key={user.id}>
										<UserListItem>
											{user.username}
										</UserListItem>
										<UserListItem>
											{user.password}
										</UserListItem>
										{user.id !== authUser.id && (
											<UserManipulateBlock>
												<ManipImg
													className="fas fa-trash-alt"
													onClick={() =>
														handleDelete(user.id)
													}
												/>
												<ManipImg
													className="fas fa-redo"
													onClick={() =>
														handlePasswordReset(
															user.id
														)
													}
												/>
												{user.reset && (
													<ManipImg className="fas fa-exclamation-triangle" />
												)}
											</UserManipulateBlock>
										)}
									</UserListRow>
								)
						)}
					</b>
				</div>
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
