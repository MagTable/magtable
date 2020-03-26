import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	TextInput as StyledTextInput,
	TextInputLabel,
	TextInputIcon,
	TextInputContainer
} from "../../styled/common/TextInput";

/**
 * Standard component for text input, has support for labels, errors, and IconButtons
 * @date 2020-03-24
 * @author Arran Woodruff
 * @name TextInput
 * @category Component/Common
 * @param props see PropTypes
 * @returns {*} The TextInput Component
 * @constructor
 */
function TextInput(props) {
	const [focus, setFocus] = useState(false);

	if (props.setBlurred) {
		props.setBlurred(focus || props.blur);
	}
	return (
		<TextInputContainer id={props.id || null}>
			<StyledTextInput
				{...props}
				error={props.errors && props.touched}
				type={props.type || "text"}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				focus={focus}
				fit={props.fit}
				accentColor={props.accentColor}
			/>
			{props.icon && (
				<TextInputIcon
					className={"fas " + props.icon?.iconClass}
					onClick={props.icon?.action}
					toolTip={props.icon?.toolTip}
					focus={focus}
					accentColor={props.accentColor}
				/>
			)}

			<TextInputLabel
				error={props.errors && props.touched}
				lifted={props.value.toString().length > 0}
				focus={focus}
				htmlFor={props.label}
				accentColor={props.accentColor}
			>
				{(props.touched && props.errors) || props.label}
			</TextInputLabel>
		</TextInputContainer>
	);
}

TextInput.propTypes = {
	errors: PropTypes.string,
	touched: PropTypes.bool,
	value: PropTypes.string,
	icon: PropTypes.shape({
		iconClass: PropTypes.string.isRequired,
		action: PropTypes.func,
		toolTip: PropTypes.string
	}),
	fit: PropTypes.bool
};

export default TextInput;
