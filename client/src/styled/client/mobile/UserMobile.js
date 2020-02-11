import styled from "styled-components";

/**
 * @date 2020-02-10
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Holds the individual data for each user, ie. user level description, name.
 **/
export const MobileUserListItem = styled.div`
    width: 100vw;
    height: 40px;
    background-color: #F0F0F0;
    border-top: 2px solid #DADADA;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 20px;
    padding-left: 15px; 
    `;

export default UserMobile;