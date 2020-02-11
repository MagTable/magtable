import styled from "styled-components";
import { Input } from "../common/Control";

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Holds all of the rows / information in the user list.
 */
export const UserListDiv = styled.div`
	padding-top: 60px;
`;

/**
 * Holds the individual data for each user, ie. user level description, name.
 **/
// TODO "text-transform: capitalize" is currently applied to the reset password which makes it inaccurate
export const UserListItem = styled.div`
	min-width: 230px;
	height: 40px;
	background-color: #f0f0f0;
	border-top: 2px solid #dadada;
	justify-content: center;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-transform: capitalize;
	font-size: 20px;
	padding-left: 15px;
`;

/**
 * The row for user information, to contain UserListItems.
 */
export const UserListRow = styled.div`
	// display: table-row;
	align-content: center;
	justify-content: center;
	display: flex;
	padding-top: 5px;
	margin: auto;
`;
// background-color: ${isFresh ? 'red' : ''} ;
// height: ${({isSelected}) ? '60px' : '90px'} ;

/**
 * Holds the icons for manipulating users.
 */
export const ManipImg = styled.i`
	width: 30px;
	cursor: pointer;
	// padding-left: 3px;
`;

/**
 * Holds the ManipImg components to keep them grouped together rather than being grouped like the user's data.
 */
export const UserManipulateBlock = styled.div`
	display: flex;
	width: 50px;
	height: 40px;
	background-color: #f0f0f0;
	border-top: 2px solid #dadada;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const SelectUserLevel = styled.select`
	height: 34px;
	padding: 0 10px;
	font-size: 20px;
	background-color: #dadada;
	border: 2px solid #cacaca;
`;

export const AddUserInput = styled(Input)`
	height: 30px;
	padding: 0 10px;
	font-size: 20px;
`;

export const AddUserRow = styled.div`
	align-content: space-between;
	justify-content: center;
	display: flex;
	padding: 15px;
	margin: auto;
	background-color: #f0f0f0;
	// border-top: 3px solid #DADADA;
	position: fixed;
	bottom: 0px;
	width: 100vw;
`;

export const AddUserSubmit = styled(AddUserInput)`
	height: 34px;
	cursor: pointer;
`;
