import styled from "styled-components";

/**
 *
 **/
export const UserListItem = styled.div`
    width: 20vw;
    height: 40px;
    background-color: #F0F0F0;
    border-top: 2px solid #DADADA;
    justify-content: center;
    // display: table-cell;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-transform: capitalize;
    `;


/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Styled
 */

export const UserListRow = styled.div`
    // display: table-row;
    align-content: center;
    justify-content: center;
    display: flex;
    width: 80vw;
    padding-top: 5px;
    margin: auto;
    `;

// height: ${({isSelected}) ? '60px' : '90px'} ;

export const UserListHeader = styled.div`
    display: table-row;
    `;

export const UserListHeaderRow = styled.div`
    display: table-cell;
    `;


export const ManipImg = styled.i`
    width: 30px;
    cursor: pointer;
    `;

export const UserManipulateBlock = styled.div`
    display: flex;
    width: 50px;
    height: 40px;
    background-color: #F0F0F0;
    border-top: 2px solid #DADADA;
    display: flex;
    align-items: center;
    justify-content: center;
    `;