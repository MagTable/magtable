import styled, { keyframes } from "styled-components";
import { isMobile } from "react-device-detect";

/**
 * @date 2020-02-05
 * @author MJ Kochuk, Arran Woodruff
 * @category Styled Components
 * @module User
 */

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

/**
 * Holds all of the rows / information in the user list.
 */
export const UserListDiv = styled.div`
	margin: auto;
	overflow: auto;
	width: 40vw;
	max-height: calc(100vh - 70px);
	padding: 1rem 2.5rem;
	animation: 0.3s ${fadeIn} ease-out;

	${isMobile && // Mobile rules
		`
		padding-top: 5px;
	`}
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
		  width: 100%;
		  background-color: #f2faff;
		  height: 60px;
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
	height: 60px;
	display: flex;
	padding-top: 8px;
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
