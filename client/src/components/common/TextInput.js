import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	TextInput as StyledTextInput,
	TextInputLabel,
	TextInputIcon,
	TextInputContainer
} from "../../styled/common/TextInput";

function TextInput(props) {
	const [focus, setFocus] = useState(false);

	return (
		<TextInputContainer>
			<StyledTextInput
				{...props}
				error={props.errors && props.touched}
				type={props.type || "text"}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				focus={focus}
				id={props.label}
			/>

			{/* br + float:right takes the eye icon out of the same row as the input to avoid resizing the login block */}
			<br />

			{props.icon && (
				<TextInputIcon
					className={"fas " + props.icon?.iconClass}
					onClick={props.icon?.action}
					toolTip={props.icon?.toolTip}
				/>
			)}

			<TextInputLabel
				error={props.errors && props.touched}
				lifted={props.labelLifted}
				focus={focus}
				htmlFor={props.label}
			>
				{props.label}
			</TextInputLabel>

			{/*{props.touched && <TextInputError>{props?.errors}</TextInputError>}*/}
		</TextInputContainer>
	);
}

TextInput.propTypes = {
	errors: PropTypes.string,
	touched: PropTypes.bool,
	labelLifted: PropTypes.bool,
	icon: PropTypes.shape({
		iconClass: PropTypes.string.isRequired,
		action: PropTypes.func,
		toolTip: PropTypes.string
	})
};

export default TextInput;
