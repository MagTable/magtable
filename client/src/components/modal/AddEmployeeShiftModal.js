import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 500px;
	height: 650px;
	margin: auto;
	z-index: 100;
	background: #3c4146;

	display: flex;
	justify-content: center;
	align-items: center;
	${({ showHideClassName }) =>
		showHideClassName ? `display: block;` : `display: none;`}
`;

const StyledSection = styled.section`
	background: #fff;
	margin: 5%;
	z-index: 100;
	border: 3px solid black;
`;

/**
 * @date 3/01/2020
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * A Modal to render the Add Employee Shift whenever we wish to add one. It is controlled using the OverflowEmployee.js file
 *
 * @param handleClose
 * @param show
 * @param children
 * @returns {*}
 * @constructor
 */
const AddEmployeeShiftModal = ({ handleClose, show, children }) => {
	const showHideClassName = !!show;

	return (
		<StyledDiv showHideClassName={showHideClassName}>
			<StyledSection className="modal-main">
				{children}
				<button onClick={handleClose}>X</button>
			</StyledSection>
		</StyledDiv>
	);
};

export default AddEmployeeShiftModal;
