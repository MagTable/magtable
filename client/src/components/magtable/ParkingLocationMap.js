import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import {
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn,
	FakePadDiv,
	SafetyZoneWrapper,
	MagTableManipDiv,
	MagTableManipBtn
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import ParkingLocation from "./ParkingLocation";
import { CENTER, EAST, WEST } from "../../actions/constants";
import { Button } from "../../styled/common/FormControl";
import Confirmation from "../common/Confirmation";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The ParkingLocationMap component
 */
function ParkingLocationMap(props) {
	const selectedApron = useSelector(state => state.magtable.selectedApron);
	const parkingLocations = useSelector(
		state => state.magtable.parkingLocations
	);
	const assignmentsWithLocation = useSelector(state =>
		state.magtable.assignments.filter(
			assignment => !!assignment.parkingLocation
		)
	);

	return (
		<TruckMapDiv>
			<ListTitle>
				<ListTitleText>Parking Locations</ListTitleText>
				<ApronToggle />

				<MagTableManipDiv>
					<Confirmation confirmationMessage={"Confirm Clear"} action={() => {}}>
						{({ confirm }) => (
							<MagTableManipBtn onClick={confirm}>Clear All</MagTableManipBtn>
						)}
					</Confirmation>

					<MagTableManipBtn>Publish</MagTableManipBtn>
				</MagTableManipDiv>
			</ListTitle>
			<MapWrapper>
				{parkingLocations.map(
					location =>
						location.apron === selectedApron && (
							<SafetyZoneWrapper key={location.id}>
								<PadColumn>
									<NumberTop>{location.composite}</NumberTop>
									{location.east && (
										<ParkingLocation
											parkingLocation={location}
											position={EAST}
											assignments={assignmentsWithLocation.filter(
												assignment =>
													assignment.parkingLocation.id === location.id &&
													assignment.parkingLocation.position === EAST
											)}
										/>
									)}
									{location.center && (
										<ParkingLocation
											parkingLocation={location}
											position={CENTER}
											assignments={assignmentsWithLocation.filter(
												assignment =>
													assignment.parkingLocation.id === location.id &&
													assignment.parkingLocation.position === CENTER
											)}
										/>
									)}
									{location.west && (
										<ParkingLocation
											parkingLocation={location}
											position={WEST}
											assignments={assignmentsWithLocation.filter(
												assignment =>
													assignment.parkingLocation.id === location.id &&
													assignment.parkingLocation.position === WEST
											)}
										/>
									)}
									{location.double && <FakePadDiv />}
								</PadColumn>
								{!location.double && (
									<NumberMiddle>{location.right}</NumberMiddle>
								)}
							</SafetyZoneWrapper>
						)
				)}
			</MapWrapper>
		</TruckMapDiv>
	);
}

export default ParkingLocationMap;
