import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

const StyledLabel = styled.label`
	margin-top: 1rem;
`;

const TextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
			<br />
			<textarea className="text-area" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default TextArea;
