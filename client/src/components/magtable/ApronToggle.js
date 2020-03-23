import React from "react";
import { setSelectedApron } from "../../actions/magtable";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import {
	ToggleLabelLeft,
	ToggleLabelRight
} from "../../styled/common/FormControl";
import { EAST_APRON, WEST_APRON } from "../../actions/constants";

const ApronToggle = () => {
	const dispatch = useDispatch();

	const selectedApron = useSelector(state => state.magtable.selectedApron);

	function handleClick() {
		if (selectedApron === EAST_APRON) {
			dispatch(setSelectedApron(WEST_APRON));
		} else {
			dispatch(setSelectedApron(EAST_APRON));
		}
	}

	return (
		<label>
			<Switch
				onChange={() => handleClick()}
				checked={selectedApron === EAST_APRON}
				offColor={"#414244"}
				onColor={"#414244"}
				checkedIcon={<ToggleLabelLeft>East</ToggleLabelLeft>}
				uncheckedIcon={<ToggleLabelRight>West</ToggleLabelRight>}
				width={80}
			/>
		</label>
	);
};

export default ApronToggle;
