import styled from "styled-components";

/**
 * @date 2020-04-01
 * @author MJ Kochuk, Arran Woodruff
 * @module Styled
 */

/**
 * Holds the lists and the weather bar.
 */
export const TVWrap = styled.div`
	display: grid;
	grid-template-rows: auto 1fr;
	grid-template-columns: 1fr auto;
`;

/**
 * Holds the lists.
 **/
export const ViewListDiv = styled.div`
	width: calc(100vw - 200px);
	height: calc(100vh - 70px);
	justify-self: center;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;

export const TowerListWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

export const TowerPadWrap = styled.div`
	width: 100%;
`;

export const WestPadWrap = styled(TowerPadWrap)`
	//border-left: 3px solid grey;
	margin-left: 10px;
`;

/**
 * Holds the vehicle list.
 */
export const VehicleListWrap = styled.div`
	position: relative;
`;

/**
 * For each individual vehicle item.
 */
export const ListItemWrapper = styled.div`
	width: 100%;
	display: flex;
	//border-bottom: 1px solid grey;
	:nth-child(even) {
		background: #9fc6ff70;
	}
`;

/**
 * For trucks that are unassigned.
 */
export const UnassignedWrap = styled.div`
	width: 100%;
	background-color: #d3d3d3;
	:nth-child(odd) {
		background: #bdbdbd;
	}
`;

/**
 * Holds notices for trucks
 */
export const NoticeWrapper = styled.div`
	width: 100%;
	display: flex;
	//border-bottom: 1px solid grey;
	:nth-child(odd) {
		background: #ffd49f9e;
	}
`;

/**
 * Holds the truck's ID.
 */
export const TruckNumDiv = styled.div`
	//height: 25px;
	width: 50px;
	position: relative;
	//border-left: 1px solid grey;
	border-right: 1px solid grey;
	display: flex;
	align-items: center;
	justify-content: center;
`;

/**
 * The list of tower positions.
 */
export const TowerListDiv = styled.div`
	width: 100%;
	display: flex;
	:nth-child(even) {
		background: #9fc6ff70;
	}
`;

/**
 * Each individual tower position.
 */
export const TowerPosDiv = styled(TruckNumDiv)`
	width: 100%;
	border: none;
`;

/**
 * The truck number div for unassigned trucks.
 */
export const TruckNumDivUnassigned = styled(TruckNumDiv)`
	height: 30px;
`;

/**
 * The numerical value representing the trucks ID.
 */
export const TruckNum = styled.span`
	font-size: 20px;
	width: 50px;
	text-align: center;
	font-weight: bold;
`;

/**
 * Holds the name of the tower position.
 */
export const TowerPos = styled(TruckNum)`
	width: 190px;
	padding-left: 5px;
	text-align: left;
	border-right: 1px solid grey;
	height: 100%;
	display: flex;
	align-items: center;
`;

/**
 * The location the truck is assigfned to.
 */
export const AssignedToDiv = styled(TruckNumDiv)`
	width: 80px;
	outline: none;
`;

/**
 * Holds all slots for employees assigned to  a truck.
 */
export const EmployeeWrap = styled.div`
	height: 25px;
	display: flex;
	flex-direction: row;
	width: 100%;
	border-left: 1px solid grey;
	//justify-content: space-between;
	white-space: nowrap;
	outline-offset: -1px;
	font-size: 20px;
`;

export const TowerEmployeeWrap = styled(EmployeeWrap)`
	font-size: 15px;
`;

/**
 * Employee pairings ie. AM or PM.
 */
export const PairedEmpDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	font-family: "Segoe UI", serif;
	justify-content: space-around;
	padding: 0 10px;
	white-space: normal;
`;

/**
 * Employees in the AM slot of a truck.
 */
export const AMEmp = styled(PairedEmpDiv)``;

/**
 * Employees in the PM slot of a truck.
 */
export const PMEmp = styled(PairedEmpDiv)`
	background-color: #9fc6ff70;
`;

/**
 * Holds individual employee names.
 */
export const EmployeeDiv = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	width: 100%;
	justify-content: center;
`;

export const TowerEmployeeDiv = styled(EmployeeDiv)`
	//width: 100px;
	text-align: center;
`;

/**
 * Titles of each list ie Tower, Service Vehicles etc...
 */
export const SectionTitle = styled.h2`
	margin-block-end: 0.05em;
	margin-block-start: 0.2em;
	font-size: 23px;
`;

/**
 * Holds truck notices.
 */
export const TruckNotice = styled.span`
	display: flex;
	align-items: center;
	padding: 0 5px;
`;

/**
 * Fades the end of the list of De-Ice trucks in order to provide a smoother transition/to signify there are more than what is seen.
 */
export const FadeOutDiv = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 25px;
	// Gradient found at https://cssgradient.io/
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
`;

/**
 * The exclamation mark to express there is a notice on the truck.
 */
export const NoticeIcon = styled.i`
	position: absolute;
	right: 0;
	top: 1px;
	color: #ff2800;
`;

/**
 * Holds sections of the TV view at the bottom of the screen.
 */
export const BottomWrap = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	bottom: 0;
	width: 100%;
`;
