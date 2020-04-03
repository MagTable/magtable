import styled, { keyframes } from "styled-components";
import { DangerButton } from "../common/FormControl";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Arran Woodruff
 * @category Styled Components
 * @module MagTable
 */

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * Provides the correct color code for an employee's label based on their abilities/role
 * @param type The codes representing an employees roles. Can be gp (Green pass), ts (Tower staff), ojt (On the job training) or bl (bay lead)
 */
export const getColor = type => {
	switch (type) {
		case DANGER:
			return "--context-red-light";
		case WARNING:
			return "--alert-warning";
		case SUCCESS:
			return "--context-green-light";
		default:
			return "#fff";
	}
};

/**
 * Provides the correct color code for a truck based on the status of the truck.
 * @param status The status of the truck. Can be GO (Operational), INOP (Inoperable), CON (Conditional) or OOS(Out of service)
 */
const getTruckColorCode = status => {
	switch (status) {
		case "GO": {
			return "--context-green";
		}
		case "INOP": {
			return "--context-red";
		}
		case "CON": {
			return "--context-orange";
		}
		case "OOS": {
			return "--context-grey";
		}
		default: {
			return "#fff"; // If an unknown truck status is provided.
		}
	}
};

export const UnassignBtn = styled.button`
	position: absolute;
	border-bottom-left-radius: 5px;
	font-size: 0.7rem;
	padding: 0;
	text-align: center;
	width: 1rem;
	height: 1rem;
	top: 0;
	right: 0;
	border: 0;
	opacity: 0;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	z-index: 1;
	background: var(--context-red);
	color: white;

	:hover {
		display: block;
		opacity: 1;
	}

	${({ disabled }) =>
		disabled &&
		`
		background: var(--context-grey);
		color: var(--header-text);
		:hover {
			background: var(--context-grey-light);
		}
	`}
`;

/**
 *    Holds the currently available employees and separator divs for start times.
 */
export const EmployeeListDiv = styled.div`
	overflow-y: auto;
	animation: 0.3s ${fadeIn} ease-out;
`;

/**
 * Holds the employee list and title for the list.
 */
export const EmployeeListDivWrapper = styled.div`
	border-right: 2px solid var(--border-color);
	max-width: 300px;
	min-width: 275px;
	display: grid;
	grid-template-rows: 50px auto 1fr;
`;

/**
 * Holds the content div for an employee shift and the labels representing their abilities.
 */
export const EmployeeListRefreshInfo = styled.div`
	border-top: 1px solid var(--border-color);
	border-bottom: 1px solid var(--border-color);
	margin-bottom: -1px;
	padding: 0.75rem;
	h4 {
		margin: 0;
	}
`;

/**
 **/
export const TruckListDiv = styled.div`
	overflow-y: auto;
	animation: 0.3s ${fadeIn} ease-out;
`;

export const TruckListDivWrapper = styled.div`
	border-right: 2px solid var(--border-color);
	max-width: 380px;
	width: 350px;
	min-width: 340px;

	display: grid;
	grid-template-rows: 50px 1fr;
`;

export const ManipTruckManipIconDiv = styled.div`
	width: auto;
	align-items: center;
	justify-items: end;
	opacity: 0;
	display: flex;
	transition: 0.3s ease-in-out;
`;

export const TruckStatusCounterItem = styled.span`
	text-align: center;

	transition: opacity 0.3s ease-in-out;

	margin: 0;
	opacity: 0;
	cursor: pointer;
	
	${({ GO }) => GO && `color: var(--context-green)`}
	${({ CON }) => CON && `color: var(--context-orange)`}
	${({ OOS }) => OOS && `color: var(--context-grey)`}
	${({ INOP }) => INOP && `color: var(--context-red)`}
`;

export const TruckListItemDiv = styled.div`
	transition: all 0.15s ease-in-out;
	display: flex;
	height: 60px;
	margin: auto;
	text-overflow: ellipsis;
	&:hover ${ManipTruckManipIconDiv} {
		// display: flex;
		opacity: 1;
		transition: 0.3s ease-in-out;
	}

	${({ disabled }) =>
		disabled &&
		`
		height: 40px;
		background: var(--shader-grey);
	`}
`;

