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
						<Confirmation action={() => handleDelete(user.id)}>
							{({ confirm }) => (
								<IconButton
									faClassName="fa-trash-alt"
									onClick={confirm}
									toolTip={"Delete User"}
									hoverColor={"red"}
								/>
							)}
						</Confirmation>
						<IconButton
							toolTip={"Reset User's Password"}
							onClick={() => handlePasswordReset(user.id)}
							faClassName={"fa-unlock-alt"}
							hoverColor={"blue"}
						/>
						{user.reset && (
							<IconButton
								faClassName={"fa-exclamation-triangle"}
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
