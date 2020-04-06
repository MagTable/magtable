import React, { useState } from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
import {
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn,
	FakePadDiv,
	SafetyZoneWrapper
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import ParkingLocation from "./ParkingLocation";
import { CENTER, EAST, WEST } from "../../actions/constants";
import IconButton from "../common/IconButton";
import OverflowLocations from "./OverflowLocations";

/**
 * @date 2020-02-17
 * @author MJ Kochuk, Arran Woodruff, Steven Wong
 * @category Components/MagTable
 * @constructor
 * @param props The props that are used within the component
 * @returns {*} The ParkingLocationMap component
 */
function ParkingLocationMap(props) {
	const [overflowOpen, setOverflowOpen] = useState(false);
	const selectedApron = useSelector(state => state.magtable.selectedApron);
	const parkingZones = useSelector(state => state.magtable.parkingZones);
	const assignmentsWithLocation = useSelector(state =>
		state.magtable.assignments.filter(
			assignment => !!assignment.parkingLocation
		)
	);

	return (
		<TruckMapDiv>
			<ListTitle>
				<ListTitleText>Parking Locations: {selectedApron}</ListTitleText>
				<OverflowLocations open={overflowOpen} setOpen={setOverflowOpen}>
					{({ openOverflow }) => (
						<IconButton
							faClassName="fa-bars fa-lg"
							onClick={openOverflow}
							color={"var(--header-text)"}
							hoverColor={"grey"}
						/>
					)}
				</OverflowLocations>
			</ListTitle>
			<MapWrapper>
				{parkingZones.map(
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
													assignment.parkingLocation.zoneID === location.id &&
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
													assignment.parkingLocation.zoneID === location.id &&
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
													assignment.parkingLocation.zoneID === location.id &&
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
