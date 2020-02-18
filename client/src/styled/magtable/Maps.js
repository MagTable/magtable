import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Wrapper div to hold the truck map and its title.
 **/
export const TruckMapDiv = styled.div`
    border: 2px solid var(--border-color);
    display: flex;
    flex-grow: 3.5;
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
    flex-grow: 1;
`;

/**
 * Wrapper div to hold the tower map div and its title.
 */
export const TowerDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 2px solid var(--border-color);
`;

/**
 * Holds the title and currently assigned employees for each tower role.
 */
export const TowerPositionDiv = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    border-right: 2px solid grey;
    flex-direction: column;
`;

/**
 * Wrapper for both the truck map and tower map, used for keeping column alignment between them.
 */
export const MapsDiv = styled.div`
      display: flex;
      flex-direction: column;
      flex-grow: 4;
`;

/**
 * Wrapper div for the entire component, keeps all sections in one page.
 */
export const AssignmentContainer = styled.div`
    display: flex;  
    flex-direction: row;
    height: calc(100vh - 70px);
`;