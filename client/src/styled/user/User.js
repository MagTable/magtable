import styled from "styled-components";
import { Input } from "../common/FormControl";
import { isMobile } from "react-device-detect";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
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
	\`;
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
		  `min-width: 230px;
		  background-color: #F0F0F0;
		  height: 40px;
		  background-color: #DEDEDE;
		  border-top: 2px solid #DADADA;
		  justify-content: center;
		  display: flex;
		  flex-direction: column;
		  align-content: center;
		  justify-content: center;
		  font-size: 20px;
		  padding-left: 20px;`}
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
 * Holds the icons for manipulating users.
 */
export const ManipImg = styled.i`
	cursor: pointer;
	${isMobile
		? // Mobile rules
		  `transform: scale(1.5);
		   margin-bottom: 10px;`
		: // Desktop Rules
		  `width: 30px;`}
	\`;

	:hover {
		color: #c91818;
	}
`;

/**
 * Holds the ManipImg components to keep them grouped together rather than being grouped like the user's data.
 */
export const UserManipulateBlock = styled.div`
	display: flex;
	width: 90px;
	height: 40px;
	background-color: #dedede;
	display: flex;
	align-items: center;
	justify-content: center;
	${isMobile
		? // Mobile rules
		  "justify-content: space-around;" +
		  "width: 100vw;" +
		  "background-color: #E9E9E9;" +
		  "border-bottom: 2px solid #DEDEDE;" +
		  "margin-bottom: 10px;"
		: // Desktop Rules
		  "border-top: 2px solid #DADADA;"}
	\`;
`;

export const SelectUserLevel = styled.select`
	height: 34px;
	padding: 0 10px;
	font-size: 20px;
	background-color: #dadada;
	border: 2px solid #cacaca;
	${({ error }) =>
		error &&
		`
		border: 2px solid red;
	`}
`;

export const AddUserInput = styled(Input)`
	height: 30px;
	padding: 0 10px;
	font-size: 20px;
	float: right;
	${({ error }) =>
		error &&
		`
		border: 2px solid red;
	`}
`;

export const AddUserRow = styled.div`
	// changed to floats
`;

export const SeparatorLine = styled.div`
	border-bottom: 2px solid #dedede;
	height: 0px;
	width: auto;
	margin-top: 20px;
`;

export const AddUserSubmit = styled(AddUserInput)`
	cursor: pointer;
	float: right;
	margin-left: 0.5rem;
`;

export const UserListRoleHeader = styled.h2`
	size: 20px;
`;
