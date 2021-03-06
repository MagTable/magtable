import React from "react";
import { useSelector } from "react-redux";
import {
	AlertDiv as StyledAlertDiv,
	Alert as StyledAlert
} from "../../styled/common/Alert";

/**
 * Renders the current alerts from redux store.
 * @date 2/10/2020
 * @author Arran Woodruff
 * @name Alert
 * @category Components/Common
 * @returns The Alert Component
 * @constructor
 */
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

export default Alert;
