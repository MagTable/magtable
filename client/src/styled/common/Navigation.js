import styled from "styled-components";
import { Link } from "react-router-dom";
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

/**
 * Used for holding the AeroMag 2000 logo in the header / navigation bar.
 **/
export const AeroLogo = styled.img`
	height: 55px;
	padding: 8px;
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

/**
 * The icons used in the mobile version of the navigation menu.
 */
export const NavIcon = styled.i`
	width: 45px;
	vertical-align: middle;
	float: left;
	// padding: 0px 0 10px 0;
`;

/**
 * The div holding all content pertaining to the link for opening the navigation menu.
 */
export const MenuTip = styled.div`
	padding-top: 5px;
	cursor: pointer;
	transform: scale(1.2);
`;

/**
 * The icon for the link which opens the navigation menu
 */
export const MenuTipIcon = styled.a`
	transition-duration: 1s;
	transform: ${({ open }) => (open ? "rotate(360deg)" : "rotate(270deg)")};
	margin-right: 10px;
	cursor: pointer;
`;

/**
 * The navigation menu used in the mobile version of the site.
 */
export const NavPane = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	wrap-option: none;
	overflow: hidden;
	transition: all 0.15s ease-in-out;
	background-color: #dedede;
	position: absolute;
	top: 70px;
	right: 0px;
	height: ${({ open }) => (open ? "195px" : "0px")};
	z-index: 100;
`;

/**
 * Holds the individual links in the navigation menu / bar.
 */
export const NavDiv = styled.div`
	${isMobile
		? // Mobile rules
		  "padding: 20px 0px 20px 20px;" +
		  "width: 110px;" +
		  "overflow: hidden;" +
		  "transition: all 0.2s ease-in-out;"
		: // Desktop Rules
		  "display: flex;"}
	\`;
`;

// Todo update documentation when we know if we are using titles or not.
/**
 * The header div of the page that contains the logo, navigation and possibly the title of the page.
 */
export const HeaderDiv = styled.div`
	display: flex;
	justify-content: space-between;
	height: 70px;
	border-bottom: 2px solid #dedede;
`;

/**
 * The link in the navigation menu / bar to access another page of the app.
 */
export const NavLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-size: 20px;
	${isMobile
		? // Mobile rules
		  "width: 100vw;" +
		  "cursor: pointer;" +
		  "padding: 20px 0px 20px 0px;" +
		  "text-align: center;" +
		  "border-bottom: 2px solid #DADADA;"
		: // Desktop Rules
		  "margin-right: 50px;" + "padding-top: 20px;"}
	\`;
`;