export const TruckListManipulateBlock = styled.div`
	display: flex;
	width: 100%;
	margin: 0.5rem;
	background-color: #f2faff;
	border-radius: 0.5rem;
	text-overflow: ellipsis;
	min-height: 65px;

	:hover {
		background-color: #dff3ff;
	}

	&:hover ${ManipTruckManipIconDiv} {
		// display: flex;
		opacity: 1;
		transition: 0.3s ease-in-out;
	}

	:not(ManipTruckManipIconDiv) {
		animation: 0.3s ${fadeIn} ease-out;
	}
`;

export const TruckStatusBox = styled.div`
	width: 100%;
	display: block;
	align-self: center;
	align-items: center;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-left: 5px;
`;

export const TruckNoticeDiv = styled.div`
	overflow: hidden;
	transition: all 0.25s ease-in-out;
	max-height: ${({ noticeOpen }) => (noticeOpen ? "200px" : "0px")};
	border-bottom: 1px solid var(--border-color);
`;

export const TruckProblemsText = styled.p`
	margin: 0;
	padding: 0.5rem;

	overflow-wrap: break-word;
	hyphens: auto;

	border-top: 1px solid var(--border-color);
`;

export const BrixButton = styled.i`
	font-size: 15px;
	transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
	color: var(--context-blue-light);

	position: absolute;
	top: 3px;
	left: 3px;

	display: none;
	opacity: 0;

	:hover {
		display: block;
		opacity: 1;
		color: var(--context-blue);
		transform: scale(1.15);
	}

	${({ disabled }) =>
		disabled &&
		`
		// disabled truckListItems have a smaller height so the icon needs to be a bit smaller
		
		font-size: 12px;	
		bottom: 1px;
		left: 1px;
	`}
`;

export const TruckNoticeIndicator = styled.i`
	font-size: 15px;
	transition: color 0.3s ease-in-out;
	color: var(--context-orange-light);
	position: absolute;
	bottom: 3px;
	left: 3px;

	${({ disabled }) =>
		disabled &&
		`
		// disabled truckListItems have a smaller height so the icon needs to be a bit smaller
		
		font-size: 12px;	
		bottom: 1px;
		left: 1px;
	`}

	${({ active }) =>
		active &&
		`
		color: var(--context-orange);
	`}
	
	:hover {
		color: var(--context-orange);
	}
`;

export const TruckNumberDiv = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	transition: background 0.3s ease-in-out;

	border-right: 10px solid var(${({ status }) => getTruckColorCode(status)});
	color: black;

	min-width: 60px;
	font-size: 30px;
	font-weight: bold;

	${({ isDragging }) => isDragging && `opacity: 0.5;`}
	${({ disabled }) =>
		disabled &&
		`
		background: white;
		font-size: 25px;
	`}
	${({ assigned }) =>
		assigned &&
		`
		background: var(--context-grey-light);
	`}
	
	:hover {
		${BrixButton} {
			display: block;
			opacity: 1;
		}	
	}
`;

export const TruckInfoDiv = styled.div`
	display: flex;
	flex-grow: 3;
	justify-content: space-between;
`;

/**
 * Rendered instead of the employee slots for inop and oos trucks
 */
export const TruckStatusMessage = styled.h4`
	width: 100%;
	text-align: center;
	background: var(--context-orange-light);
	margin: 0;
	padding: 0.6rem 0;
	#status_code {
		background: var(${({ status }) => getTruckColorCode(status)});
		border-radius: 999px;
		padding: 0.25rem 0.5rem;
	}
`;

export const TruckListItemLocation = styled.div`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 4.5rem;

	border-left: 2px solid var(--border-color);

	font-size: 1.5rem;
	text-align: center;
	font-family: "Noto Sans KR", sans-serif;

	&:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}

	span {
		animation: 0.3s ${fadeIn} ease-out;
	}
`;

export const TruckListManipDiv = styled.div`
	display: grid;
	grid-template-columns: 60px 60px;
	grid-column-gap: 10px;
	margin: 10px;
`;

export const EquipmentListItemButton = styled(DangerButton)`
	transition: opacity 0.3s ease-in-out;
	opacity: 0;
	text-align: center;
	padding: 0;
	width: 1.25rem;
	height: 1.25rem;
	font-size: 13px;
	color: white;
	border-radius: 30px;
	display: none;
	:hover {
		opacity: 1;
		display: block;
	}

	${({ disabled }) =>
		disabled &&
		`
		background: var(--context-grey);
		color: var(--header-text);
		:hover {
			background: var(--context-grey-light);
		}
	`}
