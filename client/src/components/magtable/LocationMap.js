import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import {
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn,
	FakePadDiv
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import ParkingLocation from "../_dumbcomponents/ParkingLocation";
import { CENTER, EAST, WEST } from "../../actions/constants";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The LocationMap component
 */
function LocationMap(props) {
	const selectedApron = useSelector(state => state.magtable.selectedApron);
	const parkingLocations = useSelector(
		state => state.magtable.parkingLocations
	);
	const assignmentsWithLocation = useSelector(state =>
		state.magtable.assignments.filter(
			assignment => !!assignment.parkingLocation
		)
	);

	console.log(
		assignmentsWithLocation.filter(
			assignment =>
				assignment.parkingLocation.id === 1 &&
				assignment.parkingLocation.position === EAST
		)
	);

	return (
		<TruckMapDiv>
			<ListTitle>
				<ListTitleText>Parking Locations</ListTitleText>
				<ApronToggle />
			</ListTitle>
			<MapWrapper>
				{parkingLocations.map(
					location =>
						location.apron === selectedApron && (
							<>
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
								<NumberMiddle>{location.right}</NumberMiddle>
							</>
						)
				)}
			</MapWrapper>
		</TruckMapDiv>
	);
}

export default LocationMap;
