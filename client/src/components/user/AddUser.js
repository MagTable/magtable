import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/user";
import {
	AddUserInput,
	AddUserRow,
	AddUserSubmit,
	SelectUserLevel
} from "../../styled/client/User";

/**
 * This adds a user to the system
 * @returns {*}
 * @constructor
 */
const AddUser = () => {
	const initialFormState = {
		username: "",
		role: 1
	};

	const [formData, setFormData] = useState(initialFormState);
	const { username, role } = formData;
	const dispatch = useDispatch();

	const roles = useSelector(state => state.user.roles);

	/**
	 * This function  handles the adding of a user to the system from the form
	 * @param e the event that occurs with a submit
	 */
	function handleSubmit(e) {
		e.preventDefault();
		// TODO VALIDATION WITH FORMIK + YUP
		if (username.length >= 5) {
			dispatch(addUser(formData));
			setFormData(initialFormState);
		}
	}

	// ask Arran if this syntax is confusing
	const handleChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<AddUserRow>
				<SelectUserLevel
					name="role"
					value={role}
					onChange={e => handleChange(e)}
				>
					{roles.map(role => (
						<option key={role.id} value={role.id}>
							{role.name}
						</option>
					))}
				</SelectUserLevel>
				<AddUserInput
					type="text"
					name="username"
					placeholder="Username"
					value={username}
					onChange={e => handleChange(e)}
					required
				/>
				<AddUserSubmit type="submit" value="Add User" />
			</AddUserRow>
		</form>
	);
};

AddUser.propTypes = {};

export default AddUser;
