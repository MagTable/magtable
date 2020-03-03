import styled from "styled-components";
import { Button } from "../common/FormControl";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Wrapper div to hold the truck map and its title.
 **/
export const TruckMapDiv = styled.div`
	display: flex;
	flex-grow: 2.5;
	flex-basis: 0;
	flex-direction: column;
`;

// todo Implement this and style
/**
 * A spot on the parking map where a truck can be assigned.
 */
export const ParkingLocation = styled.div`
	border: 3px solid black;
`;

/**
 * Wrapper div to hold the tower map.
 */
export const TowerMapDiv = styled.div`
	display: flex;
	// flex-grow: 1;
	height: 130px;
`;

/**
 * Wrapper div to hold the tower map div and its title.
 */
export const TowerDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-height: 80px;
	flex-basis: 0;
`;

/**
 * Holds the title and currently assigned employees for each tower role.
 */
export const TowerPositionDiv = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 0;
	border: 2px solid grey;
	flex-direction: column;
	height: 100%;
`;

/**
 * Wrapper for both the truck map and tower map, used for keeping column alignment between them.
 */
export const MapsDiv = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 3;
	flex-basis: 0;
`;

/**
 * Wrapper div for the entire component, keeps all sections in one page.
 */
export const AssignmentContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: calc(100vh - 70px);
`;

/**
 * Holds individual assignments placed in the tower, ensures the section stays a consistent height whilst adding
 * employees.
 */
export const TowerAssignmentWrapper = styled.div`
	max-height: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	height: -webkit-fill-available;
`;

/**
 * Holds the name of an assigned employee and their delete button.
 */
export const AssignedEmployeeDiv = styled.div`
	display: flex;
	height: fit-content;
	justify-content: space-between;
	padding-top: 8px;
	padding-bottom: 8px;
	align-items: center;
	border: 1px solid black;
`;

/**
 * A smaller version of Button specific to tower assignment deletions.
 */
export const DeleteTowerAssignmentBtn = styled(Button)`
	width: fit-content;
	margin-left: 5px;
`;
