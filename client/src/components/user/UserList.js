import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import { connect } from 'react-redux'

const UserList = props => {
	const location = useLocation();
	return (
		<div>
			<h1>url: {location.pathname}</h1>
		</div>
	);
};

UserList.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

// export default connect()(UserList);
export default UserList;
