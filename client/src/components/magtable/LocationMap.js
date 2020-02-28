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
import ParkingLocations from "../_dumbcomponents/ParkingLocations";
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
										<ParkingLocations
											parkingID={location.id}
											label={location.phonetic + "E"}
											position={EAST}
										/>
									)}
									{location.center && (
										<ParkingLocations
											parkingID={location.id}
											label={location.phonetic + "C"}
											position={CENTER}
										/>
									)}
									{location.west && (
										<ParkingLocations
											parkingID={location.id}
											label={location.phonetic + "W"}
											position={WEST}
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
