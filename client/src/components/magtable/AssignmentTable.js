import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from "react-router-dom";
// import { connect } from 'react-redux';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const AddUser = props => {
    const location = useLocation();
    return (
        <div>
            <h1>url: {location.pathname}</h1>
        </div>
    )
};

/**
 *
 * @type {{}}
 */
AddUser.propTypes = {

};

/**
 *
 * @param state
 * @returns {{}}
 */
const mapStateToProps = (state) => ({

});

/**
 *
 * @type {{}}
 */
const mapDispatchToProps = {

};

// export default connect()(AddUser);
export default AddUser;