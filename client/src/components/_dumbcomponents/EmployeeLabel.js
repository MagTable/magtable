import React from "react";
import { EmployeeLabelDiv } from "../../styled/magtable/ListContent";
import ReactTooltip from "react-tooltip";
import { BrowserView } from "react-device-detect";

/**
 * @date 2020-02-18
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The EmployeeLabel component
 */
function EmployeeLabel({ label }) {
	function labelToolTip(label) {
		switch (label) {
			case "gp":
				return "Green Pass";
			case "ts":
				return "Tower Staff";
			case "ojt":
				return "On the Job Training";
			case "bl":
				return "Bay Lead";
			default:
				return null;
		}
	}

	//todo label is causing dragging issues in chrome. Need to address.
	return (
		<EmployeeLabelDiv label={label} data-tip={labelToolTip(label)}>
			<BrowserView>
				<ReactTooltip place="top" type="dark" effect="solid" delayShow={200} />
			</BrowserView>
		</EmployeeLabelDiv>
	);
}

export default EmployeeLabel;
