import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	ListSeparator,
	TruckListDiv,
	TruckListDivWrapper,
	TruckListManipDiv
} from "../../styled/magtable/ListContent";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { toggleAM } from "../../actions/magtable";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import { DEICE_TRUCK, SERVICE_VEHICLE } from "../../actions/constants";
import Modal from "../modal/Modal";
import BrixManagement from "../brix/BrixManagement";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 * Rendered on the Truck Assignment page, displays all available trucks, the employees assigned to each (two AM and two
 * PM slots for employees) while color-coding each truck to represent their operational status. User can expand and
 * contract notices on all trucks and swap between displaying AM employees and PM employees. Trucks are draggable for
 * assigning them to locations in the ParkingLocationMap.
 *
 * @constructor
 * @returns {*} The TruckList component
 */
function TruckList() {
	const [noticesOpen, setNoticesOpen] = useState(false);
	const dispatch = useDispatch();

	const assignments = useSelector(state =>
		state.magtable.assignments.filter(assignment => assignment.equipment.active)
	);
	const showAM = useSelector(state => state.magtable.showAM);
	const loading = useSelector(state => state.magtable.loading);

	const [showBrixModal, setShowBrixModal] = useState(false);

	const handleClose = () => setShowBrixModal(false);
	const handleShow = () => setShowBrixModal(true);

	const handleShiftToggle = () => {
		dispatch(toggleAM());
	};

	const truckAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === DEICE_TRUCK
	);
	const serviceVehicleAssignments = assignments.filter(
		assignment =>
			assignment.equipment.id < 1000 &&
			assignment.equipment.type === SERVICE_VEHICLE
	);

	return (
		<TruckListDivWrapper>
			<ListTitle>
				<ListTitleText>Trucks</ListTitleText>
				<TruckListManipDiv>
					<Switch
						onChange={() => setNoticesOpen(!noticesOpen)}
						checked={noticesOpen === true}
						offColor={"#414244"}
						onColor={"#187AD3"}
						uncheckedIcon={
							<i
								className={"fas fa-flag"}
								style={{ padding: "6px 10px", color: "red" }}
								data-tip={"Show Equipment Notices"}
							/>
						}
						checkedIcon={
							<i
								className={"fas fa-flag"}
								style={{ padding: "6px 10px", color: "white" }}
							/>
						}
						width={60}
					/>

					<Switch
						onChange={handleShiftToggle}
						checked={showAM === false}
						offColor={"#414244"}
						onColor={"#414244"}
						uncheckedIcon={
							<i
								className={"fas fa-sun fa-lg"}
								style={{ padding: "7px", color: "yellow" }}
							/>
						}
						checkedIcon={
							<i
								className={"fas fa-moon fa-lg"}
								style={{ padding: "7px", color: "lightblue" }}
							/>
						}
						width={60}
					/>
				</TruckListManipDiv>
			</ListTitle>
			{!loading ? (
				<TruckListDiv>
					<ListSeparator>Service Vehicles</ListSeparator>
					{serviceVehicleAssignments.map(assignment => (
						<TruckListItem
							noticeOpen={noticesOpen}
							key={assignment.equipment.id}
							assignment={assignment}
							showAM={showAM}
							shift
						/>
					))}
					<ListSeparator>Deice Trucks</ListSeparator>

					{truckAssignments.map(assignment => (
						<TruckListItem
							noticeOpen={noticesOpen}
							openBrixModal={handleShow}
							key={assignment.equipment.id}
							assignment={assignment}
							showAM={showAM}
							shift
						/>
					))}
				</TruckListDiv>
			) : (
				<SpinnerWrap>
					<LoadingImg className="fas fa-circle-notch" />
				</SpinnerWrap>
			)}
			<Modal handleClose={handleClose} show={showBrixModal}>
				<BrixManagement />
			</Modal>
		</TruckListDivWrapper>
	);
}

export default React.memo(TruckList);
