import React, { useEffect } from "react";
import { getRoles, getUsers } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { UserListDiv, UserListSection } from "../../styled/user/User";

import AddUser from "./AddUser";
import UserListItem from "./UserListItem";

/**
 * Handles rendering of user CRUD components
 *
 * @returns {*} The UserList component
 * @constructor
 */
const UserList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRoles());
		dispatch(getUsers());
	}, [dispatch]);

	const users = useSelector(state => state.user.users);
	const usersLoading = useSelector(state => state.user.loading);
	const roles = useSelector(state => state.user.roles);

	if (usersLoading) return <h1>Loading...</h1>; // todo replace with spinner

	// set flags for each empty role
	roles.forEach(role => {
		role.empty = true;
		users.forEach(user => {
			if (user.role.id === role.id) {
				role.empty = false;
			}
		});
	});

	return (
		<UserListDiv>
			{roles.map(role => (
				<UserListSection key={role.id}>
					<h2>{role.name}s</h2>
					{/*This part checks for users with the same role as above and adds them to that section*/}
					{!role.empty ? (
						users.map(
							user =>
								user.role.id === role.id && (
									<UserListItem key={user.id} user={user} />
								)
						)
					) : (
						<h4 className={"m-0"}>
							<i className="fas fa-exclamation-circle" /> No {role.name}s
						</h4>
					)}
					<AddUser role={role} />
				</UserListSection>
			))}
		</UserListDiv>
	);
};

export default UserList;
