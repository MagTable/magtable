import styled from "styled-components";
import { Input } from "./FormControl";

export const TextInputContainer = styled.div`
	position: relative;
`;

/**
 * Text boxes for username and password.
 */
export const TextInput = styled(Input)`
	margin-top: 20px;
	font-size: 20px;
	background: transparent;

	padding: 7px;
	width: calc(100% - 14px);

	border: 0;
	border-bottom: 2px solid black;

	transition: border 0.3s ease-in-out;

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
export const TextInputIcon = styled.i`
	cursor: pointer;
	position: absolute;
	z-index: 3;
	top: calc(100% - 25px);
	left: calc(100% - 30px);
	// user-select: none;
`;

export const TextInputError = styled.span`
	position: relative;
	top: -30px;
	float: left;
	color: red;
	font-size: 14px;
`;

export const TextInputLabel = styled.label`
	user-select: none;
	position: relative;
	float: left;
	top -35px;
	left: 5px;
	color: #aaa;
	cursor: text;
	width: 100%;
	
	transition: all 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);

	${({ focus }) =>
		focus &&
		`
		color: #28aae1;
	`}
	
	${({ lifted, focus }) =>
		(lifted || focus) &&
		`
			transform: scale(.75) translateY(-29px) translateX(-40px);
		`}
		
	${({ error }) =>
		error &&
		`
			color: red;
		`}
`;
