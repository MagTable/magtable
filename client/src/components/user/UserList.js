import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser, editUser, getLevelDescriptions } from '../../actions/user';
import { GET_USERS, GET_LEVELS } from '../../actions/constants';
import { connect } from 'react-redux';
import user from '../../reducers/user';
import {Title, TitleDiv, TitleDummy} from "../../styled/common/BasicContent";
import {
	UserListRow,
	UserListItem,
	UserListHeader,
	UserListHeaderRow,
	DelUserImg,
	UserManipulateBlock, ManipImg, UserListDiv
} from "../../styled/client/User";

const UserList = ({ getUsers, deleteUser, editUser, users, getLevelDescriptions, levels, }) => {
	useEffect(() => {
		getUsers();
		getLevelDescriptions();
	}, [getUsers, getLevelDescriptions]);

	console.log(users);
	console.log(levels);

	const location = useLocation();

	// todo this should probably throw an error?
	if (users === null) return <h1>No Users in the System!</h1>;
	console.log(levels)
	return (
		<UserListDiv>
            <TitleDiv><TitleDummy/><Title>User Management</Title><TitleDummy/></TitleDiv>
			{users.map(user => (
			<UserListRow>
				<UserListItem>
					<b>{levels.map(level => level.levelId === user.levelId ? level.description : null)}</b>
				</UserListItem>
				<UserListItem>
					{user.username}
				</UserListItem>
					<UserManipulateBlock>
						<ManipImg className="fas fa-undo" onClick={editUser}/>
						<ManipImg className="fas fa-trash-alt" onClick={deleteUser}/>
					</UserManipulateBlock>
			</UserListRow>
			))}
		</UserListDiv>
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

	levels: PropTypes.arrayOf(
		PropTypes.shape({
			levelId: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

const mapStateToProps = state => {
	return {
		users: state.user.users,
		levels: state.user.levels,
	};
};

export default connect(mapStateToProps, { getUsers, deleteUser, editUser, getLevelDescriptions })(
	UserList
);

function getLevelDesc(levelId) {
	return 1;
}

// export default UserList;
