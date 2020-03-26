import React from "react";
import PropTypes from "prop-types";
import {
	UserListRow,
	UserManipulateBlock,
	UserListItem as UserListItemText
} from "../../styled/user/User";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, resetPassword } from "../../actions/user";
import IconButton from "../common/IconButton";
import Confirmation from "../common/Confirmation";

/**
 * Displays the relevant user attributes as a list item
 * Contains buttons that perform actions on the user (delete, reset password)
 *
 * @param user user to be rendered in the list item
 * @returns {*} UserListItem Component
 * @constructor
 */
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
						<Confirmation
							confirmationMessage={"Confirm Delete"}
							action={() => handleDelete(user.id)}
						>
							{({ confirm }) => (
								<IconButton
									faClassName="fa-user-minus fa-lg"
									onClick={confirm}
									toolTip={"Delete User"}
									hoverColor={"red"}
								/>
							)}
						</Confirmation>
						<Confirmation
							confirmationMessage={"Confirm Reset"}
							action={() => handlePasswordReset(user.id)}
							color={"blue"}
							hoverColor={"darkblue"}
						>
							{({ confirm }) => (
								<IconButton
									toolTip={"Reset User's Password"}
									onClick={confirm}
									faClassName={"fa-unlock-alt fa-lg"}
									hoverColor={"blue"}
								/>
							)}
						</Confirmation>
						{user.reset && (
							<IconButton
								faClassName={"fa-exclamation-triangle fa-lg"}
								color={"orange"}
								toolTip={"User's Password Has Been Reset"}
							/>
						)}
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
