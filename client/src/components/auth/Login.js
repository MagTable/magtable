import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { clearAuthError, login } from "../../actions/auth";
import { LoginBlock, LoginBtn } from "../../styled/auth/Login";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../common/TextInput";
import { Background, BGContainer } from "../../styled/common/TextInput";

/**
 * @date 2/10/2020
 * @author Arran Woodruff
 * @module Component
 */

/**
 * This component allows the user to enter a username and password and in turn makes an authorization request to the API
 * @constructor
 * @returns {*} The Login component
 */
function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const { isAuthenticated, loading, error } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const history = useHistory(); // to allow us to redirect the user

	useEffect(() => {
		if (error?.status === 303) {
			// error status 303 is the specific error status that tells us the user needs to reset their password
			dispatch(clearAuthError()); // clear the error before we redirect as it's served its purpose. leaving it in would cause a bad bug
			history.push("/password/reset");
		}
	}, [error, dispatch, history]);

	// if an authenticated user renders this component, they're sent back to homepage
	if (isAuthenticated) {
		return <Redirect to="/" />;
	} // don't show the page until we know user is not authenticated

	return (
		<>
			<BGContainer>
				<Background />
			</BGContainer>
			<LoginBlock>
				<h1>MagTable</h1>
				<Formik
					initialValues={{
						username: "mustafa",
						password: "password"
					}}
					onSubmit={values => {
						dispatch(login(values));
					}}
					validationSchema={Yup.object().shape({
						username: Yup.string()
							.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
							.required("Required field")
							.min(5, "Minimum Length is 5")
							.max(15, "Maximum Length is 15"),
						password: Yup.string().required("Required Field")
					})}
				>
					{props => (
						<Form>
							{/*See Formik Documentation*/}
							<Field name={"username"}>
								{({ field }) => (
									<TextInput
										{...field}
										errors={props.errors.username}
										touched={props.touched.username}
										value={props.values.username}
										label={"Username"}
										fit
									/>
								)}
							</Field>
							<Field name={"password"}>
								{({ field }) => (
									<TextInput
										{...field}
										errors={props.errors.password}
										touched={props.touched.password}
										value={props.values.password}
										label={"Password"}
										type={showPassword ? "text" : "password"}
										icon={{
											action: () => setShowPassword(!showPassword),
											iconClass: showPassword
												? "fa-eye-slash fa-lg"
												: "fa-eye fa-lg",
											toolTip: showPassword ? "Hide Password" : "Show Password"
										}}
										fit
									/>
								)}
							</Field>

							<br />

							<LoginBtn type="submit" disabled={loading}>
								Login
							</LoginBtn>
						</Form>
					)}
				</Formik>
			</LoginBlock>
		</>
	);
}

export default Login;
