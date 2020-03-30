import React, { useState } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import {
	SelectContainer,
	StyledLabel,
	StyledSelect
} from "../../styled/common/SelectBox";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff, MJ Kochuk
 * @name SelectBox
 * @category Component/Common
 * @param label The label for the Select Box
 * @param props The props that will be used to do various things like error, lifted etc...
 * @returns {*} Styled select box with options to be used.
 * @constructor
 */
const SelectBox = ({ label, ...props }) => {
	const [focus, setFocus] = useState(false);
	const [field, meta] = useField(props);

	field.onBlur = () => {
		setFocus(false);
	};
	field.onFocus = () => {
		setFocus(true);
	};

	return (
		<SelectContainer>
			<StyledLabel
				error={meta.error && meta.touched}
				lifted={props?.value?.length > 0}
				focus={focus}
				htmlFor={props.id || props.name}
			>
				{meta.error || label}
			</StyledLabel>
			<StyledSelect
				error={meta.error && meta.touched}
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
