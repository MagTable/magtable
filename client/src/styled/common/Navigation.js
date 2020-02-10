import styled from 'styled-components';

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Used for holding the AeroMag 2000 logo in the header / navigation bar.
 **/
export const AeroLogo = styled.img`
	height: 60px;
	padding: 10px;
	margin: auto;
`;

/**
 *  A div to hold the NavButtons in the navigation bar.
 **/
export const NavBtnGroup = styled.div`
	position: absolute;
	top: 47px;
	right: 3px;
`;

// /**
//  * A div to hold all the components held in the navigation bar.
//  **/
// export const NavDiv = styled.div`
// 	height: 85px;
// 	width: 100vw;
// 	background-color: #dadada;
// `;

/**
 * A button to bring a user to another page.
 **/
export const NavButton = styled.button`
	// transform: skew(-15deg);
	font-size: 25px;
	border: 4px solid black;
	background-color: #f0f0f0;
	width: 150px;
	margin: -2px;
`;

export const NavIcon = styled.i`
    width: 40px;
    vertical-align: middle;
    padding: 10px 0 10px 0;    
`;

export const NavPane = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    wrap-option: none;
    width: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    `;

export const NavDiv = styled.div`
    padding: 20px 0 20px 20px;
    `;
