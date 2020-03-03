import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	EmployeeListDiv,
	EmployeeListDivWrapper,
	EmployeeListItemContentDiv,
	EmployeeListItemDiv,
	EmployeeListItemName,
	EmployeeListItemTime,
	StartTimeSeparator
} from "../../styled/magtable/ListContent";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import EmployeeListItem from "./EmployeeListItem";
import IconButton from "../common/IconButton";
import { refreshEmployeeShifts } from "../../actions/magtable";
import OverflowEmployee from "./OverflowEmployee";
import {
	MANAGEMENT_POSITIONS,
	MECHANIC,
	TECHNICIAN_POSITIONS,
	TOWER_POSITIONS,
	TRAINER_POSITIONS
} from "../../actions/constants";

/**
 * @date 2/19/2020
 * @author Tom Allcock, Arran Woodruff
 * @module Component
 */

/**
 * Handles rendering of the employee list in the assignment table.
 *
 * @constructor
 * @returns {*} The EmployeeList component
 */
const EmployeeList = () => {
	const dispatch = useDispatch();
	const employeeShifts = useSelector(state => state.magtable.employeeShifts); // get the employees
	const loading = useSelector(state => state.magtable.shiftsLoading);
	const [open, setOpen] = useState(false);
	// employees are already sorted by time
	const startTimes = [];

	// used to determine if the app filters out employees who start before noon, but after midnight, default false to show all times
	const [filterAM, setFilterAM] = useState(false);
	// used to determine if the app filters out employees who start before midnight, but after noon, default false to show all times
	const [filterPM, setFilterPM] = useState(false);
	// used to determine if the app filters out employees that are part of the technician staff, default false to show all employees
	const [filterTech, setFilterTech] = useState(false);
	// used to determine if the app filters out employees that are part of the tower staff, default false to show all employees
	const [filterTower, setFilterTower] = useState(false);
	// used to determine if the app filters out management, default is false to not show management
	const [filterManagement, setFilterManagement] = useState(false);
	// used to determine if the app filters out employees that are mechanics, default is false to show all employees
	const [filterMechanic, setFilterMechanic] = useState(false);
	// used to determine if the app filters out employees that are part of the training staff, default false to show all employees
	const [filterTrainer, setFilterTrainer] = useState(false);

	if (!loading) {
		employeeShifts.shifts.forEach(emp => {
			if (!startTimes.includes(emp.startTime)) {
				startTimes.push(emp.startTime); // add the start time if it's not already in the list
			}
		});
	}

	const activeFilters = [
		filterAM,
		filterPM,
		filterTech,
		filterTower,
		filterManagement,
		filterMechanic,
		filterTrainer
	];

	const refreshEmployees = () => {
		// refresh employees upon clicking the button
		dispatch(refreshEmployeeShifts());
	};
	const filterAMEmployees = () => {
		// toggle AM filter while making sure the PM filter is off
		setFilterAM(!filterAM);
		setFilterPM(false);
	};
	const filterPMEmployees = () => {
		// toggle PM filter while making sure the AM filter is off
		setFilterPM(!filterPM);
		setFilterAM(false);
	};
	const filterTechEmployees = () => {
		// toggle the tech filter, no need to make sure that tower filter is off
		setFilterTech(!filterTech);
	};
	const filterTowerEmployees = () => {
		// toggle the tower filter, no need to make sure that tech filter is off
		setFilterTower(!filterTower);
	};
	const filterManagementEmployees = () => {
		// toggle the management filter
		setFilterManagement(!filterManagement);
	};
	const filterMechanicEmployees = () => {
		// toggle the mechanic filter
		setFilterMechanic(!filterMechanic);
	};
	const filterTrainerEmployees = () => {
		// toggle the trainer filter
		setFilterTrainer(!filterTrainer);
	};

	// determine what filter is applied, then apply the filter and return corresponding boolean value
	function timeFilter(startTime) {
		const start = parseInt(startTime);
		if (filterAM) {
			// if we are only showing AM shifts...
			// if startTime is in the morning (AM) then return true here
			if (start >= 0 && start < 1200) {
				return false;
			} else {
				// otherwise don't show it, we don't want it
				return true;
			}
		} else if (filterPM) {
			// if we are only showing PM shifts...
			// if startTime is in the afternoon (PM) then return true here
			if (start >= 1200 && start < 2400) {
				return false;
			} else {
				// otherwise don't show it, we don't want it
				return true;
			}
		} else if (!filterAM && !filterPM) {
			// we aren't filtering anything, so show everything
			return true;
		}
	}

	function positionFilter(position) {
		if (filterTech && TECHNICIAN_POSITIONS.includes(position)) {
			// if we don't want to see technicians AND position is included in TECHNICIAN_POSITIONS, return false
			return false;
		} else if (filterTower && TOWER_POSITIONS.includes(position)) {
			// if we don't want to see tower staff AND position is included in TOWER_POSITIONS, return false
			return false;
		} else if (filterManagement && MANAGEMENT_POSITIONS.includes(position)) {
			// if we don't want to see management AND position is included in MANAGEMENT_POSITIONS, return false
			return false;
		} else if (filterMechanic && position === MECHANIC) {
			// if we don't want to see mechanics AND position is a mechanic, return false
			return false;
		} else if (filterTrainer && TRAINER_POSITIONS.includes(position)) {
			// if we don't want to see trainers AND position is included in TRAINER_POSITIONS, return false
			return false;
		} else {
			// we aren't filtering off anything, so show everything
			return true;
		}
	}

	const filteredEmployeeShifts = []; // used to store the employee shifts not filtered out
	const filteredStartTimes = []; // used to store the start times of the employees not filtered out

	// fill a list of employee shifts where the position filters are applied
	function filterEmployeeShifts() {
		employeeShifts.shifts.forEach(emp => {
			if (positionFilter(emp.description)) {
				filteredEmployeeShifts.push(emp);
			}
		});
		filterStartTimes(); // call function to update the start times of this filtered employee shifts
	}

	// fill a list of start times from the start times of the list of filtered employee shifts
	function filterStartTimes() {
		console.log(filteredEmployeeShifts);
		filteredEmployeeShifts.forEach(emp => {
			if (
				!filteredStartTimes.includes(emp.startTime) &&
				timeFilter(emp.startTime)
			) {
				filteredStartTimes.push(emp.startTime); // add the start time if it's not already in the list
			}
		});
	}

	return (
		<EmployeeListDivWrapper>
			<ListTitle>
				<ListTitleText>Employees</ListTitleText>
				<OverflowEmployee
					open={open}
					setOpen={setOpen}
					activeFilters={activeFilters}
					filterAMEmployees={filterAMEmployees}
					filterPMEmployees={filterPMEmployees}
					filterTechEmployees={filterTechEmployees}
					filterTowerEmployees={filterTowerEmployees}
					filterManagementEmployees={filterManagementEmployees}
					filterMechanicEmployees={filterMechanicEmployees}
					filterTrainerEmployees={filterTrainerEmployees}
					refreshEmployees={refreshEmployees}
				>
					{({ openOverflow }) => (
						<IconButton
							faClassName="fa-bars"
							onClick={openOverflow}
							color={"var(--header-text)"}
							hoverColor={"grey"}
						/>
					)}
				</OverflowEmployee>
			</ListTitle>

			{!loading ? (
				<>
					<EmployeeListItemDiv>
						<EmployeeListItemContentDiv>
							<EmployeeListItemName>
								{employeeShifts.scheduleDate}
							</EmployeeListItemName>
							<EmployeeListItemTime>
								Last Updated:
								{employeeShifts.lastUpdated}
							</EmployeeListItemTime>
						</EmployeeListItemContentDiv>
					</EmployeeListItemDiv>

					<EmployeeListDiv>
						{filterEmployeeShifts()}
						{filteredStartTimes.length > 0 ? (
							filteredStartTimes.map(startTime => (
								<div key={startTime}>
									<StartTimeSeparator>
										<h2>{startTime}</h2>
									</StartTimeSeparator>
									{filteredEmployeeShifts.map(
										employee =>
											employee.startTime === startTime && (
												<EmployeeListItem
													key={employee.id}
													employee={employee}
												/>
											)
									)}
								</div>
							))
						) : (
							<h1>No Employee Shifts...</h1>
						)}
					</EmployeeListDiv>
				</>
			) : (
				<h1>Loading Employee Shifts...</h1>
			)}
		</EmployeeListDivWrapper>
	);
};

export default EmployeeList;
