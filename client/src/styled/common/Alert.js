import styled from "styled-components";

/**
 * @date 3/24/2020
 * @author Arran Woodruff
 * @module Styled
 */

export const AlertDiv = styled.div`
	position: fixed;
	top: 10px;
	left: 50%;
	width: auto;

	z-index: 100;
	transform: translateX(-50%);

	padding: 1rem;

	z-index: 1000;
`;

export const Alert = styled.div`
	background: white;
	color: black;
	border-radius: 5px;
	padding: 0.75rem;
	margin-bottom: 0.5rem;

	border-width: 1px 3px 1px 3px;
	border-style: solid;
	border-radius: 0.25rem;

	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06), 0 0 6px rgba(0, 0, 0, 0.23);

	font-size: 1rem;

	::before {
		font-size: 1.25rem;
		margin-right: 0.5rem;
	}

	${({ alerttype }) =>
		alerttype === "info" &&
		`
		border-color: #006DF0;
		::before {
			font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\\f05a";
			color: #006DF0;
		}
	`}

	${({ alerttype }) =>
		alerttype === "danger" &&
		`
		border-color: #D80027;
		::before {
			font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\\f057";
			color: #D80027;
		}
    `};

	${({ alerttype }) =>
		alerttype === "success" &&
		`
		border-color: #6ac259;
		::before {
			font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\\f058";
			color: #6ac259;
		}
	`};

	${({ alerttype }) =>
		alerttype === "warning" &&
		`
		border-color: #FFDA44;
		::before {
			font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\\f06a";
			color: #FFDA44;
		}
    `};
`;
