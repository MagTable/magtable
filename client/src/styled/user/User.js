import styled from "styled-components";
import { isMobile } from "react-device-detect";

/**
 * @date 2020-02-05
 * @author MJ Kochuk, Arran Woodruff
 * @module Styled
 */

/**
 * Holds all of the rows / information in the user list.
 */
export const UserListDiv = styled.div`
	margin: auto;

	${isMobile
		? // Mobile rules
		  `padding-top: 5px;`
		: // Desktop Rules
		  `width: min-content;`}
`;

export const UserListSection = styled.div`
	margin-bottom: 3rem;
`;

/**
 * Holds the individual data for each user, ie. user level description, name.
 **/
export const UserListItem = styled.div`
	// Shared Rules
	// text-transform: capitalize;

	${isMobile
		? // Mobile rules
		  `background-color: #E9E9E9;
		  border-top: 2px solid #DEDEDE
		  display: box;
		  font-size: 20px; 
		  text-align: center;`
		: // Desktop Rules
		  `
		  min-width: 230px;
		  background-color: #f2faff;
		  height: 40px;
		  justify-content: center;
		  display: flex;
		  flex-direction: column;
		  align-content: center;
		  justify-content: center;
		  font-size: 20px;
		  padding-left: 20px;
		  `}
`;

/**
 * The row for user information, to contain UserListItems.
 */
export const UserListRow = styled.div`
	align-content: center;
	justify-content: center;
	display: flex;
	padding-top: 5px;
	flex-basis: auto;
	flex-grow: 1;
	margin: auto;
	${isMobile
		? // Mobile rules
		  `flex-direction: column;
		  justify-content: space-between;`
		: // Desktop Rules
		  `min-width: 230px;`}
	\`;
`;

/**
 * Holds the ManipImg components to keep them grouped together rather than being grouped like the user's data.
 */
export const UserManipulateBlock = styled.div`
	display: flex;
	width: 90px;
	background-color: #f2faff;
	align-items: center;
	${isMobile && // Mobile rules
		`justify-content: space-around;
		  width: 100vw;
		  background-color: #E9E9E9; 
		  border-bottom: 2px solid #DEDEDE; 
		  margin-bottom: 10px;`}
	\`;
`;

export const SeparatorLine = styled.div`
	border-bottom: 2px solid #dedede;
	height: 0px;
	width: auto;
	margin-top: 20px;
`;
