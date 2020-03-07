import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

const StyledErrorMessage = styled.div`
	font-size: 12px;
	color: red;
	width: 400px;
	margin-top: 0.25rem;
	&:before {
		font-size: 12px;
	}
	@media (prefers-color-scheme: dark) {
		color: red;
	}
`;

const StyledLabel = styled.label`
	margin-top: 1rem;
`;

const StyledSelect = styled.select`
	position: relative;
	display: block;
	width: 100%;
	margin: 0 auto;
	font-size: 16px;
	color: #60666d;
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
