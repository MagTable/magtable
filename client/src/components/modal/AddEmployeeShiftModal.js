import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	margin: auto:
  	width: 50%;
  	padding: 10px;
	height: 80%;
	background: rgba(255, 255, 255);
	${({ showHideClassName }) =>
		showHideClassName ? `display: block;` : `display: none;`}
`;

const StyledSection = styled.section`
	position: fixed;
	background: white;
	margin: auto;
	z-index: 5;
	top: 25%;
	left: 25%;
	border: 3px solid green;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255);
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
	const showHideClassName = show ? true : false;

	return (
		<StyledDiv showHideClassName={showHideClassName}>
			<StyledSection className="modal-main">
				{children}
				<button onClick={handleClose}>Close</button>
			</StyledSection>
		</StyledDiv>
	);
};

export default AddEmployeeShiftModal;
