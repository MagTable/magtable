import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * A block to hold the title for a section of the Mag Table eg. Employees, Trucks, Parking Locations, Tower.
 **/
export const ListTitle = styled.div`
	background-color: var(--section-title-bg);
	display: flex;
	position: sticky;
	min-height: 50px;
	align-items: center;
	justify-content: space-between;
`;

/**
 * The text within the ListTitle div.
 */
export const ListTitleText = styled.p`
	padding-left: 20px;
	font-size: 20px;
	color: white;
	font-family: "Noto Sans KR", sans-serif;
	margin-block-start: 0em;
	margin-block-end: 0em;
	display: flex;
	flex-direction: row;
`;

/**
 * Subtitle for lists, refer to employee shift list
 * todo make it appear on the next line
 */
export const ListSubtitle = styled.h4`
	color: white;
`;

/**
 * Title div specific to the tower, since the tower map contains roles that need titles.
 */
export const TowerTitle = styled(ListTitle)`
	background-color: #949494;
	justify-content: center;
`;

/**
 * The text within the TowerTitle div.
 */
export const TowerTitleText = styled(ListTitleText)`
	color: #333333;
	width: fit-content;
	padding-left: 0px;
`;
