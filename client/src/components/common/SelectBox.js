import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

const StyledErrorMessage = styled.div`
	font-size: 12px;
	color: var(--red-600);
	width: 400px;
	margin-top: 0.25rem;
	&:before {
		content: "❌ ";
		font-size: 10px;
	}
	@media (prefers-color-scheme: dark) {
		color: var(--red-300);
	}
`;

const StyledLabel = styled.label`
	margin-top: 1rem;
`;

const StyledSelect = styled.select`
	color: var(--blue);
`;

const SelectBox = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
			<br />
			<StyledSelect {...field} {...props} />
			{meta.touched && meta.error ? (
				<StyledErrorMessage>{meta.error}</StyledErrorMessage>
			) : null}
		</>
	);
};

SelectBox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	errors: PropTypes.string,
	touched: PropTypes.bool
};

export default SelectBox;
