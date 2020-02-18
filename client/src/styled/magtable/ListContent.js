import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const EmployeeList = styled.div`
    border: 2px solid var(--border-color);
    margin: 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-basis: 0;
    min-width: 250px;
    overflow-y: auto;
`;

export const EmployeeListItem = styled.div`
    border-bottom: 2px solid var(--border-color);
    height: 90px;
    
`;

/**
 *
 **/
export const TruckListDiv = styled.div`
    // border: 2px solid var(--border-color);
    // height: calc(100vh - 73px);
    min-width: 300px;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const TruckListDivWrapper = styled(TruckListDiv)`
    border: 2px solid var(--border-color);
`;

export const TruckListItemDiv = styled.div`
    border-bottom: 2px solid var(--border-color);
    height: 90px;
    display:flex;
`;

export const TruckNumberDiv = styled.div`
    background: var(${props => props.colorCode});
    display: flex;
    min-width: 100px;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
`;

export const TruckInfoDiv = styled.div`
    display: flex;
    flex-grow: 3;
    justify-content: space-between;
    
`;

export const TruckListItemEmployee = styled.p`
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding: 2px;
`;

export const TruckListItemEmployeeList = styled.div`
    display: flex;
    align-self: center;
    margin-left: 10px;
    flex-direction: column;
`;

export const TruckListItemLocation = styled.p`
    font-weight: bold;
    align-self: center;
    margin-right: 10px;
`;
