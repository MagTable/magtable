import React from "react";
import { useSelector } from "react-redux";
import ViewListItem, { ViewListItemHeader } from "./ViewListItem";
import ViewTowerItem from "./ViewTowerItem";
import ViewNotice from "./ViewNotice";
import { DEICE_TRUCK, SERVICE_VEHICLE } from "../../actions/constants";
import {
	SectionHeader,
	ViewListContent,
	ViewTowerContainer,
	ViewTowerList
} from "../../styled/tv/ViewList";
import { ViewTruckList } from "../../styled/tv/ViewList";
import IconButton from "../common/IconButton";

/**
 * @date 2020-03-31
 * @author MJ Kochuk, Arran Woodruff
 * @module Component
 */

/**
 * List of trucks for the TV View page
 * @constructor
 * @param props
 * @returns {*} The ViewList component
 */
function ViewList(props) {
	const historicalMagtable = useSelector(
		state => state.magtable.historical.magtable
	);

	const historicalAssignments = historicalMagtable
		? historicalMagtable.assignments
		: null;

	const assignments = useSelector(state => state.magtable.assignments);

	const selectedAssignments = historicalAssignments
		? historicalAssignments
		: assignments;

	const enabledAssignments = selectedAssignments;
	// 	.filter(
	// 	assignment =>
	// 		assignment.employeeShifts.length > 0 || assignment.parkingLocation != null
	// ); // Trucks assigned to a location and/or with employees assigned to it.
	const towerAssignments = selectedAssignments.filter(
		assignment => assignment.equipment.id >= 1001
	); // All towers and their assigned employees.
	const towerSpotter = selectedAssignments.find(
		assignment => assignment.equipment.id === 1000
	);
	const notices = enabledAssignments.filter(
		assignment =>
			assignment.equipment.notice !== "" && assignment.equipment.id < 1000
	); // Notices of the trucks with assignments.
	const deiceTrucks = enabledAssignments.filter(
		truck => truck.equipment.type === DEICE_TRUCK
	);
	const serviceVehicles = enabledAssignments.filter(
		truck => truck.equipment.type === SERVICE_VEHICLE
	);

	return (
		<ViewListContent>
			<SectionHeader>
				De-Ice Trucks
				<IconButton
					faClassName={
						props.fullScreen
							? "fas fa-compress-arrows-alt"
							: "fas fa-expand-arrows-alt"
					}
					color={"white"}
					onClick={() => props.setFullScreen(!props.fullScreen)}
				/>
			</SectionHeader>

			<ViewTruckList>
				<ViewListItemHeader />
				<ViewListItemHeader />

				{deiceTrucks.map(assignment => (
					<ViewListItem
						assignment={assignment}
						assigned={true}
						key={assignment.equipment.id}
					/>
				))}
			</ViewTruckList>

			<SectionHeader>Service Vehicles</SectionHeader>
			<ViewTruckList>
				{serviceVehicles.map(assignment => (
					<ViewListItem
						assignment={assignment}
						assigned={true}
						key={assignment.equipment.id}
					/>
				))}
			</ViewTruckList>

			<SectionHeader>Vehicle Notices</SectionHeader>
			<ViewTruckList>
				{notices.map(notice => (
					<ViewNotice
						assignment={notice}
						key={notice.equipment.id + "notice"}
					/>
				))}
			</ViewTruckList>

			<ViewTowerContainer>
				<SectionHeader>Tower</SectionHeader>
				<ViewTowerList>
					{towerAssignments.sort().map(assignment => (
						<ViewTowerItem
							assignment={assignment}
							key={assignment.equipment.id}
						/>
					))}
					{towerSpotter && <ViewTowerItem assignment={towerSpotter} />}
				</ViewTowerList>
			</ViewTowerContainer>
		</ViewListContent>
	);
}

export default ViewList;
