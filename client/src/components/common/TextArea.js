import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import styled from "styled-components";

const StyledLabel = styled.label`
	margin-top: 1rem;
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	width: -webkit-fill-available;
	font-family: "Nanum Gothic", sans-serif;
	min-height: 200px;
`;

/**
 * @date 2/28/2020
 * @author Steven Wong, MJ Kochuk
 * @category Component/Common
 * @param label
 * @param props
 * @return {*}
 * @constructor
 */
const TextArea = ({ label, ...props }) => {
	const [focus, setFocus] = useState(false);
	const [field, meta] = useField(props);

	field.onBlur = () => {
		setFocus(false);
	};
	field.onFocus = () => {
		setFocus(true);
	};
	return (
		<>
			<StyledLabel
				error={props.errors && props.touched}
				lifted={props?.value?.length > 0}
				focus={focus}
				htmlFor={props.id || props.name}
			>
				{(props.touched && props.errors) || label}
			</StyledLabel>
			<br />
			<StyledTextArea {...field} {...props} />
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