`;

export const EquipmentListItemEmployeeList = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	flex-grow: 4;
	flex-basis: 0;
	height: 100%;
	width: 100%;
`;

export const EquipmentListItemEmployee = styled.div`
	display: grid;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	grid-template-columns: 1fr auto 1.25rem;
	grid-template-areas: "name warning clearbutton";
 	align-items: center;
 	height: 50%;

	transition: height 0.15s ease-in-out;
	overflow: hidden;
	
	${({ isBaylead }) =>
		isBaylead &&
		`
		color: var(--context-blue); 
		font-weight: bold;
	`}
	
	${({ darken }) => darken && "background-color: var(--shader-grey);"}
	
	${({ outlineType }) =>
		outlineType && `background: var(${getColor(outlineType)});`}
		
	&:hover ${EquipmentListItemButton} {
		opacity: 1;
		display: block;
	}
`;

export const EquipmentListItemEmployeeName = styled.div`
	grid-area: name;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	transition: transform 0.3s ease;
	transform: translateX(0);
	${({ show, offPosition }) =>
		show
			? `
			transform : translateY(0);	
		`
			: `
			transform : translateY(${offPosition}%);
		`}
`;
export const EquipmentListItemEmployeeWarning = styled.div`
	grid-area: warning;
	display: flex;
	align-items: center;
`;
export const EquipmentListItemEmployeeClearButton = styled.div`
	grid-area: clearbutton;
	display: flex;
	align-items: center;
`;

/*---------------------------------------------------------------------------
 *  For the new version of EmployeeListItem
 *---------------------------------------------------------------------------*/

/**
 * Divides the list of available employees into sections based on start time.
 */
export const ListSeparator = styled.div`
	font-weight: bold;
	font-size: 125%;
	padding: 0.5rem 1rem;
	margin: 0;
	background: var(--header);
	display: flex;
	justify-content: space-around;

	border-bottom: 1px solid var(--border-color);
	:first-child {
		border-top: 1px solid var(--border-color);
	}

	:hover {
		${TruckStatusCounterItem} {
			opacity: 1;
		}
	}
`;

export const EmpName = styled.div`
	padding: 5px 0 0 5px;
	margin-block-start: 0;
	margin-block-end: 0;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-weight: bold;
`;

export const EmpHours = styled.p`
	padding-left: 5px;
	margin-block-start: 0;
	font-style: italic;
	margin-bottom: 3px;
	white-space: nowrap;
`;

export const LabelWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	${({ type }) =>
		type === "greenPass" && `background-color: var(--green-pass);`}
	${({ type }) =>
		type === "noAvop" && `background-color: var(--no-avop);`}
		
	width: 13px;
	max-width: 13px;
	max-height: 15px;

	transition: 0.3s ease-in-out;
	position: relative;
	z-index: 1;
	padding: 3px;

	:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
`;

export const LabelText = styled.div`
	width: 0;
	overflow: hidden;
	transition: 0.3s ease-in-out;
	white-space: nowrap;
	font-family: "Noto Sans", sans-serif;
	opacity: 0;
`;

export const Labels = styled.div`
	grid-area: labels;

	:hover {
		${LabelWrapper}, ${LabelText} {
			width: 90px;
			max-width: 90px;
		}
		${LabelText} {
			opacity: 1;
		}
	}
`;

export const AssignedToWrap = styled.div`
	position: relative;
	background-color: #0496b2;
	grid-area: equipmentID;

	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	h2 {
		overflow: hidden;
		text-align: center;
		margin: 0;
		${({ isTower }) =>
			isTower &&
			`
			font-size: 10px;
		`}
	}
`;

export const ShiftInfo = styled.div`
	text-overflow: ellipsis;
	grid-area: name;
`;

export const EmpRole = styled.h2`
	display: flex;
	align-self: end;
	justify-content: flex-end;

	margin: 0;
	padding: 0 2px 5px 0;
	text-align: right;
	white-space: nowrap;
	color: grey;
	font-size: 17px;
	z-index: 0;
	grid-area: position;
`;

export const EmpListItemDiv = styled.div`
	width: 100%;
	border-bottom: 1px solid var(--border-color);

	display: grid;
	grid-template-columns: 50px 1fr 48px;
	grid-template-rows: auto auto;
	grid-template-areas:
		"name name equipmentID"
		"labels position position";
	align-items: end;

	&:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}

	${({ disabled }) =>
		disabled ? `background-color: var(--shader-grey);` : `cursor: pointer;`}
`;
