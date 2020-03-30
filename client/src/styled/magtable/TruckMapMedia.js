import styled, { keyframes } from "styled-components";
import { UnassignBtn } from "./ListContent";
import { Button } from "../common/FormControl";

/**
 * @date 2020-02-20
 * @author MJ Kochuk, Arran Woodruff
 * @category Styled Components
 * @module MagTable
 */

const scrollIn = keyframes`
	from {
    // transform: scale(0);
		// transform: translateY(-100%);
    opacity: 0;
  }

  to {
    // transform: scale(100%);
		// transform: translateY(0);
    opacity: 1;
  }
`;

/**
 * Header that contains parkinglocation code
 */
export const PadDivHeader = styled.div`
	grid-area: parking_code;
	border-bottom: 2px solid var(--border-color);
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

export const HalfPadDropDiv = styled.div`
	position: relative;
	font-size: 1.75rem;
	@media (max-height: 770px) {
		font-size: 1.5rem;
	}
	
	z-index: 1;
	transition: background 0.3s ease-in-out;
	${({ left }) =>
		left &&
		`
			grid-area: left_bay;
			border-bottom-left-radius: 18px;
	`}
		
	${({ right }) =>
		right &&
		`
			grid-area: right_bay;
			border-bottom-right-radius: 18px;
	`}
	${({ hover }) => hover && `background: var(--context-green-light);`}
	${({ canDrop }) => !canDrop && `background: var(--context-red-light);`}
`;

export const FullPadDropDiv = styled.div`
	grid-area: 2 / 1 / span 1 / span 2;
	height: 100%;
	z-index: 1;
	font-size: 1.75rem;
	@media (max-height: 770px) {
		font-size: 1.5rem;
	}
	transition: background 0.3s ease, opacity 0.3s ease, color 0.3s ease,
		outline-color 0.3s ease;

	border-bottom-right-radius: 18px;
	border-bottom-left-radius: 18px;

	${({ hover }) =>
		hover &&
		`
		background: var(--context-green-light);
	`}
	${({ hover, canDrop }) =>
		hover &&
		!canDrop &&
		`
		background: var(--context-red-light);
	`}
		
	outline: 4px solid transparent;
	outline-offset: -4px;
	${({ isBaylead }) =>
		isBaylead &&
		`
			background: var(--context-blue-light);
	`}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LocationAssignment = styled.div`
	position: relative;
	transition: background 0.3s ease-in-out, color 0.3s ease,
		outline-color 0.3s ease;
	height: 100%;

	:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}
	${({ hover }) => hover && `background: var(--context-green-light);`}
	${({ isDragging }) =>
		isDragging &&
		`
			opacity: 0.5; 
			background: var(--context-grey);
		`}
	
	/* baylead styling */
	outline: 4px solid transparent;
	outline-offset: -4px;
	${({ isBaylead }) =>
		isBaylead &&
		`
			background: var(--context-blue-light);
	`}

	${({ hover, canDrop }) =>
		hover && !canDrop && `background: var(--context-red-light);`}
		
	div {
		animation: 0.3s ${fadeIn} ease-out;
	}
`;

export const CenterAssigned = styled(LocationAssignment)`
	display: inline-grid;
	vertical-align: middle;
	align-items: center;
	width: 100%;
	height: 100%;
	border-bottom-right-radius: 18px;
	border-bottom-left-radius: 18px;
`;
export const LeftAssigned = styled(LocationAssignment)`
	grid-area: left_assigned;

	display: inline-grid;
	vertical-align: middle;
	align-items: center;

	border-right: 1px solid var(--border-color);
	border-bottom-left-radius: 18px;

	z-index: 2;
`;
export const RightAssigned = styled(LocationAssignment)`
	grid-area: right_assigned;

	display: inline-grid;
	vertical-align: middle;
	align-items: center;

	border-left: 1px solid var(--border-color);
	border-bottom-right-radius: 18px;

	z-index: 2;
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

	transition: transform 0.3s ease-in-out;
	border-bottom-right-radius: 20px;
	border-bottom-left-radius: 20px;

	min-width: 65px;
	max-width: 100px;
	max-height: 130px;
	min-height: 100px;

	flex-grow: 1.3;
	flex-basis: 0;

	font-size: 1.75rem;
	@media (max-height: 770px) {
		font-size: 1.2rem;
	}

	font-family: "Noto Sans KR", sans-serif;
	color: var(--border-color);
	margin-bottom: 0.75rem;
	background: ${({ hoverColor }) => hoverColor};

	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto 1fr auto;
	grid-template-areas:
		"parking_code parking_code"
		"left_assigned right_assigned"
		"left_bay right_bay";

	animation: ${scrollIn} 1s ease;

	${({ isOver }) =>
		isOver &&
		`
		transform: scale(1.1);
	`}
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
	animation: ${scrollIn} 0.5s ease;
`;

export const NumberTop = styled(NumberLabel)`
	height: 30px;
	width: 100%;
	text-align: center;
	animation: ${scrollIn} 0.5s ease;
`;

export const ClearConfirmDiv = styled.div``;

export const MagTableManipDiv = styled.div`
	display: grid;
	grid-template-columns: 100px 100px;
	grid-column-gap: 10px;
	margin: 10px;
`;

export const MagTableManipBtn = styled(Button)`
	border-radius: 20px;
	height: 28px;
`;
