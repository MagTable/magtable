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
export const getColor = type => {
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

/**
 *    Holds the currently available employees and separator divs for start times.
 *    todo would like to set a max width on this - arran
 */
export const EmployeeListDiv = styled.div`
	margin: 0;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	flex-basis: 0;
	min-width: 180px;
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
	border-right: 2px solid var(--border-color);
	max-width: 234px;
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
 * todo would like to set a max width on this - arran
 **/
export const TruckListDiv = styled.div`
	border-right: 2px solid var(--border-color);
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

export const TruckListDivWrapper = styled(TruckListDiv)``;

export const TruckListItemDiv = styled.div`
	transition: all 0.15s ease-in-out;
	border-bottom: 1px solid var(--border-color);
	height: 55px;
	display: flex;

	${({ disabled }) =>
		disabled &&
		`
		height: 40px;
		background: var(--shader-grey);
	`}
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
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	border-right: 10px solid var(${({ status }) => getTruckColorCode(status)});
	color: black;

	min-width: 60px;
	font-size: 40px;

	${({ isDragging }) => isDragging && `opacity: 0.5;`}
	${({ disabled }) =>
		disabled &&
		`
		font-size: 25px;
	`}
`;

export const TruckInfoDiv = styled.div`
	display: flex;
	flex-grow: 3;
	justify-content: space-between;
`;

export const TruckStatusMessage = styled.h4`
	width: 100%;
	text-align: center;
	background: var(--shader-grey);
	margin: 0;
	padding: 0.6rem 0;
`;

export const TruckListItemEmployee = styled.div`
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

export const TruckListItemLocation = styled.input`
	height: calc(100% -2px);
	flex-grow: 1;
	flex-basis: 0;
	border: 0;
	max-width: 80px;
	border-left: 2px solid var(--border-color);
	font-size: 1.5rem;
	text-align: center;
	font-family: "Noto Sans KR", sans-serif;
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
			background: var(${getColor(outlineType)});
	`}
	
	justify-content: space-between;
	padding-left: 15px;
`;

export const TowerListEmployeeMgmt = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: 15px;
`;

// -----------------------------------------------------------------------------------------------------------------------
// For the new version of EmployeeListItem
// -----------------------------------------------------------------------------------------------------------------------
export const UnassignBtn = styled.button`
	float: right;
	position: absolute;
	transform: translate(-23px, -24px);
	border-radius: 30px;
	width: 30px;
	height: 30px;
	border: 2px solid grey;
	overflow: hidden;
	white-space: nowrap;
	opacity: 0;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	z-index: 1;
`;

export const EmpWrap = styled.div`
	outline: 2px solid black;
	outline-offset: -1px;
	width: 227px;
	transform: translateY(-45px);
	position: relative;
	z-index: 0;

	&:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}

	${({ disabled }) =>
		disabled ? `background-color: var(--shader-grey);` : `cursor: pointer;`}
`;

export const EmpName = styled.div`
	width: 172px;
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
	white-space: nowrap;
`;

export const LabelWrapper = styled.div`
	${({ type }) =>
		type === "greenPass" && `background-color: var(--context-green);`}
	${({ type }) =>
		type === "noAvop" && `background-color: var(--context-orange);`}
	width: 23px;
	height: 23px;
	transition: 0.3s ease-in-out;
	position: relative;
	z-index: 1;
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
	transform: translate(1px, 1px);
	height: 46px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
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
	transform: translate(180px, 2px);
	font-size: 24px;
	z-index: 1;
`;

export const ShiftInfo = styled.div`
	width: 180px;
	text-overflow: ellipsis;
`;

export const EmpRole = styled.h2`
	float: right;
	transform: translate(-12px, -50px);
	color: grey;
	font-size: 17px;
	position: relative;
	z-index: -1;
`;

export const EmpListItemDiv = styled.div`
	height: 92px;
	&:hover ${UnassignBtn} {
		display: block;
		opacity: 1;
	}
`;
