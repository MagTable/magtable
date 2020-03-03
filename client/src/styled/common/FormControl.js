import styled from "styled-components";

/**
 * @date 2020-02-10
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * The app's basic text box.
 **/
export const Input = styled.input`
	font-family: "Nanum Gothic", sans-serif;

	font-size: 20px;

	border: 0;
	border-bottom: 2px solid black;

	transition: border 0.3s ease-in-out;

	:disabled {
		background: rgb(51, 51, 51);
		background: linear-gradient(
			0deg,
			rgba(51, 51, 51, 0.1) 0%,
			rgba(255, 255, 255, 1) 95%
		);
	}
`;

/**
 * The apps basic button.
 */
export const Button = styled.button`
	background-color: #dadada;
	outline: none;
	border: 0;
	cursor: pointer;
	width: 100%;
	font-size: 18px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);

	transition: background 0.3s ease-in-out;

	:hover {
		background: #bdbdbd;
	}
`;

/**
 * The submit button to log in to the app
 */
export const OkButton = styled(Button)`
	background: #9cd5ff;

	:hover {
		background: #80c9ff;
	}
`;

/**
 * The on / off state labels for toggles.
 */
const ToggleLabel = styled.div`
	display: flex;
	justify-self: center;
	align-self: center;
	justify-content: center;
	align-content: center;
	color: var(--title-bright);
	font-family: "Noto Sans KR", sans-serif;
	white-space: nowrap;
`;

/**
 * The label for a toggle, specific to the right side.
 */
export const ToggleLabelRight = styled(ToggleLabel)`
	padding-right: 20px;
`;

/**
 * The label for a toggle, specific to the left side.
 */
export const ToggleLabelLeft = styled(ToggleLabel)`
	padding-left: 20px;
`;

export const ToggleLabelLeftNotice = styled(ToggleLabel)`
	padding-left: 65px;
`;

export const ToggleLabelRightNotice = styled(ToggleLabel)`
	transform: translate(-45px, 0);
`;

/**
 * Text boxes for username and password.
 */
export const Select = styled.select`
	margin-top: 20px;
	background: transparent;

	padding: 7px;

	border: 0;
	border-bottom: 2px solid black;

	transition: border 0.3s ease-in-out;

	${({ fit }) => fit && `width: calc(100% - 14px);`}
	
	${({ focus }) =>
		focus &&
		` 
			border-color: #28aae1;
	`}
	${({ error }) =>
		error &&
		`
			border-bottom: 2px solid red;
	`}
`;
