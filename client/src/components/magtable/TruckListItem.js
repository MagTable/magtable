import React, { useEffect, useState } from "react";
import {
	EquipmentListItemEmployee,
	EquipmentListItemEmployeeClearButton,
	EquipmentListItemEmployeeName,
	EquipmentListItemEmployeeWarning,
	TruckInfoDiv,
	TruckListItemDiv,
	EquipmentListItemEmployeeList,
	TruckListItemLocation,
	TruckNumberDiv,
	TruckNoticeDiv,
	TruckProblemsText,
	TruckStatusMessage,
	EquipmentListItemButton,
	UnassignBtn,
	TruckNoticeIndicator,
	BrixButton
} from "../../styled/magtable/ListContent";
import { useDrop, useDrag } from "react-dnd";
import {
	AM,
	BAY_LEAD,
	CON,
	DANGER,
	DEICE_TRUCK,
	GO,
	INOP,
	MANAGEMENT_POSITIONS,
	MECHANIC,
	OJT,
	OOS,
	PM,
	SERVICE_VEHICLE,
	SET_EQUIPMENT_EMPLOYEE,
	SET_TRUCK_LOCATION,
	SUCCESS,
	TECHNICIAN_POSITIONS,
	TOWER_POSITIONS,
	WARNING
} from "../../actions/constants";
import { useDispatch } from "react-redux";
import {
	clearAssignmentShifts,
	removeEquipmentEmployee,
	removeTruckLocation,
	setTruckLocation
} from "../../actions/magtable";
import { getBrixRecords } from "../../actions/brix";
import IconButton from "../common/IconButton";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Steven Wong, Arran Woodruff
 * Displays the content of a Truck's assignment.
 *
 * Truck's assignment status is displayed as a color within TruckNumberDiv as a prop
 *
 * Renders each associated employeeShift with the ability to clear assignments
 * in accordance with business rules (no secondaries assigned without a primary)
 *
 * showAM toggles which employees are displayed (not handled with react, handled in css)
 *
 * Logic is written to determine whether incoming shifts are allowed, provide
 * a warning, or are permitted
 * @category Components/MagTable
 * @constructor
 * @param assignment the associated assignment object
 * @param noticeOpen dictates whether or not to render the truck's notices
 * @param showAM toggle to display am or pm shift slots
 * @param openBrixModal boolean to toggle the brix management modal
 * @returns {*} The TruckListItem component
 */
