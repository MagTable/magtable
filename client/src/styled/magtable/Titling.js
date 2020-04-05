import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @category Styled Components
 * @module MagTable
 */

/**
 * A block to hold the title for a section of the Mag Table.js eg. Employees, Trucks, Parking Locations, Tower.
 **/
export const ListTitle = styled.div`
	background-color: var(--header);
	color: var(--header-text);
	display: flex;
	min-height: 50px;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	padding: 0 1rem;
`;

export const TruckMgmtTitle = styled(ListTitle)``;

/**
 * The text within the ListTitle div.
 */
export const ListTitleText = styled.p`
	width: 100%;
	font-size: 20px;
	font-family: "Noto Sans KR", sans-serif;
	margin: 0;
	display: flex;
	flex-direction: row;
`;

/**
 * Title div specific to the tower, since the tower map contains roles that need titles.
 */
export const TowerTitle = styled.div`
	background-color: var(--header);
	justify-content: center;
	border-bottom: 1px solid var(--border-color);
`;

/**
 * The text within the TowerTitle div.
 */
export const TowerTitleText = styled(ListTitleText)`
	color: var(--sub-header-text);
	width: fit-content;
	padding: 0.5rem;

	@media (max-height: 770px) {
		font-size: 1.2rem;
	}
`;
