import styled from "styled-components";
import { Button } from "../common/FormControl";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Provides the correct color code for an employee's label based on their abilities/role
 * @param type The codes representing an employees roles. Can be gp (Green pass), ts (Tower staff), ojt (On the job training) or bl (bay lead)
 */
const getColor = type => {
	switch (type) {
		case DANGER:
			return "--context-red";
		case WARNING:
			return "--alert-warning";
		case SUCCESS:
			return "--context-green";
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
			return "--context-blue";
		}
		case "OOS": {
			return "--context-grey";
		}
		default: {
			return "#fff"; // If an unknown tuck status is provided.
		}
	}
};

/**
 *    Holds the currently available employees and separator divs for start times.
 */
export const EmployeeListDiv = styled.div`
	margin: 0;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	flex-basis: 0;
	min-width: 250px;
	overflow-y: auto;
	overflow-x: hidden;
`;

/**
 * Divides the list of available employees into sections based on start time.
 */
export const StartTimeSeparator = styled.div`
	display: flex;
	background: var(--subsection-title-bg);
	padding-left: 20px;
	color: var(--light-text);
`;

/**
 * Holds the employee list and title for the list.
 */
export const EmployeeListDivWrapper = styled(EmployeeListDiv)`
	border: 2px solid var(--border-color);
`;

/**
 * Holds the content div for an employee shift and the labels representing their abilities.
 */
export const EmployeeListItemDiv = styled.div`
	border-bottom: 2px solid var(--border-color);
	min-height: 75px;
	${({ disabled }) =>
		disabled ? `background-color: var(--shader-grey);` : `cursor: pointer;`}
`;

/**
 * Used per employee shift, holds all pertinent information for the employee's shift.
 */
export const EmployeeListItemContentDiv = styled.div`
	display: inline-block;
	margin-left: 10px;
`;

/**
 * The name of the employee being displayed in their shift's div.
 */
export const EmployeeListItemName = styled.p`
	margin-block-end: 0em;
	font-weight: bold;
`;

/**
 * The time of the employees shift being represented in their shift div.
 */
export const EmployeeListItemTime = styled.p`
	margin-block-start: 0em;
	margin-block-end: 0em;
	font-style: italic;
`;

/**
 * The job description of the employee being represented in the employee's shift divs.
 */
export const EmployeeListItemDesc = styled.p`
	margin-block-start: 0em;
	margin-block-end: 1em;
	font-weight: bold;
	color: var(--emphasis-grey);
`;

/**
 * A label representing the abilities of the employee, displayed in the employee's shift divs.
 */
export const EmployeeLabelDiv = styled.div`
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 2px solid var(--border-color);
    border-top: none;
    width: 20px;
    height: 20px;
    float: right;
    margin-right 2px;
    ${({ type }) =>
			type === "greenPass" && `background-color: var(--context-green);`}
    ${({ type }) =>
			type === "noAvop" && `background-color: var(--context-orange);`}
`;

/**
 *
 **/
export const TruckListDiv = styled.div`
	// border: 2px solid var(--border-color);
	// height: calc(100vh - 73px);
	transition: all 0.15s ease-in-out;
	min-width: 330px;
	margin: 0;
	display: flex;
	flex-direction: column;
	flex-grow: 1.2;
	flex-basis: 0;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const TruckListDivWrapper = styled(TruckListDiv)`
	border: 2px solid var(--border-color);
`;

export const TruckListItemDiv = styled.div`
	transition: all 0.15s ease-in-out;
	border-bottom: 1px solid var(--border-color);
	height: 90px;
	display: flex;
`;

export const TruckProblemsDiv = styled.div`
	transition: all 0.15s ease-in-out;
	display: flex;
	border-top: 1px solid var(--border-color);
	max-height: ${({ noticeOpen }) => (noticeOpen ? "200px" : "0px")};
	min-height: 0px;
	border-top: none;
	overflow: auto;
`;

export const TruckProblemsText = styled.p`
	padding-left: 20px;
	padding-right: 20px;
`;

export const TruckNumberDiv = styled.div`
	background: var(${({ status }) => getTruckColorCode(status)});
	display: flex;
	min-width: 100px;
	justify-content: center;
	align-items: center;
	color: black;
	font-size: 40px;
