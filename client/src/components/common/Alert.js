import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
	AlertDiv as StyledAlertDiv,
	Alert as StyledAlert
} from "../../styled/common/Alert";

const Alert = () => {
	const alerts = useSelector(state => state.alert);

	// only render if any alerts exist
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
	alerts: PropTypes.array
};

export default Alert;
