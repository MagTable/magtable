import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPassword } from "../../actions/auth";
import { LoginBlock, LoginBtn } from "../../styled/auth/Login";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/TextInput";

/**
 * @date 2/10/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 * This component allows the user to enter a username and password and in turn makes an authorization request to the API
 * @constructor
 * @returns {*} The ResetPassword component
 */
function ResetPassword() {
	const { isAuthenticated, loading } = useSelector(state => state.auth);
	const authUser = useSelector(state => state.auth?.user);
	// const authUser = { username: "username", password: "password" };
	const dispatch = useDispatch();

	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

	// if an authenticated user ends up with this component, they are sent back to the homepage
	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	// if we don't have the username, redirect them to login this component won't work without username
	if (!authUser) {
		return <Redirect to="/login" />;
	}

	return (
		<LoginBlock>
			<Formik
				initialValues={{
					username: authUser.username,
					password: authUser.password,
					newPassword: "password",
					confirmNewPassword: "password"
				}}
				onSubmit={values => {
					dispatch(setUserPassword(values));
				}}
				validationSchema={Yup.object().shape({
					newPassword: Yup.string()
						.required("Required Field")
						.min(8, "Minimum Length is 8"),
					confirmNewPassword: Yup.string()
						.min(8, "Minimum Length is 8")
						.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
						.required("Required Field")
				})}
			>
				{props => (
					<form onSubmit={props.handleSubmit}>
						<Field name={"username"}>
							{({ field }) => (
								<TextInput
									{...field}
									label={"Username"}
									labelLifted={true}
									disabled
								/>
							)}
						</Field>

						{/*See Formik Documentation*/}

						<Field name={"newPassword"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors?.newPassword}
									touched={props.touched?.newPassword}
									type={showNewPassword ? "text" : "password"}
									label={
										(props.touched?.newPassword && props.errors?.newPassword) ||
										"New Password"
									}
									labelLifted={props.values?.newPassword.length > 0}
									icon={{
										action: () => setShowNewPassword(!showNewPassword),
										iconClass: showNewPassword
											? "fa-eye-slash fa-lg"
											: "fa-eye fa-lg",
										toolTip: showNewPassword ? "Hide Password" : "Show Password"
									}}
								/>
							)}
						</Field>

						<Field name={"confirmNewPassword"}>
							{({ field }) => (
								<TextInput
									{...field}
									errors={props.errors?.confirmNewPassword}
									touched={props.touched?.confirmNewPassword}
									type={showConfirmNewPassword ? "text" : "password"}
									label={
										(props.touched?.confirmNewPassword &&
											props.errors?.confirmNewPassword) ||
										"Confirm New Password"
									}
									labelLifted={props.values?.confirmNewPassword.length > 0}
									icon={{
										action: () =>
											setShowConfirmNewPassword(!showConfirmNewPassword),
										iconClass: showConfirmNewPassword
											? "fa-eye-slash fa-lg"
											: "fa-eye fa-lg",
										toolTip: showConfirmNewPassword
											? "Hide Password"
											: "Show Password"
									}}
								/>
							)}
						</Field>

						<LoginBtn type="submit" disabled={loading}>
							Reset Password
						</LoginBtn>
					</form>
				)}
			</Formik>
		</LoginBlock>
	);
}

export default ResetPassword;
