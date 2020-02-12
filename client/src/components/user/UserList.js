import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getUsers, deleteUser, resetPassword } from '../../actions/user';
import { connect } from 'react-redux';

import { Title, TitleDiv, TitleDummy } from '../../styled/common/BasicContent';
import {
	UserListRow,
	UserListItem,
	UserManipulateBlock,
	ManipImg,
	UserListDiv
} from '../../styled/client/User';
import PasswordReset from './PasswordReset';
import AddUser from './AddUser';

// const groupBy = key => array =>
// 	array.reduce((objectsByKeyValue, obj) => {
// 		const value = obj[key];
// 		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
// 		return objectsByKeyValue;
// 	}, {});

function groupByRole(userList) {
	let roleList = [{roleName: userList[0].roleName,
					 users: [userList[0]]}];
	for (let i = 1; i < userList.length; i++) {
		let inserted = false;
		for (let j = 0; j < roleList.length; j++) {
			console.log(roleList[j]);
			console.log(userList[i].role.roleName);
			if (roleList[j].roleName === userList[i].role.roleName){
				roleList[j].users.push(userList[i]);
			}
		}
		if (!inserted){
			roleList.push({roleName: userList[i].roleName,
							users: [userList[i]]});
		}
	}
	return roleList;
}

const UserList = ({ getUsers, deleteUser, users, roles }) => {
	useEffect(() => {
		getUsers();
	}, [getUsers]);


	// const orderedUserList = groupByRole('role', users);
	// const orderedUserList = groupByRoleName(users);
	const location = useLocation();

	// todo this should probably throw an error?
	if (users === null) return <h1>No Users in the System!</h1>;
	console.log(roles);
	// console.log(typeof orderedUserList, orderedUserList);
	return (
		<UserListDiv>
			{roles.map(role => (
			<>
				<h1>{role.name}</h1>
				{users.map(user => user.role.id === role.id  && (
				<p>user.username</p>
				))}
			</>
			))}
			{/*{orderedUserList.map(role => (*/}
			{/*	<>*/}
			{/*	<h2>{role.roleName}</h2>*/}
			{/*{role.map(user => (*/}
			{/*	<UserListRow key={user.id}>*/}
			{/*		<UserListItem>*/}
			{/*			<b>{user.role ? user.role.roleName : 'No Role'}</b>*/}
			{/*		</UserListItem>*/}
			{/*		<UserListItem>{user.username}</UserListItem>*/}
			{/*		<UserManipulateBlock>*/}
			{/*			<ManipImg*/}
			{/*				className="fas fa-trash-alt"*/}
			{/*				onClick={() => deleteUser(user.id)}*/}
			{/*			/>*/}
			{/*			<PasswordReset userID={user.id} />*/}
			{/*		</UserManipulateBlock>*/}
			{/*	</UserListRow>*/}
			{/*	))}*/}
			{/*	</>*/}
			{/*))};*/}
			<AddUser/>
		</UserListDiv>
	);
};

{/*))}*/}
{/*{users.map(user => (*/}
{/*	<UserListRow key={user.id}>*/}
{/*		<UserListItem>*/}
{/*			<b>{user.role ? user.role.roleName : 'No Role'}</b>*/}
{/*		</UserListItem>*/}
{/*		<UserListItem>{user.username}</UserListItem>*/}
{/*		<UserManipulateBlock>*/}
{/*			<ManipImg*/}
{/*				className="fas fa-trash-alt"*/}
{/*				onClick={() => deleteUser(user.id)}*/}
{/*			/>*/}
{/*			<PasswordReset userID={user.id} />*/}
{/*		</UserManipulateBlock>*/}
{/*	</UserListRow>*/}
//
// function groupBy (list){
// 	for (let i = 0; i < list.length; i++) {
// 		if (list[i].role.roleName)
// 	}
// }

// Referencing https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752



UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			username: PropTypes.string.isRequired,
			tempPassword: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

const mapStateToProps = state => {
	return {
		users: state.user.users,
		roles: state.roles,
	};
};

export default connect(mapStateToProps, {
	getUsers,
	deleteUser,
	resetPassword
})(UserList);


// export default UserList;
