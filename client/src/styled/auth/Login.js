import styled from "styled-components";
import { Button, Input } from "../common/FormControl";

/**
 * @date 2020-02-13
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Holds the login pane, centers content.
 **/
export const LoginPane = styled.div`
	width: 90vw;
	margin: auto;
	display: flex;
	justify-content: center;
	align-content: space-around;
	flex-direction: column;
	align-items: center;
`;

export const InputLabel = styled.label`
	user-select: none;
	position: relative;
	float: left;
	margin-left: 10px;
	top -30px;
	background: #E9E9E9;
	color: #aaa;
	cursor: text;
	transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
	${({ focus }) =>
		focus &&
		`
		color: #28aae1;
	`}
	
	${({ lifted, focus }) =>
		(lifted || focus) &&
		`
			transform: scale(.75) translateY(-29px);
		`}
		
	${({ error }) =>
		error &&
		`
			color: red;
		`}
`;

/**
 * Text boxes for username and password.
 */
export const LoginInput = styled(Input)`
	margin-top: 20px;
	padding: 7px;
	font-size: 20px;
	font-styling: bold;
	background-color: #eaeaea;

	border: 0;
	border-bottom: 2px solid black;

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

/**
 * Div to contain a password input with an icon that toggle's it's type from password to text
 * the icon is floated to the right and positioned relatively to be at the end of the input
 */
export const TogglePasswordField = styled.div`
	margin-bottom: 0.25rem;

	input {
		padding-right: 35px;
	}

	i {
		float: right;
		top: -28px;
		left: -5px;
		position: relative;
		user-select: none;
	}

	span {
		position: relative;
		float: left;
		color: red;
		font-size: 14px;
		top: 5px;
	}
`;

/**
 * The submit button to log in to the app
 */
export const LoginBtn = styled(Button)`
	margin: auto;
	margin-top: 10px;
	padding: 3px 15px;
	font-size: 17px;
	display: flex;
	border: 2px solid #28aae177;
`;

/**
 * The container immediately surrounding the login elements, provides style and input positioning.
 */
export const LoginBlock = styled.div`
	max-width: 400px;
	min-width: 30vw;
	height: 40vh;
	display: flex;
	justify-self: center;
	align-self: center;
	justify-content: center;
	// background-color: #dedede;
	// background-color: #28aae111;
	border: 2px solid #aaaaaa;
	margin: auto;
	border-radius: 4px;
	flex-basis: auto;
	flex-grow: 1;
	margin-top: 90px;

	h1 {
		margin: 0;
	}
`;
