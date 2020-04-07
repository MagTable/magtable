import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	ListSeparator,
	TruckListDiv,
	TruckListDivWrapper,
	TruckListManipDiv,
	TruckStatusCounterItem
} from "../../styled/magtable/ListContent";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { toggleAM } from "../../actions/magtable";
import { LoadingImg, SpinnerWrap } from "../../styled/common/QualityOfLife";
import {
	CON,
	DEICE_TRUCK,
	GO,
	INOP,
	OOS,
	SERVICE_VEHICLE
} from "../../actions/constants";
import Modal from "../common/Modal";
import BrixManagement from "../brix/BrixManagement";
import ReactTooltip from "react-tooltip";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Arran Woodruff
 * Rendered on the Truck Assignment page, displays all available trucks, the employees assigned to each (two AM and two
 * PM slots for employees) while color-coding each truck to represent their operational status. User can expand and
 * contract notices on all trucks and swap between displaying AM employees and PM employees. Trucks are draggable for
 * assigning them to locations in the ParkingLocationMap.
 * @category Components/MagTable
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

	const listItemSeparator = "|";

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

	const truckStatusTotals = {
		[SERVICE_VEHICLE]: {
			[INOP]: 0,
			[OOS]: 0,
			[GO]: 0,
			[CON]: 0
		},
		[DEICE_TRUCK]: {
			[INOP]: 0,
			[OOS]: 0,
			[GO]: 0,
			[CON]: 0
		}
	};

	assignments.forEach(assignment => {
		const { status, type, id } = assignment.equipment;
		if (status && id < 1000) {
			if (type === DEICE_TRUCK) {
				truckStatusTotals[DEICE_TRUCK][status]++;
			} else if (type === SERVICE_VEHICLE) {
				truckStatusTotals[SERVICE_VEHICLE][status]++;
			}
		}
	});

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
					<ListSeparator>
						Service Vehicles
						<TruckStatusCounterItem
							GO
							data-tip={GO}
							data-for={"service_vehicle_totals"}
						>
							{truckStatusTotals[SERVICE_VEHICLE][GO]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							CON
							data-tip={CON}
							data-for={"service_vehicle_totals"}
						>
							{truckStatusTotals[SERVICE_VEHICLE][CON]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							OOS
							data-tip={OOS}
							data-for={"service_vehicle_totals"}
						>
							{truckStatusTotals[SERVICE_VEHICLE][OOS]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							INOP
							data-tip={INOP}
							data-for={"service_vehicle_totals"}
						>
							{truckStatusTotals[SERVICE_VEHICLE][INOP]}
						</TruckStatusCounterItem>
						<ReactTooltip
							id={"service_vehicle_totals"}
							place="top"
							type="dark"
							effect="solid"
							delayShow={200}
						/>
					</ListSeparator>

					{serviceVehicleAssignments.map(assignment => (
						<TruckListItem
							noticeOpen={noticesOpen}
							key={assignment.equipment.id}
							assignment={assignment}
							showAM={showAM}
							shift
						/>
					))}
					<ListSeparator>
						De-Ice Trucks
						<TruckStatusCounterItem
							GO
							data-tip={GO}
							data-for={"deice_truck_totals"}
						>
							{truckStatusTotals[DEICE_TRUCK][GO]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							CON
							data-tip={CON}
							data-for={"deice_truck_totals"}
						>
							{truckStatusTotals[DEICE_TRUCK][CON]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							OOS
							data-tip={OOS}
							data-for={"deice_truck_totals"}
						>
							{truckStatusTotals[DEICE_TRUCK][OOS]}
						</TruckStatusCounterItem>
						<TruckStatusCounterItem>{listItemSeparator}</TruckStatusCounterItem>
						<TruckStatusCounterItem
							INOP
							data-tip={INOP}
							data-for={"deice_truck_totals"}
						>
							{truckStatusTotals[DEICE_TRUCK][INOP]}
						</TruckStatusCounterItem>
						<ReactTooltip
							id={"deice_truck_totals"}
							place="top"
							type="dark"
							effect="solid"
							delayShow={200}
						/>
					</ListSeparator>
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
