import styled, { keyframes } from "styled-components";
import { isMobile } from "react-device-detect";
import { IconButton } from "../common/IconButton";

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

export const UserListMgmtDiv = styled.div`
	width: 100%;
	height: 100vh;
`;

/**
 * Holds all of the rows / information in the user list.
 */
export const UserManagmentListDiv = styled.div`
	//margin: auto;
	//display: flex;
	//flex-direction: column;
	//flex-grow: 1.2;
	//flex-basis: 0;
	//overflow: auto;
	//width: auto;
	//max-height: calc(100vh - 120px);
	padding: 0 1rem 2.5rem 1rem;
	animation: 0.3s ${fadeIn} ease-out;
	// background: #f4f4f4;
	// height: 100%;
	transition: all 0.15s ease-in-out;
	overflow-y: auto;
	margin: auto;
	width: auto;
	//max-height: calc(100vh - 120px);
	//padding: 0 40px;
	background: #f4f4f4;
	height: calc(100vh - 120px);
`;

export const UserListDiv = styled.div`
	margin: auto;
	width: 60%;
	padding: 14px 4rem 1rem 2rem;
	background: white;
	box-shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.75);
	/* min-height: 100%; */
	min-height: 100%;
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
	align-items: center;
	width: 100%;
	margin: 0.5rem;
	background-color: #f2faff;
	border-radius: 0.5rem;
	text-overflow: ellipsis;
	min-height: 65px;

	${IconButton} {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	:hover {
		background-color: #dff3ff;
		${IconButton} {
			opacity: 1;
		}
	}

	${isMobile && // Mobile rules
		`justify-content: space-around;
		  width: 100vw;
		  background-color: #E9E9E9; 
		  border-bottom: 2px solid #DEDEDE; 
		  margin-bottom: 10px;`}
	\`;
`;
