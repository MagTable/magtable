import React from "react";
import styled from "styled-components";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff
 * @module Component
 */

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
	background: #3c414677;

	display: flex;
	justify-content: center;
	align-items: center;
	${({ showHideClassName }) =>
		showHideClassName ? `display: flex;` : `display: none;`}
`;

const StyledButton = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	width: 30px;
	height: 30px;
	padding: 0;

	border-top-right-radius: 0.45rem;
	border-bottom-left-radius: 0.45rem;
	border: 0;

	cursor: pointer;
	text-align: center;

	background: var(--context-red);
	color: white;
	i {
		font-size: 135%;
	}
	:hover {
		background: darkred;
	}
`;

const StyledSection = styled.section`
	background: #fff;
	position: relative;
	z-index: 100;
	padding: 2rem;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06), 0 0 6px rgba(0, 0, 0, 0.23);
	border-radius: 0.45rem;
`;

/**
 * @date 3/01/2020
 * @author Steven Wong, Arran Woodruff
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
const Modal = ({ handleClose, show, children }) => {
	const showHideClassName = !!show;

	return (
		<StyledDiv
			showHideClassName={showHideClassName}
			onClick={e => e.currentTarget === e.target && handleClose()}
		>
			<StyledSection className="modal-main">
				{children}
				<StyledButton onClick={handleClose}>
					<i className="fas fa-times" />
				</StyledButton>
			</StyledSection>
		</StyledDiv>
	);
};

export default Modal;
