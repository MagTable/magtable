import React from 'react';
import { connect } from 'react-redux'
import {addUser} from '../../actions/user'

const dumbUser = {
	id: 5,
	username: "david",
	levelId: 3
}

const AddUser = ({addUser}) => {
	function handleSubmit(e) {
		e.preventDefault();
		addUser(dumbUser);
	}

	return (
		<form onSubmit={ (e) => handleSubmit(e) }>
			<input type="submit"/>
		</form>
	);
};

AddUser.propTypes = {};

export default connect(null, {addUser})(AddUser);
