import React from 'react';
import NavBar from './NavBar';
import { UserDiv } from '../../styled/client/User';
import { Provider } from 'react-redux';
import { Title } from '../../styled/common/BasicContent';

/**
 * @date 2020-02-06
 * @author MJ Kochuk
 * @module DumbComponent
 */

/**
 * The body for managing users. Contains everything needed for displaying the page minus common components.
 * @constructor
 * @returns {*} The ManageUsers component
 */
function ManageUsers() {
	return (
		<div>
			<Title>Manage Users</Title>
			<UserDiv>Howdy</UserDiv>
		</div>
	);
}

export default ManageUsers;
