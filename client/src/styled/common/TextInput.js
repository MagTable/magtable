import styled from "styled-components";
import { Input } from "./FormControl";
import PlaneBG from "../../res/Images/Plane_BG.jpg";

export const BlurCover = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	${({ blur }) =>
		blur &&
		` 
		filter: blur(5px);
	`}
	height: 120%;
	width: 120%;
	transition: 0.5s ease-in-out;
`;

export const Background = styled.div`
	background-image: url(${PlaneBG});
	height: calc(100vh + 10px);
	background-size: calc(100vw + 20px);
	background-position: center;
	width: calc(100vw + 20px);
	transform: translate(-10px, -10px);
`;

export const BGContainer = styled.div`
	overflow: hidden;
	position: absolute;
	z-index: -5;
`;

export const TextInputContainer = styled.div`
	position: relative;
`;

/**
 * Text boxes for username and password.
 */
export const TextInput = styled(Input)`
	margin-top: 20px;
	background: transparent;

	padding: 7px;

	border: 0;
	border-bottom: 2px solid black;
	position: relative;
	z-index: 1;
	transition: border 0.3s ease-in-out;
	
	${Background} {
		filter: blur(30px);
	}

	${({ accentColor }) => accentColor && `color: ${accentColor};`}

	${({ fit }) => fit && `width: calc(100% - 14px);`}
	
	${({ focus, accentColor }) =>
		focus &&
		` 
			border-color: ${accentColor || `#28aae1`};
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
	top: calc(100% - 30px);
	width: 45px;
	right: 0;
	user-select: none;
	transition: color 0.3s ease-in-out;

	${({ focus, accentColor }) =>
		focus &&
		`
			color: ${accentColor || ``};
	`}
	
	${({ color }) =>
		color &&
		`
		color: ${color};
	`}

	${({ hoverColor }) =>
		hoverColor &&
		`
		:hover {
			color: ${hoverColor};
		}
	`}
`;

export const TextInputLabel = styled.label`
	user-select: none;
	position: absolute;
	top: 30px;
	left: 5px;
	
	${({ accentColor }) =>
		accentColor ? `color: ${accentColor};` : `color: var(--input-label);`}
	
	cursor: text;
	z-index: 0;
	
	transition: all 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);

	${({ focus, accentColor }) =>
		focus &&
		`
			color: ${accentColor || `#28aae1`};
	`}
	
	${({ lifted, focus }) =>
		(lifted || focus) &&
		`
			transform: scale(.75) translateY(-32px);
	`}
		
	${({ error }) =>
		error &&
		`
			color: red;
	`}
`;
