import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/*
   Labels:
        gp: green pass
        ojt: on the job training
        ts: tower staff
        bl: bay lead
 */
const getLabelColor = label => {
    switch (label) {
        case "gp":
            return "--context-green";
        case "ojt":
            return "--context-orange";
        case "ts":
            return "--context-grey";
        case "bl":
            return "--context-blue";
        default:
            return "#fff";
    }
};

/**
 *
 **/
export const EmployeeListDiv = styled.div`
    margin: 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-basis: 0;
    min-width: 250px;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const EmployeeListDivWrapper = styled(EmployeeListDiv)`
    border: 2px solid var(--border-color);
`;

export const EmployeeListItem = styled.div`
    border-bottom: 2px solid var(--border-color);
    min-height: 75px; 
`;

export const EmployeeListItemContentDiv = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

export const EmployeeListItemName = styled.p`
    margin-block-end: 0em;
    font-weight: bold;
`;

export const EmployeeListItemTime = styled.p`
    margin-block-start: 0em;
    font-style: italic;
`;

export const EmployeeLabelDiv = styled.div`
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 2px solid var(--border-color);
    border-top: none;
    width: 20px;
    height: 20px;
    background-color: var(${({label}) => getLabelColor(label)});
    float: right;
    margin-right 2px;
`;

/**
 *
 **/
export const TruckListDiv = styled.div`
    // border: 2px solid var(--border-color);
    // height: calc(100vh - 73px);
    transition: all 0.15s ease-in-out;
    min-width: 300px;
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1.2;
    flex-basis: 0;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const TruckListDivWrapper = styled(TruckListDiv)`
    border: 2px solid var(--border-color);
`;

export const TruckListItemDiv = styled.div`
    transition: all 0.15s ease-in-out;
    border-top: 1px solid var(--border-color);
    height: 90px;
    display:flex;
`;

export const TruckProblemsDiv = styled(TruckListItemDiv)`
    max-height: ${({ open }) => (open ? "150px" : "0px")};
    min-height: ${({ open }) => (open ? "130px" : "0px")};
    border-top: none;
    overflow: auto;
`;

export const TruckNumberDiv = styled.div`
    background: var(${props => props.colorCode});
    display: flex;
    min-width: 100px;
    justify-content: center;
    align-items: center;
    color: black;
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
