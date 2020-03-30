import styled, { keyframes } from "styled-components";

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
 * Wrapper div to hold the truck map and its title.
 **/
export const TruckMapDiv = styled.div`
	display: flex;
	flex-grow: 2.5;
	flex-basis: 0;
	flex-direction: column;
	background: #f4f4f4;
	user-select: none;
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
 * Holds the title and currently assigned employees for each tower role.
 */
export const TowerPositionDiv = styled.div`
	display: flex;
	flex-grow: 1;
	flex-basis: 0;
	outline: 2px solid var(--border-color);
	outline-offset: -1px;
	flex-direction: column;
	animation: 0.3s ${fadeIn} ease-out;
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
