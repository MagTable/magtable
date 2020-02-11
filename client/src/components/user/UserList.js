import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUsers, deleteUser, resetPassword } from '../../actions/user';
import {connect, useDispatch} from 'react-redux';
import { Title, TitleDiv, TitleDummy } from '../../styled/common/BasicContent';
import {
	UserListRow,
	UserListItem,
	UserListHeader,
	UserListHeaderRow,
	DelUserImg,
	UserManipulateBlock,
	ManipImg,
	UserListDiv
} from '../../styled/client/User';
import PasswordReset from './PasswordReset';
import AddUser from './AddUser';

const UserList = ({ getUsers, deleteUser, users }) => {
	useEffect(() => {
		getUsers();
	}, [getUsers]);

	const dispatch = useDispatch();

	const handlePasswordReset = (id) => {
		dispatch(resetPassword(id))
	}

	// todo this should probably throw an error?
	if (!users) return <h1>No Users in the System!</h1>;

	return (
		<UserListDiv>
			{users.map(user => (
				<UserListRow key={user.id} isFresh={user.tempPassword}>
					<UserListItem>
						<b>{user.role ? user.role.name : 'No Role'}</b>
					</UserListItem>
					<UserListItem>{user.username}</UserListItem>
					<UserManipulateBlock>
						<ManipImg
							className="fas fa-trash-alt"
							onClick={() => deleteUser(user.id)}
						/>
						<ManipImg
							className="fas fa-redo"
							onClick={() => handlePasswordReset(user.id)}
						/>
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
			tempPassword: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

const mapStateToProps = state => {
	return {
		users: state.user.users
	};
};

export default connect(mapStateToProps, {
	getUsers,
	deleteUser,
	resetPassword
})(UserList);

// export default UserList;
