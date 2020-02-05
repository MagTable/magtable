import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AlertDiv as StyledAlertDiv, Alert as StyledAlert } from "../../styled/common/Alert";

const Alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    return (
      <StyledAlertDiv>
        {alerts.map(alert => (
          <StyledAlert key={alert.id} alerttype={alert.alertType}>
            {alert.msg}
          </StyledAlert>
        ))}
      </StyledAlertDiv>
    );
  } else {
    return null;
  }
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
