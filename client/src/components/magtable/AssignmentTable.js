import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "../../actions/alert";
// import { connect } from 'react-redux'

const AddUser = props => {
  const location = useLocation();
  const dispatch = useDispatch();
  dispatch(setAlert("Test", "success"));
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
