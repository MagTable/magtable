import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff, MJ Kochuk
 * @module Component
 */

const StyledLabel = styled.label`
	user-select: none;
	position: relative;
	float: left;
	top 30px;
	// left: 5px;
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
`;

const StyledSelect = styled.select`
	user-select: none;
	position: relative;
	display: block;
	width: 100%;
	border: 0;
	border-bottom: 2px solid black;
	font-family: "Nanum Gothic", sans-serif;
	background: transparent;
	padding: 7px;

	font-size: 20px;
	option {
		font-size: 14px;
	}

	${({ focus }) =>
		focus &&
		` 
			border-color: #28aae1;
	`}
	${({ error }) =>
		error &&
		`
			border-color: var(--context-red);
	`}
`;

const SelectContainer = styled.div`
	position: relative;
	width: -webkit-fill-available;
`;

const SelectBox = ({ label, ...props }) => {
	const [focus, setFocus] = useState(false);
	const [field] = useField(props);

	field.onBlur = () => {
		setFocus(false);
	};
	field.onFocus = () => {
		setFocus(true);
	};

	return (
		<SelectContainer>
			<StyledLabel
				error={props.errors && props.touched}
				lifted={props?.value?.length > 0}
				focus={focus}
				htmlFor={props.id || props.name}
			>
				{(props.touched && props.errors) || label}
			</StyledLabel>
			<StyledSelect
				error={props.errors && props.touched}
				focus={focus}
				{...field}
				{...props}
			/>
		</SelectContainer>
	);
};

SelectBox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	errors: PropTypes.string,
	touched: PropTypes.bool
};

export default SelectBox;