`;

export const TruckInfoDiv = styled.div`
	display: flex;
	flex-grow: 3;
	justify-content: space-between;
`;

// todo can we change this to a div?
export const TruckListItemEmployee = styled.p`
	margin-block-start: 0em;
	margin-block-end: 0em;
	height: ${({ show }) => (show ? "50%" : "0%")};
	background-color: var(${({ slot }) => (slot === 2 ? "--shader-grey" : "")});
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: height 0.15s ease-in-out;

	${({ warningBackground }) =>
		warningBackground &&
		`
		background: #ff990033;
	`}

	${({ outlineType }) =>
		outlineType &&
		`
			// outline-width: 2px;
			// outline-offset: -2px;
			// outline-style: solid;
			background: var(${getColor(outlineType)});
	`}
`;

export const TruckListItemEmployeeList = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	flex-grow: 4;
	flex-basis: 0;
	height: 100%;
`;

export const TruckListItemLocation = styled.p`
	font-weight: bold;
	align-self: center;
	margin-right: 10px;
	margin-left: 10px;
	flex-grow: 1;
	flex-basis: 0;
`;

export const TruckListButton = styled(Button)`
	font-size: 18px;
	margin-right: 9px;
	width: auto;
	white-space: nowrap;
	padding: 3px;
	background-color: rgb(65, 66, 68);
	color: white;
	padding: 5px;
	border-radius: 20px;
	:hover {
		background: rgb(95, 96, 98) npm install react-switch;
	}
`;

export const TruckListManipDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-right: 3px;
`;

export const TowerListItemEmployee = styled.p`
	margin-block-start: 0em;
	margin-block-end: 0em;
	height: ${({ show }) => (show ? "50%" : "0%")};
	background-color: var(${({ slot }) => (slot === 2 ? "--shader-grey" : "")});
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: height 0.15s ease-in-out;

	${({ warningBackground }) =>
		warningBackground &&
		`
		background: #ff990033;
	`}

	${({ outlineType }) =>
		outlineType &&
		`
			// outline-width: 2px;
			// outline-offset: -2px;
			// outline-style: solid;
			background: var(${getColor(outlineType)});
	`}
`;

// -----------------------------------------------------------------------------------------------------------------------
// For the new version of EmployeeListItem
// -----------------------------------------------------------------------------------------------------------------------
export const UnassignBtn = styled.button`
	float: right;
	position: absolute;
	transform: translate(20px, -20px);
	border-radius: 30px;
	width: 30px;
	height: 30px;
	border: 2px solid grey;
	overflow: hidden;
	white-space: nowrap;
	opacity: 0;
	transition: 0.2s ease-in-out;
	cursor: pointer;
`;

export const EmpWrap = styled.div`
	outline: 2px solid black;
	outline-offset: -1px;
	width: 227px;

	&:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
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

export const Hours = styled.p`
	padding-left: 5px;
	margin-block-start: 0;
	font-style: italic;
	margin-bottom: 3px;
`;

export const LabelWrapper = styled.div`
	background-color: #ffa5a5;
	width: 23px;
	height: 23px;
	transition: 0.3s ease-in-out;
`;

export const LabelText = styled.p`
	margin-block-start: 0;
	margin-block-end: 0;
	margin: 0 5px 0 5px;
	width: 0px;
	overflow: hidden;
	transition: 0.3s ease-in-out;
	white-space: nowrap;
	font-family: "Lato";
`;

export const Labels = styled.div`
	width: 23px;

	:hover {
		width: 100px;
	}
	&:hover ${LabelWrapper} {
		width: 100px;
	}
	&:hover ${LabelText} {
		width: 100px;
	}
`;

export const AssignedToWrap = styled.div`
	display: inline-flex;
	width: 46px;
	height: 46px;
	justify-content: center;
	background-color: #0496b2;
	align-items: center;
	vertical-align: top;
	position: relative;
	transform: translate(1px, 0);
	font-size: 24px;
`;

export const ShiftInfo = styled.div`
	width: 180px;
	display: inline-block;
	text-overflow: ellipsis;
`;

export const EmpRole = styled.h2`
	float: right;
	transform: translate(-12px, -50px);
	color: grey;
	font-size: 17px;
	position: relative;
	z-index: -5;
`;
