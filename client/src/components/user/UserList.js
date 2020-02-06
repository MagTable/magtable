import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser, editUser } from '../../actions/user';
import { GET_USERS } from '../../actions/constants';
import { connect } from 'react-redux';
import user from '../../reducers/user';

const UserList = ({ getUsers, deleteUser, editUser, users }) => {
	useEffect(() => {
		getUsers();
	}, [getUsers]);

	console.log(users);

	const location = useLocation();

	// todo this should probably throw an error?
	if (users === null) return <h1>No Users in the System!</h1>;

	return (
		<div>
			<h1>url: {location.pathname}</h1>
			<h2>View Users Working</h2>
			<table>
				<th>User ID</th>
				<th>Level ID</th>
				<th>Username</th>
				<th>Edit User</th>
				<th>Remove User</th>
				{users.map(user => (
					<tr>
						<td key={user.userID}>{user.userID}</td>
						<td>{user.levelID}</td>
						<td>{user.username}</td>
						<td>
							<button onClick={editUser}>EDIT</button>
						</td>
						<td>
							<button onClick={deleteUser}>DELETE</button>
						</td>
					</tr>
				))}
			</table>
		</div>
	);
};

UserList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			userID: PropTypes.number.isRequired,
			levelID: PropTypes.number.isRequired,
			username: PropTypes.string.isRequired,
			password: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

const mapStateToProps = state => {
	return {
		users: state.user.users,
	};
};

export default connect(mapStateToProps, { getUsers, deleteUser, editUser })(
	UserList
);
// export default UserList;
