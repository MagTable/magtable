import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

//todo Who made this originally? Please replace __UNKNOWN__ with your name!!

/**
 * @date 2/28/2020
 * @author __UNKNOWN__, MJ Kochuk
 * @module Component
 */

const StyledLabel = styled.label`
	margin-top: 1rem;
`;

const StyledTextArea = styled.textarea`
	width: -webkit-fill-available;
	font-family: "Nanum Gothic", sans-serif;
	min-height: 200px;
`;

const TextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
			<br />
			<StyledTextArea defaultValue={props.value} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

TextArea.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	errors: PropTypes.string,
	touched: PropTypes.bool
};

export default TextArea;
