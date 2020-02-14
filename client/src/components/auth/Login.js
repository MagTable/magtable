import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { clearAuthError, login } from "../../actions/auth";
import {
	LoginBlock,
	LoginBtn,
	LoginInput,
	LoginPane
} from "../../styled/auth/Login";
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
		<LoginBlock>
			<LoginPane>
				<h1>Login</h1>
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
							.min(5, "Minimum Username Length is 5")
							.max(15, "Maximum Username Length is 15"),
						password: Yup.string().required("Required Field")
					})}
				>
					{props => (
						<form onSubmit={props.handleSubmit}>
							{/*See Formik Documentation*/}
							<Field name={"username"}>
								{({ field }) => (
									<LoginInput
										{...field}
										error={props.errors?.username && props.touched?.username}
										placeholder="Username"
									/>
								)}
							</Field>
							{props.errors?.username && props.touched?.username && (
								<p>{props.errors.username}</p>
							)}
							<br />

							<Field name={"password"}>
								{({ field }) => (
									<>
										<LoginInput
											{...field}
											error={props.errors?.password && props.touched?.password}
											type={showPassword ? "text" : "password"}
											placeholder="Password"
										/>
										<i
											className={
												showPassword
													? "fas fa-eye-slash fa-lg"
													: "fas fa-eye fa-lg"
											}
											onClick={() => setShowPassword(!showPassword)}
										/>
									</>
								)}
							</Field>

							{props.errors?.password && props.touched?.password && (
								<p>{props.errors.password}</p>
							)}
							<br />

							<LoginBtn type="submit" disabled={loading}>
								Login
							</LoginBtn>
						</form>
					)}
				</Formik>
			</LoginPane>
		</LoginBlock>
	);
}

export default Login;
