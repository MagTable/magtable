import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { clearAuthError, login } from "../../actions/auth";
import { LoginBlock, LoginBtn } from "../../styled/auth/Login";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
	Background,
	BGContainer,
	BlurCover
} from "../../styled/common/TextInput";
import { LoginLoadIcon } from "../../styled/common/QualityOfLife";
import Input from "../common/Input";
import PlaneLoader from "../common/PlaneLoader";

/**
 *
 * The Login Component.
 *
 * @date 2/10/2020
 * @author Arran Woodruff, Steven Wong
 * @name Login
 * @category Component/Auth
 * @returns {*} The Login Component
 * @constructor
 */
const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { isAuthenticated, loading, error } = useSelector(state => state.auth);
	const [blur, setBlur] = useState(false);
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
				<BlurCover blur={true}>
					<Background />
				</BlurCover>
			</BGContainer>

			<LoginBlock>
				<LoginLoadIcon loading={loading} />
				<PlaneLoader />
				<Formik
					initialValues={{
						username: "",
						password: ""
					}}
					onSubmit={values => {
						dispatch(login(values));
					}}
					validationSchema={Yup.object().shape({
						username: Yup.string()
							.matches(/^[a-zA-Z0-9]+$/, "Invalid Characters")
							.required("Username Required")
							.min(5, "Minimum Length is 5")
							.max(15, "Maximum Length is 15"),
						password: Yup.string().required("Password Required")
					})}
				>
					{props => (
						<Form>
							<Input
								onClick={() => setBlur(true)}
								value={props.values.username}
								label="Username"
								name="username"
								type="text"
								data-lpignore="true"
								fit
							/>
							<Input
								onClick={() => setBlur(true)}
								value={props.values.password}
								label="Password"
								name="password"
								data-lpignore="true"
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
							<br />
							<LoginBtn type="submit" disabled={loading}>
								LOGIN
							</LoginBtn>
						</Form>
					)}
				</Formik>
			</LoginBlock>
		</>
	);
};

export default Login;
