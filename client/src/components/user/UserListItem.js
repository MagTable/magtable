import React from "react";
import PropTypes from "prop-types";
import {
	ManipImg,
	UserListRow,
	UserManipulateBlock,
	UserListItem as UserListItemText
} from "../../styled/user/User";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetPassword } from "../../actions/user";

const UserListItem = ({ user }) => {
	const dispatch = useDispatch();
	const authUser = useSelector(state => state.auth.user);

	const handlePasswordReset = id => {
		dispatch(resetPassword(id));
	};

	const handleDelete = id => {
		dispatch(deleteUser(id));
	};

	return (
		<UserListRow>
			<UserListItemText>{user.username}</UserListItemText>
			<UserListItemText>{user.password}</UserListItemText>
			<UserManipulateBlock>
				{user.id !== authUser.id && (
					<>
						<ManipImg
							className="fas fa-trash-alt"
							onClick={() => handleDelete(user.id)}
						/>
						<ManipImg
							className="fas fa-redo"
							onClick={() => handlePasswordReset(user.id)}
						/>
						{user.reset && <ManipImg className="fas fa-exclamation-triangle" />}
					</>
				)}
			</UserManipulateBlock>
		</UserListRow>
	);
};

UserListItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserListItem;
