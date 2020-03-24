import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/user";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";

/**
 * Adds a user of the given role type
 *
 * @param role role of user to be added
 * @returns {*} The AddUser component
 * @constructor
 */
const AddUser = ({ role }) => {
	const dispatch = useDispatch();

	return (
		<Formik
			initialValues={{ username: "" }}
			onSubmit={(values, { resetForm }) => {
				dispatch(addUser({ ...values, role: role.id }));
				resetForm();
			}}
			validationSchema={Yup.object().shape({
				username: Yup.string()
					.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
					.required("Username Required")
					.min(5, "Minimum Username Length is 5")
					.max(15, "Maximum Username Length is 15")
			})}
		>
			{props => (
				<Form>
					<Input
						errors={props.errors.username}
						touched={props.touched.username}
						value={props.values.username}
						label={"Add a New " + role.name}
						type="text"
						name="username"
						data-lpignore="true"
						icon={{
							iconClass: "fa-plus fa-2x",
							action: () => props.submitForm(),
							toolTip: "New " + role.name,
							hoverColor: "green"
						}}
						fit
					/>
				</Form>
			)}
		</Formik>
	);
};

AddUser.propTypes = {
	role: PropTypes.object.isRequired
};

export default AddUser;
