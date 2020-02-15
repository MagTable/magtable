import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	TogglePasswordField,
	LoginInput,
	InputLabel
} from "../../styled/auth/Login";
import IconButton from "../common/IconButton";

function PasswordInput(props) {
	const [showPassword, setShowPassword] = useState(false);
	const [focus, setFocus] = useState(false);

	return (
		<TogglePasswordField>
			<LoginInput
				{...props}
				error={props.errors && props.touched}
				type={showPassword ? "text" : "password"}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				focus={focus}
				id={"loginPassword"}
			/>
			{/* br + float:right takes the eye icon out of the same row as the input to avoid resizing the login block */}
			<br />
			<IconButton
				faClassName={showPassword ? "fa-eye-slash fa-lg" : "fa-eye fa-lg"}
				onClick={() => setShowPassword(!showPassword)}
				toolTip={showPassword ? "Hide Password" : "Show Password"}
			/>
			<InputLabel
				error={props.errors && props.touched}
				lifted={props.labelLifted}
				focus={focus}
				htmlFor={"loginPassword"}
			>
				Password
			</InputLabel>
			{props.touched && <span>{props.errors}</span>}
		</TogglePasswordField>
	);
}

PasswordInput.propTypes = {
	errors: PropTypes.string,
	touched: PropTypes.bool,
	labelLifted: PropTypes.bool
};

export default PasswordInput;