function TruckListItem({ assignment, noticeOpen, showAM, openBrixModal }) {
	const [hoveredShiftDescription, setHoveredShiftDescription] = useState(null);
	const [localNoticeOpen, setLocalNoticeOpen] = useState(false);
	const [shifts, setShifts] = useState({});
	const { amPrimary, amSecondary, pmPrimary, pmSecondary } = shifts;

	const dispatch = useDispatch();

	const equipmentOperable =
		assignment.equipment.status === GO || assignment.equipment.status === CON;

	useEffect(() => {
		// clear assignments if status is changed to inop or oos
		if ([OOS, INOP].includes(assignment.equipment.status)) {
			dispatch(clearAssignmentShifts(assignment.equipment.id));
		}
	}, [assignment.equipment.status, assignment.equipment.id, dispatch]);

	useEffect(() => {
		const amPrimary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === AM && shift.isPrimary
		);
		const amSecondary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === AM && !shift.isPrimary
		);

		const pmPrimary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === PM && shift.isPrimary
		);
		const pmSecondary = assignment.employeeShifts.find(
			shift => shift.timeOfDay === PM && !shift.isPrimary
		);

		setShifts({ amPrimary, amSecondary, pmPrimary, pmSecondary });
	}, [assignment]);

	const [{ isDragging }, drag] = useDrag({
		item: {
			type: SET_TRUCK_LOCATION,
			id: assignment.equipment.id,
			toReassign: null
		},
		canDrag: equipmentOperable && !assignment.parkingLocation,
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				if (dropResult.assign) {
					dispatch(
						setTruckLocation(
							dropResult.parkingLocation,
							dropResult.position,
							dropResult.assign.equipmentID,
							dropResult.assign.bay
						)
					);
				}
				if (dropResult.reassign) {
					dispatch(
						setTruckLocation(
							dropResult.parkingLocation,
							dropResult.position,
							dropResult.reassign.equipmentID,
							dropResult.reassign.bay
						)
					);
				}
				if (dropResult.unassign?.length > 0) {
					dropResult.unassign.forEach(
						id => id && dispatch(removeTruckLocation(id))
					);
				}
			}
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging()
		})
	});

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: SET_EQUIPMENT_EMPLOYEE,
		drop: () => ({
			equipmentID: assignment.equipment.id,
			newShiftAttributes: newShiftAttributes()
		}),
		canDrop: item => {
			setHoveredShiftDescription(item.shiftDescription);
			return handleCanDrop(item);
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const newShiftAttributes = () => {
		const newShiftAttributes = {};

		newShiftAttributes.timeOfDay = showAM ? AM : PM;

		if (showAM) {
			newShiftAttributes.isPrimary = !amPrimary;
		} else {
			// PM case
			newShiftAttributes.isPrimary = !pmPrimary;
		}

		return newShiftAttributes;
	};

	const handleCanDrop = item => {
		if (!equipmentOperable) return false;
		// Logic to not allow more than 4 employees in a location.
		// if the list of employeeShifts does not have any nulls, it's full
		if (assignment.employeeShifts.length >= 4) return false;

		// make sure the employee isn't already assigned here
		if (assignment.employeeShifts.find(shift => shift?.id === item.id))
			return false;

		// if AM secondary slot is filled, then AM is full
		if (showAM === true) {
			return !amSecondary;
		}

		// if PM secondary slot is filled, then PM is full
		if (showAM === false) {
			return !pmSecondary;
		}
	};

	const handleClear = shiftID => {
		dispatch(removeEquipmentEmployee(assignment.equipment.id, shiftID));
	};

	const handleToggleLocalNotice = e => {
		if (e.currentTarget === e.target) {
			assignment.equipment.notice && setLocalNoticeOpen(!localNoticeOpen);
		}
	};

	const handleClearLocation = equipmentID => {
		dispatch(removeTruckLocation(equipmentID));
	};

	function getOutline(index) {
		const primaryDrop = index % 2 === 0; // even indexes are primaries
		if (primaryDrop !== newShiftAttributes().isPrimary) return null;

		// if can't drop, danger
		if (isOver && !canDrop) return DANGER;

		// if hovered shift is OJT and placed in a primary slot
		if (
			isOver &&
			canDrop &&
			hoveredShiftDescription === OJT &&
			(index === 0 || index === 2)
		)
			return WARNING;

		// if hovered shift is not included in technician positions
		// warn for non-managers in service vehicles
		// warn for non-technicians in trucks
		if (assignment.equipment.type === DEICE_TRUCK) {
			if (
				isOver &&
				canDrop &&
				!TECHNICIAN_POSITIONS.includes(hoveredShiftDescription)
			) {
				return WARNING;
			}
		} else if (assignment.equipment.type === SERVICE_VEHICLE) {
			if (
				isOver &&
				canDrop &&
				!MANAGEMENT_POSITIONS.includes(hoveredShiftDescription)
			) {
				return WARNING;
			}
		}

		if (isOver && canDrop) return SUCCESS;
	}

	function setAssignmentWarnings() {
		Object.values(shifts).forEach(shift => {
			if (!shift) return;

			if (TOWER_POSITIONS.includes(shift.description)) {
				if (assignment.equipment.type === DEICE_TRUCK) {
					shift.warning = "Tower Staff Assigned to Truck";
				} else if (assignment.equipment.type === SERVICE_VEHICLE) {
					shift.warning = "Tower Staff Assigned to Service Vehicle";
				}
				return;
			}

			if (
				MANAGEMENT_POSITIONS.includes(shift.description) &&
				assignment.equipment.type !== SERVICE_VEHICLE
			) {
				if (assignment.equipment.type === DEICE_TRUCK) {
					shift.warning = "Management Assigned to Truck";
				}
				return;
			}

			if (shift.description === MECHANIC) {
				if (assignment.equipment.type === DEICE_TRUCK) {
					shift.warning = "Mechanic Assigned to Truck";
				} else if (assignment.equipment.type === SERVICE_VEHICLE) {
					shift.warning = "Mechanic Assigned to Service Vehicle";
				}
				return;
			}

			if (
				assignment.equipment.type === SERVICE_VEHICLE &&
				!MANAGEMENT_POSITIONS.includes(shift.description)
			) {
				shift.warning = "Non-Management Assigned to Service Vehicle";
				return;
			}

			const isPrimary = shift.isPrimary;
			const isUnqualified = shift.description === OJT;
			let noSecondary;
			let unqualifiedSecondary;

			// set time of day-dependent booleans
			if (shift.timeOfDay === AM) {
				noSecondary = !amSecondary;
				unqualifiedSecondary =
					!TECHNICIAN_POSITIONS.includes(amSecondary?.description) &&
					amSecondary?.description !== OJT;
			} else {
				noSecondary = !pmSecondary;
				unqualifiedSecondary =
					!TECHNICIAN_POSITIONS.includes(pmSecondary?.description) &&
					amSecondary?.description !== OJT;
			}

			// final boolean expression to determine OJT warning
			if (isPrimary && isUnqualified && (noSecondary || unqualifiedSecondary)) {
				shift.warning = "OJT Requires Qualified Secondary";
				return;
			}

			// if no warning, clear warning attribute
			shift.warning = null;
		});
	}
	setAssignmentWarnings();

	function setCanClear() {
		Object.values(shifts).forEach(shift => {
			if (!shift) return;

			if (showAM) {
				shift.canClear = (shift.isPrimary && !amSecondary) || !shift.isPrimary;
			} else {
				shift.canClear = (shift.isPrimary && !pmSecondary) || !shift.isPrimary;
			}
		});
	}
	setCanClear();

	const currentPrimary = showAM ? amPrimary : pmPrimary;
	const currentSecondary = showAM ? amSecondary : pmSecondary;

	const handleBrixClick = () => {
		dispatch(getBrixRecords(assignment.equipment.id, currentPrimary?.name));

		openBrixModal();
	};

	return (
		<div ref={drop}>
			<TruckListItemDiv disabled={!equipmentOperable}>
				<TruckNumberDiv
					ref={drag}
					status={assignment.equipment.status}
					assigned={assignment.parkingLocation}
					isDragging={isDragging}
					disabled={!equipmentOperable}
					onClick={e => handleToggleLocalNotice(e)}
				>
					{assignment.equipment.id}
					{/* only render brix button if function exists */}
					{openBrixModal && (
						<BrixButton
							onClick={handleBrixClick}
							disabled={!equipmentOperable}
							className={"fas fa-eye-dropper"}
						/>
					)}
					{assignment.equipment.notice && (
						<TruckNoticeIndicator
							active={localNoticeOpen}
							disabled={!equipmentOperable}
							className={"fas fa-exclamation-triangle"}
							onClick={e => handleToggleLocalNotice(e)}
						/>
					)}
				</TruckNumberDiv>
				{equipmentOperable ? (
					<TruckInfoDiv>
						<EquipmentListItemEmployeeList>
							{/* PRIMARY */}
							<EquipmentListItemEmployee
								isBaylead={
									showAM
										? amPrimary?.description === BAY_LEAD
										: pmPrimary?.description === BAY_LEAD
								}
								outlineType={getOutline(0)}
							>
								<EquipmentListItemEmployeeName show={showAM} offPosition={150}>
									{amPrimary?.name}
								</EquipmentListItemEmployeeName>
								<EquipmentListItemEmployeeName
									show={!showAM}
									offPosition={-150}
								>
									{pmPrimary?.name}
								</EquipmentListItemEmployeeName>
								<EquipmentListItemEmployeeWarning>
									{currentPrimary?.warning && (
										<IconButton
											faClassName={"fa-exclamation-triangle"}
											color={"orange"}
											outlineType={"darkorange"}
											toolTip={currentPrimary?.warning}
										/>
									)}
								</EquipmentListItemEmployeeWarning>
								{currentPrimary && (
									<EquipmentListItemEmployeeClearButton>
										<EquipmentListItemButton
											disabled={!currentPrimary.canClear}
											onClick={() => handleClear(currentPrimary.id)}
										>
											<i className="fas fa-times" />
										</EquipmentListItemButton>
									</EquipmentListItemEmployeeClearButton>
								)}
							</EquipmentListItemEmployee>
							{/* SECONDARY */}
							<EquipmentListItemEmployee
								isBaylead={
									showAM
										? amSecondary?.description === BAY_LEAD
										: pmSecondary?.description === BAY_LEAD
								}
								darken
								outlineType={getOutline(1)}
							>
								<EquipmentListItemEmployeeName show={showAM} offPosition={150}>
									{amSecondary?.name}
								</EquipmentListItemEmployeeName>
								<EquipmentListItemEmployeeName
									show={!showAM}
									offPosition={-150}
								>
									{pmSecondary?.name}
								</EquipmentListItemEmployeeName>
								<EquipmentListItemEmployeeWarning>
									{currentSecondary?.warning && (
										<IconButton
											faClassName={"fa-exclamation-triangle"}
											color={"orange"}
											outlineType={"darkorange"}
											toolTip={currentSecondary?.warning}
										/>
									)}
								</EquipmentListItemEmployeeWarning>
								{currentSecondary && (
									<EquipmentListItemEmployeeClearButton>
										<EquipmentListItemButton
											disabled={!currentSecondary.canClear}
											onClick={() => handleClear(currentSecondary.id)}
										>
											<i className="fas fa-times" />
										</EquipmentListItemButton>
									</EquipmentListItemEmployeeClearButton>
								)}
							</EquipmentListItemEmployee>
						</EquipmentListItemEmployeeList>
						<TruckListItemLocation>
							{assignment.parkingLocation && (
								<>
									<UnassignBtn
										onClick={() => handleClearLocation(assignment.equipment.id)}
									>
										<i className="fas fa-times" />
									</UnassignBtn>
									<span>
										{assignment.parkingLocation.apron.substr(0, 1) +
											"-" +
											assignment.parkingLocation.phonetic +
											assignment.parkingLocation.position +
											(assignment.parkingLocation.bay || "")}
									</span>
								</>
							)}
						</TruckListItemLocation>
					</TruckInfoDiv>
				) : (
					<TruckStatusMessage status={assignment.equipment.status}>
						{/*Unavailable{" "}*/}
						<span id={"status_code"}>{assignment.equipment.status}</span>
					</TruckStatusMessage>
				)}
			</TruckListItemDiv>
			<TruckNoticeDiv noticeOpen={noticeOpen || localNoticeOpen}>
				{assignment.equipment.notice !== "" && (
					<TruckProblemsText>{assignment.equipment.notice}</TruckProblemsText>
				)}
			</TruckNoticeDiv>
		</div>
	);
}

export default React.memo(TruckListItem);
