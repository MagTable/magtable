import styled from 'styled-components';
import {Link} from "react-router-dom";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Styled
 */

let opened = false;

/**
 * Used for holding the AeroMag 2000 logo in the header / navigation bar.
 **/
export const AeroLogo = styled.img`
	height: 35px;
	padding: 20px;
	z-index: 20;
`;

/**
 *  A div to hold the NavButtons in the navigation bar.
 **/
export const NavBtnGroup = styled.div`
	position: absolute;
	top: 47px;
	right: 3px;
`;

/**
 * A button to bring a user to another page.
 **/
export const NavButton = styled.button`
	// transform: skew(-15deg);
	font-size: 25px;
	border: 4px solid black;
	background-color: #f0f0f0;
	width: 170px;
	margin: -2px;
`;

export const NavIcon = styled.i`
    width: 45px;
    vertical-align: middle;
    float: left;
    // padding: 0px 0 10px 0; 
`;

export const MenuTip = styled.div`
    padding-top: 5px;
    cursor: pointer;
    transform: scale(1.2);
`;

export const MenuTipIcon = styled.a`
    transition-duration: 1s;
    transform: ${({open}) => open ? 'rotate(360deg)' : 'rotate(270deg)'};
    margin-right: 10px;
    cursor: pointer;
`;

export const NavPane = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    wrap-option: none;
    overflow: hidden;
    transition: all 0.15s ease-in-out;
    background-color: #DEDEDE;
    position: absolute;
    top: 70px;
    right: 0px;
    height: ${({open}) => open ? '195px' : '0px'};
    z-index: 100;
    `;
//

export const NavDiv = styled.div`
    padding: 20px 0px 20px 20px;
    width: 110px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
`;


export const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    height: 70px;
    border-bottom: 2px solid #DEDEDE;
    
`;

export const NavLink = styled(Link)`
    width: 100vw;
    cursor: pointer;
    padding: 20px 0px 20px 0px;
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 20px;
    border-bottom: 2px solid #DADADA;
    `;
