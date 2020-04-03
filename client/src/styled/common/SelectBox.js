import styled from "styled-components";

/**
 * @date 2/28/2020
 * @author Steven Wong, Arran Woodruff, MJ Kochuk
 * @category Styled Components
 * @module Common
 */

export const StyledLabel = styled.label`
	user-select: none;
	position: relative;
	float: left;
	top: 30px;
	color: var(--input-label);
	cursor: text;
	z-index: 0;
	
	transition: all 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);

	${({ focus }) =>
		focus &&
		`
			color: #28aae1;
	`}
	
	${({ lifted, focus }) =>
		(lifted || focus) &&
		`
			transform: scale(.75) translateY(-40px);
	`}
		
	${({ error }) =>
		error &&
		`
			color: red;
	`}
`;

export const StyledSelect = styled.select`
	user-select: none;
	position: relative;
	display: block;
	width: 100%;
	border: 0;
	border-bottom: 2px solid black;
	font-family: "Nanum Gothic", sans-serif;
	background: transparent;
	padding: 7px;

	font-size: 20px;
	option {
		font-size: 14px;
	}

	${({ focus }) =>
		focus &&
		` 
			border-color: #28aae1;
	`}
	${({ error }) =>
		error &&
		`
			border-color: var(--context-red);
	`}
`;

export const SelectContainer = styled.div`
	position: relative;
`;
