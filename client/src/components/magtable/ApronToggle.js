import React from "react";
import { setSelectedApron } from "../../actions/magtable";
import { useDispatch } from "react-redux";

const ApronToggle = ({ selected }) => {
	const dispatch = useDispatch();

	const handleClick = e => {
		dispatch(setSelectedApron(e.target.value));
	};

	return (
		<span>
			<button value="EDA" onClick={handleClick}>
				EAST
			</button>
			<button value="WDA" onClick={handleClick}>
				WEST
			</button>
		</span>
	);
};

export default ApronToggle;
