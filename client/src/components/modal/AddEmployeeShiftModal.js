import React from "react";
import styled from "styled-components";

//Todo Naming
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
	// background: #3c4146;
	// box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06), 0 0 6px rgba(0, 0, 0, 0.23);
	display: flex;
	justify-content: center;
	align-items: center;
	${({ showHideClassName }) =>
		showHideClassName ? `display: block;` : `display: none;`}
`;

// Todo Naming
const StyledSection = styled.section`
	background: #fff;
	margin: 5%;
	z-index: 100;
	border: 3px solid black;
	height: 548px;
`;

const AddShiftCloseBtn = styled.button`
	position: absolute;
	transform: translate(431px, -523px);
	border-radius: 30px;
	width: 30px;
	height: 30px;
	border: 2px solid grey;
	overflow: hidden;
	cursor: pointer;
	z-index: 1;
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
				<AddShiftCloseBtn onClick={handleClose}>X</AddShiftCloseBtn>
			</StyledSection>
		</StyledDiv>
	);
};

export default AddEmployeeShiftModal;
