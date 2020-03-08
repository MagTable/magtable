import styled from "styled-components";
import { UnassignBtn } from "./ListContent";

/**
 * @date 2020-02-20
 * @author MJ Kochuk, Arran Woodruff
 * @module Styled
 */

/**
 * Header that contains parkinglocation code
 */
export const PadDivHeader = styled.div`
	grid-area: parking_code;
	background: white;
	border-bottom: 2px solid var(--border-color);
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

const PadDropDiv = styled.div``;

const rightTriangle = `
	&:after {
		position: absolute;
		
		height: 0;
		width: 0;
		top: 25%;
		right: 0;
		
		border-top: solid 10px transparent;
		border-bottom: solid 10px transparent;
		border-left: solid 10px var(--context-green-light);
		
		transform: translateX(100%);
		z-index: -1;
		content: "";
	}
`;
const leftTriangle = `
	&:after {
		position: absolute;
		
		height: 0;
		width: 0;
		top: 25%;
		left: -10px;
		
		border-top: solid 10px transparent;
		border-bottom: solid 10px transparent;
		border-right: solid 10px var(--context-green-light);
		
		z-index: -1;
		content: "";
	}
`;

export const HalfPadDropDiv = styled(PadDropDiv)`
	position: relative;
	font-size: 1.25rem;
	z-index: 1;
	transition: background 0.3s ease-in-out;
	${({ left, hover }) =>
		left &&
		`
			grid-area: left_bay;
			${hover && leftTriangle}
		`}
		
	${({ right, hover }) =>
		right &&
		`
			grid-area: right_bay;
			${hover && rightTriangle}
	`}
	${({ hover }) => hover && `background: var(--context-green-light);`}
	${({ canDrop }) => !canDrop && `background: var(--context-red-light);`}
`;

export const FullPadDropDiv = styled(PadDropDiv)`
	grid-area: 2 / 1 / span 1 / span 2;
	height: 100%;
	z-index: 1;
	font-size: 2rem;
	transition: background 0.3s ease, opacity 0.3s ease, color 0.3s ease,
		outline-color 0.3s ease;

	${({ hover }) => hover && `background: var(--context-green-light);`}
	${({ hover, canDrop }) =>
		hover &&
		!canDrop &&
		`background: var(--context-red-light);`}
		
	outline: 4px solid transparent;
	outline-offset: -4px;
	${({ isBaylead }) =>
		isBaylead &&
		`
			color: var(--context-blue);
			outline-color: var(--context-blue-light);
	`}
`;

const LocationAssignment = styled.div`
	position: relative;
	transition: background 0.3s ease-in-out, color 0.3s ease,
		outline-color 0.3s ease;

	:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}
	${({ hover }) => hover && `background: var(--context-green-light);`}
	${({ isDragging }) =>
		isDragging &&
		`opacity: 0.5; background: var(--context-grey);`}
	
	/* baylead styling */
	outline: 4px solid transparent;
	outline-offset: -4px;
	${({ isBaylead }) =>
		isBaylead &&
		`
			color: var(--context-blue);
			outline-color: var(--context-blue-light);
	`}

	${({ hover, canDrop }) =>
		hover && !canDrop && `background: var(--context-red-light);`}
`;

export const CenterAssigned = styled(LocationAssignment)`
	display: inline-grid;
	vertical-align: middle;
	align-items: center;
	width: 100%;
	height: 100%;
`;
export const LeftAssigned = styled(LocationAssignment)`
	grid-area: left_assigned;

	display: inline-grid;
	vertical-align: middle;
	align-items: center;

	z-index: 2;
	border-right: 1px solid var(--border-color);
`;
export const RightAssigned = styled(LocationAssignment)`
	z-index: 2;
	display: inline-grid;
	vertical-align: middle;
	border-left: 1px solid var(--border-color);
	align-items: center;

	grid-area: right_assigned;
`;

/**
 *
 **/
export const PadDiv = styled.div`
	position: relative;
	text-align: center;
	border: 2px solid var(--border-color);
	width: 100%;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.16), 0 0 12px rgba(0, 0, 0, 0.33);
	background: white;

	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;

	min-width: 65px;
	max-width: 100px;
	max-height: 130px;
	min-height: 100px;

	flex-grow: 1.3;
	flex-basis: 0;

	font-size: 1.75rem;
	font-family: "Noto Sans KR", sans-serif;
	color: var(--border-color);
	margin-bottom: 0.5rem;
	background: ${({ hoverColor }) => hoverColor};

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		"parking_code parking_code"
		"left_assigned right_assigned"
		"left_bay right_bay";
`;

export const FakePadDiv = styled.div`
	display: flex;
	width: 100%;
	min-width: 65px;
	max-width: 100px;
	max-height: 130px;
	flex-grow: 1.3;
	flex-basis: 0;
`;

export const PadColumn = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const MapWrapper = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
	height: 100%;
	overflow-y: auto;
	align-items: center;
`;

export const SafetyZoneWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const NumberLabel = styled.div`
	color: grey;
	font-size: 130%;
	font-family: "Noto Sans KR", sans-serif;
`;

export const NumberMiddle = styled(NumberLabel)`
	height: 100%;
	padding: 0 0.5rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const NumberTop = styled(NumberLabel)`
	height: 40px;
	width: 100%;
	text-align: center;
`;

export const ClearConfirmDiv = styled.div``;
