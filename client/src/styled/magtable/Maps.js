import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const TruckMap = styled.div`
    border: 3px solid black;
    display: flex;
    flex-grow: 3.5;
`;

/**
 *
 */
export const ParkingLocation = styled.div`
    border: 3px solid black;
`;

/**
 *
 */
export const TowerMap = styled.div`
    border: 3px solid black;
    display: flex;
    flex-grow: 1;
`;

export const TowerPosition = styled.div`
    display: flex;
    flex-grow: 1;
    border: 1px solid black;
`;

export const MapsDiv = styled.div`
      display: flex;
      flex-direction: column;
      flex-grow: 4;
`;

export const AssignmentContainer = styled.div`
    display: flex;  
    flex-direction: row;
    height: calc(100vh - 70px);
`;