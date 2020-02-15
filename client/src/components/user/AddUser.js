import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/user";
import {
	AddUserInput,
	AddUserRow,
	AddUserSubmit,
	SeparatorLine
} from "../../styled/user/User";
import { Field, Formik } from "formik";
import * as Yup from "yup";

/**
 * This adds a user to the system
 * @returns {*}
 * @constructor
 */
const AddUser = ({ role }) => {
	const dispatch = useDispatch();

	return (
		<Formik
			initialValues={{ username: "" }}
			onSubmit={values => {
				dispatch(addUser({ ...values, role: role.id }));
			}}
			validationSchema={Yup.object().shape({
				username: Yup.string()
					.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
					.required("Required field")
					.min(5, "Minimum Username Length is 5")
					.max(15, "Maximum Username Length is 15")
			})}
		>
			{props => (
				<form onSubmit={props.handleSubmit}>
					<AddUserRow>
						<b>{role?.name}</b>
						{/*See Formik Documentation*/}
						<AddUserSubmit type="submit" value="Add" />
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
						{/*{props.errors?.username && props.touched?.username && (*/}
						{/*	<p>{props.errors.username}</p>*/}
						{/*)}*/}
					</AddUserRow>
					<SeparatorLine />
				</form>
			)}
		</Formik>
	);
};

AddUser.propTypes = {};

export default AddUser;
