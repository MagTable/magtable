import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	margin: auto;
	z-index: 100;
	background: #3c4146;

	display: flex;
	justify-content: center;
	align-items: center;
	${({ showHideClassName }) =>
		showHideClassName ? `display: flex;` : `display: none;`}
`;

const StyledButton = styled.button`
	float: right;
	position: absolute;
	right: 0px;
	top: 0px;
	transform: translate(13px, -13px);
	border-radius: 30px;
	width: 30px;
	height: 30px;
	border: 2px solid grey;
	overflow: hidden;
	white-space: nowrap;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	z-index: 1;
	display: block;
	opacity: 1;
`;

const StyledSection = styled.section`
	background: #fff;
	position: relative;
	z-index: 100;
	padding: 10px;
	width: 50%;
	margin: auto;
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
		<StyledDiv showHideClassName={showHideClassName} onClick={handleClose}>
			<StyledSection className="modal-main">
				{children}
				<StyledButton onClick={handleClose}>X</StyledButton>
			</StyledSection>
		</StyledDiv>
	);
};

export default AddEmployeeShiftModal;
