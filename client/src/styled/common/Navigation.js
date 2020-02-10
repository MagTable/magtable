import styled from 'styled-components';

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
	height: 60px;
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
	width: 150px;
	margin: -2px;
`;

export const NavIcon = styled.i`
	width: 40px;
	vertical-align: middle;
	// padding: 0px 0 10px 0;
`;

export const MenuTip = styled.div`
	font-size: 25px;
	padding-top: 10px;
	cursor: pointer;
`;

export const MenuTipIcon = styled.a`
	transition-duration: 1s;
	transform: ${({ open }) => (open ? 'rotate(360deg)' : 'rotate(270deg)')};
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
	background-color: #dadada;
	position: absolute;
	top: 80px;
	right: 0px;
	height: ${({ open }) => (open ? '145px' : '0px')};
`;
//

export const NavDiv = styled.div`
	padding: 20px 0px 20px 20px;
	width: 190px;
	overflow: hidden;
	transition: all 0.2s ease-in-out;
`;

export const HeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #cacaca;
	height: 100px;
`;

export const NavLink = styled.a`
	width: 200px;
	cursor: pointer;
	padding: 10px 0px 15px 20px;
`;
