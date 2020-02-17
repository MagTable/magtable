import styled from "styled-components";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const TruckList = styled.div`
    border: 3px solid black;
    // height: calc(100vh - 73px);
    // min-width: 300px;

    margin: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1
`;

export const TruckListItemDiv = styled.div`
    border: 3px solid black;
    height: 90px;
    display:flex;
`;

export const TruckNumberDiv = styled.div`
    background: grey;
    display: flex;
    flex-grow: 1;
`;

export const TruckInfoDiv = styled.div`
    display: flex;
    flex-grow: 3;
`;