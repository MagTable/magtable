import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPassword } from "../../actions/auth";
import { LoginBlock, LoginBtn } from "../../styled/auth/Login";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";
import {
	Background,
	BGContainer,
	BlurCover
} from "../../styled/common/TextInput";

/**
 *
 * The Reset Password Component
 *
 * @date 2/10/2020
 * @author Arran Woodruff, Steven Wong
 * @name Password Reset
 * @category Component/Auth
 * @returns {*} The ResetPassword Component
 * @constructor
 */
function ResetPassword() {
	const { isAuthenticated, loading } = useSelector(state => state.auth);
	const authUser = useSelector(state => state.auth?.user);
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
		<>
			<BGContainer>
				<BlurCover blur={true}>
					<Background />
				</BlurCover>
			</BGContainer>
			<LoginBlock>
				<Formik
					initialValues={{
						username: authUser.username,
						password: authUser.password,
						newPassword: "",
						confirmNewPassword: ""
					}}
					onSubmit={values => {
						dispatch(setUserPassword(values));
					}}
					validationSchema={Yup.object().shape({
						newPassword: Yup.string()
							.required("Password Required")
							.min(8, "Minimum Length is 8"),
						confirmNewPassword: Yup.string()
							.min(8, "Minimum Length is 8")
							.oneOf([Yup.ref("newPassword"), null], "Passwords Must Match")
							.required("Password Required")
					})}
					validateOnChange={true}
				>
					{props => (
						<Form>
							<h2>Password Reset</h2>
							<Input
								label="Username"
								name="username"
								type="text"
								value={props.values.username}
								disabled
								fit
							/>
							<Input
								errors={props.errors.newPassword}
								value={props.values.newPassword}
								label="New Password"
								name="newPassword"
								data-lpignore="true"
								type={showNewPassword ? "text" : "password"}
								icon={{
									action: () => setShowNewPassword(!showNewPassword),
									iconClass: showNewPassword
										? "fa-eye-slash fa-lg"
										: "fa-eye fa-lg",
									toolTip: showNewPassword ? "Hide Password" : "Show Password"
								}}
								fit
							/>
							<Input
								errors={props.errors?.confirmNewPassword}
								value={props.values.confirmNewPassword}
								label="Confirm New Password"
								name="confirmNewPassword"
								data-lpignore="true"
								type={showConfirmNewPassword ? "text" : "password"}
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
								fit
							/>

							<LoginBtn type="submit" disabled={loading}>
								Reset
							</LoginBtn>
						</Form>
					)}
				</Formik>
			</LoginBlock>
		</>
	);
}

export default ResetPassword;
