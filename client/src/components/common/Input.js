import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	TextInput as StyledTextInput,
	TextInputIcon,
	TextInputContainer,
	TextInputLabel
} from "../../styled/common/TextInput";
import { useField } from "formik";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff, MJ Kochuk
 * @module Component
 */

/**
 * Standard component for text input, has support for labels, errors, and IconButtons
 *
 * @param props see PropTypes
 * @param label Just the label for the input field.
 * @returns {*} The TextInput Component
 * @constructor
 */

const Input = ({ label, ...props }) => {
	const [focus, setFocus] = useState(false);
	const [field] = useField(props);

	if (props.setBlurred) {
		props.setBlurred(focus || props.blur);
	}

	return (
		<TextInputContainer>
			{props.icon && (
				<TextInputIcon
					className={"fas " + props.icon?.iconClass}
					onClick={props.icon?.action}
					toolTip={props.icon?.toolTip}
					hoverColor={props.icon?.hoverColor}
					focus={focus}
					accentColor={props?.accentColor}
				/>
			)}
			<TextInputLabel
				error={props.errors}
				lifted={props.value?.toString().length > 0}
				focus={focus}
				htmlFor={props.id || props.name}
				accentColor={props?.accentColor}
			>
				{props.errors || label}
			</TextInputLabel>
			<StyledTextInput
				{...field}
				{...props}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				error={props.errors && props.touched}
				focus={focus}
				id={label}
				fit={props.fit}
				accentColor={props.accentColor}
			/>
		</TextInputContainer>
	);
};

Input.propTypes = {
	errors: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	icon: PropTypes.shape({
		iconClass: PropTypes.string.isRequired,
		action: PropTypes.func,
		toolTip: PropTypes.string
	}),
	fit: PropTypes.bool
};

export default Input;
