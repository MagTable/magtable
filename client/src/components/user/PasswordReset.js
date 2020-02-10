import React from 'react';
import { getUser, resetPassword } from '../../actions/user';
import { connect } from 'react-redux';
import { ManipImg } from '../../styled/client/User';

/**
 * @date 2020-02-09
 * @author Steven Wong
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The Password Reset component
 */
const PasswordReset = ({ userID, resetPassword }) => {
	function tempPassword() {
		//todo generate random string/numbers for a temp password
		let tempPassword = '';
		tempPassword += Math.floor(Math.random() * (999999 - 100000 + 1));
		console.log(tempPassword);
		console.log(userID);
		alert(
			'Your temporary password is: ' +
				tempPassword +
				'\nPlease make sure to write this down or you will have to generate a new password.'
		);
		return tempPassword;
	}

	return (
		<ManipImg
			className="fas fa-redo"
			onClick={() => {
				resetPassword(userID, tempPassword());
			}}
		></ManipImg>
	);
};

PasswordReset.propTypes = {};

const mapStateToProps = state => {
	return {
		user: state.user.users
	};
};

export default connect(mapStateToProps, { resetPassword })(PasswordReset);
// export default PasswordReset;
