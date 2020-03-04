import styled from "styled-components";

/**
 * @date 2020-02-20
 * @author MJ Kochuk
 * @module Styled
 */

const padHeaderHeight = 30;

/**
 * Header that contains parkinglocation code
 */
export const PadDivHeader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: ${padHeaderHeight}px;
	background: white;
	border-bottom: 2px solid grey;
`;

const PadDropDiv = styled.div`
	position: absolute;
	height: calc(100% - ${padHeaderHeight}px);

	top: ${padHeaderHeight}px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const rightTriangle = `
	&:after {
		position: absolute;
		
		height: 0;
		width: 0;
		top: 25%;
		right: 0;
		
		border-top: solid 10px transparent;
		border-bottom: solid 10px transparent;
		border-left: solid 10px var(--context-green);
		
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
		border-right: solid 10px var(--context-green);
		
		z-index: -1;
		content: "";
	}
`;

export const HalfPadDropDiv = styled(PadDropDiv)`
	z-index: 2;
	position: absolute;
	width: 50%;
	outline: 1px solid pink;
	outline-offset: -3px;
	height: 50px;
	top: calc(100% - 50px);
	
	${({ left, hover }) =>
		left &&
		`
			left: 0;
			${hover && leftTriangle}
		`}
	${({ right, hover }) =>
		right &&
		`
			left: 50%;
			${hover && rightTriangle}
	`}
	

	${({ hover }) => hover && `background: var(--context-green);`}
`;

export const FullPadDropDiv = styled(PadDropDiv)`
	z-index: 1;
	width: 100%;
	font-size: 2rem;

	${({ hover }) => hover && `background: var(--context-green);`}
	span {
		transform: translateY(-20px);
	}
	hover: {
		span {
			transform: translateY(-20px);
		}
	}
`;

/**
 *
 **/
export const PadDiv = styled.div`
	position: relative;
	text-align: center;
	outline: 2px solid black;
	display: flex;
	width: 5rem;
	flex-grow: 1.3;
	flex-basis: 0;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
	position: relative;
	background: ${({ hoverColor }) => hoverColor && `${hoverColor};`};
	margin-bottom: 0.5rem;
`;

export const FakePadDiv = styled.div`
	width: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
	flex-grow: 1;
	flex-basis: 0;
`;

export const PadColumn = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 20px;
	height: 90%;
`;

export const MapWrapper = styled.div`
	padding: 10px;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-around;
	overflow-y: auto;
	align-items: center;
`;

const NumberLabel = styled.div`
	color: grey;
	font-size: 130%;
	font-family: "Noto Sans KR", sans-serif;
`;

export const NumberMiddle = styled(NumberLabel)`
	height: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const NumberTop = styled(NumberLabel)`
	height: 40px;
	width: 100%;
	text-align: center;
`;

export const ClearConfirmDiv = styled.div`
	
`;
