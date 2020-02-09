import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getUsers, deleteUser, resetPassword } from '../../actions/user';
import { connect } from 'react-redux';
import { Title, TitleDiv, TitleDummy } from '../../styled/common/BasicContent';
import {
	UserListRow,
	UserListItem,
	UserListHeader,
	UserListHeaderRow,
	DelUserImg,
	UserManipulateBlock,
	ManipImg,
	UserListDiv,
} from '../../styled/client/User';
import PasswordReset from './PasswordReset';
import AddUser from './AddUser';

const UserList = ({ getUsers, deleteUser, users }) => {
	useEffect(() => {
		getUsers();
	}, [getUsers]);

	const location = useLocation();

	// todo this should probably throw an error?
	if (users === null) return <h1>No Users in the System!</h1>;
	return (
		<UserListDiv>
			<TitleDiv>
				<TitleDummy />
				<Title>User Management</Title>
				<TitleDummy />
			</TitleDiv>
			{users.map(user => (
				<UserListRow key={user.id}>
					<UserListItem>
						<b>{user.role.roleName}</b>
					</UserListItem>
					<UserListItem>{user.username}</UserListItem>
					<UserManipulateBlock>
						<PasswordReset userID={user.id} />
						<ManipImg
							className="fas fa-trash-alt"
							onClick={() => deleteUser(user.id)}
						/>
					</UserManipulateBlock>
				</UserListRow>
			))}
		</UserListDiv>
	);
};

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			username: PropTypes.string.isRequired,
			tempPassword: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

const mapStateToProps = state => {
	return {
		users: state.user.users,
	};
};

export default connect(mapStateToProps, {
	getUsers,
	deleteUser,
	resetPassword,
})(UserList);

function getLevelDesc(levelId) {
	return 1;
}

// export default UserList;
