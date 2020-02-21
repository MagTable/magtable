import React, { useState } from "react";
import { setSelectedApron } from "../../actions/magtable";
import { useDispatch } from "react-redux";
import { TruckListManipDiv } from "../../styled/magtable/ListContent";
import Switch from "react-switch";
import {
	ToggleLabelLeft,
	ToggleLabelRight
} from "../../styled/common/FormControl";

const ApronToggle = ({ selected }) => {
	const dispatch = useDispatch();
	const [padDisplayed, setPadDisplayed] = useState("EDA");
	function handleClick(e) {
		dispatch(setSelectedApron(e));

		if (padDisplayed === "EDA") {
			setPadDisplayed("WDA");
		} else {
			setPadDisplayed("EDA");
		}
	}

	return (
		<TruckListManipDiv>
			<label>
				<Switch
					onChange={() => handleClick(padDisplayed === "EDA" ? "WDA" : "EDA")}
					checked={padDisplayed === "EDA"}
					offColor={"#414244"}
					onColor={"#414244"}
					checkedIcon={<ToggleLabelLeft>East</ToggleLabelLeft>}
					uncheckedIcon={<ToggleLabelRight>West</ToggleLabelRight>}
					width={80}
				/>
			</label>
		</TruckListManipDiv>
	);
};

export default ApronToggle;
