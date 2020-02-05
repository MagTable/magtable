import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
// import { connect } from 'react-redux';

const AddUser = props => {
	const location = useLocation();
	return (
		<div>
			<h1>url: {location.pathname}</h1>
		</div>
	);
};

AddUser.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

// export default connect()(AddUser);
export default AddUser;
