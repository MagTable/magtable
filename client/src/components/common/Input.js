import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	TextInput as StyledTextInput,
	TextInputIcon,
	TextInputContainer
} from "../../styled/common/TextInput";
import { useField } from "formik";
import styled from "styled-components";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff, MJ Kochuk
 * @module Component
 */

/**
 * Standard component for text input, has support for labels, errors, and IconButtons
 *
 * @param props see PropTypes
 * @returns {*} The TextInput Component
 * @constructor
 */

const StyledLabel = styled.label`
	user-select: none;
	position: relative;
	float: left;
	top 45px;
	left: 5px;
	color: var(--input-label);
	cursor: text;
	z-index: 0;
	
	transition: all 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);

	${({ focus }) =>
		focus &&
		`
			color: #28aae1;
	`}
	
	${({ lifted, focus }) =>
		(lifted || focus) &&
		`
			transform: scale(.75) translateY(-40px) ;
	`}
		
	${({ error }) =>
		error &&
		`
			color: red;
	`}
	
	${({ accentColor }) => accentColor && `color: ${accentColor};`}
`;

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
			<StyledLabel
				error={props.errors && props.touched}
				lifted={props?.value?.toString().length > 0}
				focus={focus}
				htmlFor={props.id || props.name}
				accentColor={props?.accentColor}
			>
				{(props.touched && props.errors) || label}
			</StyledLabel>
			<StyledTextInput
				{...field}
				{...props}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
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
	touched: PropTypes.bool,
	value: PropTypes.string,
	icon: PropTypes.shape({
		iconClass: PropTypes.string.isRequired,
		action: PropTypes.func,
		toolTip: PropTypes.string
	}),
	fit: PropTypes.bool
};

export default Input;
