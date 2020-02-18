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
    background-color: #545454;
    position: sticky;
`;

/**
 * The text within the ListTitle div.
 */
export const ListTitleText = styled.p`
    padding-left: 30px;
    font-size: 20px;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
`;

/**
 * Title div specific to the tower, since the tower map contains roles that need titles.
 */
export const TowerTitle = styled(ListTitle)`
    background-color: #949494;
`;

/**
 * The text within the TowerTitle div.
 */
export const TowerTitleText = styled(ListTitleText)`
    color: #333333;
    width: fit-content;
`;
