import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import {
	StyledCheckBoxDiv,
	StyledCheckBoxInput,
	StyledCheckBoxLabel
} from "../../styled/common/CheckBox";

/**
 * @date 2/28/2020
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * @param children This is Label.
 * @param props Props we past in from the form.
 * @returns {*} Returns a styled checkbox component.
 * @constructor
 */
const CheckBox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });

	return (
		<StyledCheckBoxDiv>
			<StyledCheckBoxInput {...field} {...props} type="checkbox" />
			<StyledCheckBoxLabel>{children}</StyledCheckBoxLabel>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</StyledCheckBoxDiv>
	);
};

CheckBox.propTypes = {
	touched: PropTypes.bool,
	error: PropTypes.string
};

export default CheckBox;
