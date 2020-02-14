import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/user";
import {
	AddUserInput,
	AddUserRow,
	AddUserSubmit,
	SelectUserLevel,
	SeparatorLine
} from "../../styled/user/User";
import { Field, Formik } from "formik";
import * as Yup from "yup";

/**
 * This adds a user to the system
 * @returns {*}
 * @constructor
 */
const AddUser = () => {
	const dispatch = useDispatch();

	const roles = useSelector(state => state.user.roles);

	return (
		<Formik
			initialValues={{ role: 1, username: "" }}
			onSubmit={values => {
				dispatch(addUser(values));
			}}
			validationSchema={Yup.object().shape({
				username: Yup.string()
					.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
					.required("Required field")
					.min(5, "Minimum Username Length is 5")
					.max(15, "Maximum Username Length is 15"),
				role: Yup.number()
					.required()
					.min(1, "Invalid Role")
					.max(3, "Invalid Role")
			})}
		>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<AddUserRow>
						{/*See Formik Documentation*/}
						<Field name={"role"}>
							{({ field }) => (
								<SelectUserLevel
									{...field}
									error={props.errors?.role && props.touched?.role}
								>
									{roles.map(role => (
										<option key={role.id} value={role.id}>
											{role.name}
										</option>
									))}
								</SelectUserLevel>
							)}
						</Field>
						{props.errors?.role && props.touched?.role && (
							<p>{props.errors.role}</p>
						)}

						<Field name={"username"}>
							{({ field }) => (
								<AddUserInput
									{...field}
									error={props.errors?.username && props.touched?.username}
									placeholder="Username"
									required
								/>
							)}
						</Field>
						{props.errors?.username && props.touched?.username && (
							<p>{props.errors.username}</p>
						)}

						<AddUserSubmit type="submit" value="Add" />
					</AddUserRow>
					<SeparatorLine />
				</form>
			)}
		</Formik>
	);
};

AddUser.propTypes = {};

export default AddUser;
