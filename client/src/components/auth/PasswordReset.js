import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPassword } from "../../actions/auth";
import { LoginBtn, LoginInput, LoginPane } from "../../styled/auth/Login";
import { ResetBlock } from "../../styled/auth/PasswordReset";
import { Field, Formik } from "formik";
import * as Yup from "yup";

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
	const username = useSelector(state => state.auth.user?.username);
	const dispatch = useDispatch();

	// if an authenticated user ends up with this component, they are sent back to the homepage
	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	// if we don't have the username, redirect them to login this component won't work without username
	if (!username) {
		return <Redirect to="/login" />;
	}

	return (
		<ResetBlock>
			<LoginPane>
				<Formik
					initialValues={{
						username,
						password: "",
						newPassword: "password",
						confirmNewPassword: "password"
					}}
					onSubmit={values => {
						dispatch(setUserPassword(values));
					}}
					validationSchema={Yup.object().shape({
						password: Yup.string().required("Required Field"),
						newPassword: Yup.string()
							.required("Required Field")
							.min(8, "Minimum Password Length is 8"),
						confirmNewPassword: Yup.string()
							.min(8, "Minimum Password Length is 8")
							.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
							.required("Password confirm is required")
					})}
				>
					{props => (
						<form onSubmit={props.handleSubmit}>
							<Field name={"username"}>
								{({ field }) => <LoginInput {...field} disabled />}
							</Field>

							{/*See Formik Documentation*/}
							<Field name={"password"}>
								{({ field }) => (
									<LoginInput
										{...field}
										error={props.errors.password && props.touched.password}
										type={"password"}
										placeholder={"Temporary Password"}
									/>
								)}
							</Field>
							{props.errors?.password && props.touched?.password && (
								<p>{props.errors.password}</p>
							)}

							<Field name={"newPassword"}>
								{({ field }) => (
									<LoginInput
										{...field}
										error={
											props.errors.newPassword && props.touched.newPassword
										}
										type={"password"}
										placeholder={"New Password"}
									/>
								)}
							</Field>
							{props.errors?.newPassword && props.touched?.newPassword && (
								<p>{props.errors.newPassword}</p>
							)}

							<Field name={"confirmNewPassword"}>
								{({ field }) => (
									<LoginInput
										{...field}
										error={
											props.errors.confirmNewPassword &&
											props.touched.confirmNewPassword
										}
										type={"password"}
										placeholder={"Confirm New Password"}
									/>
								)}
							</Field>
							{props.errors?.confirmNewPassword &&
								props.touched?.confirmNewPassword && (
									<p>{props.errors.confirmNewPassword}</p>
								)}

							<LoginBtn type="submit" disabled={loading}>
								Reset Password
							</LoginBtn>
						</form>
					)}
				</Formik>
			</LoginPane>
		</ResetBlock>
	);
}

export default ResetPassword;
