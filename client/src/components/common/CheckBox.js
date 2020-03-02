import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";

const CheckBox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
	return (
		<>
			<label className="checkbox">
				<input {...field} {...props} type="checkbox" />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

CheckBox.propTypes = {
	touched: PropTypes.bool,
	error: PropTypes.string
};

export default CheckBox;
