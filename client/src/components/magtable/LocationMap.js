import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { ParkingLocation, TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import {
	FakePadDiv,
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import ParkingLocations from "../_dumbcomponents/ParkingLocations";

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
	const apron = useSelector(state => state.magtable.selectedApron);
	const assignments = useSelector(state => state.magtable.assignments);

	const filterParkingLocations = assignments.filter(
		assignment => assignment.parkingLocation !== null
	);

	const filteredLocations = filterParkingLocations.map(
		parkingLocation => parkingLocation.parkingLocation
	);

	return (
		<TruckMapDiv>
			<ListTitle>
				<ListTitleText>Parking Locations</ListTitleText>
				<ApronToggle />
			</ListTitle>
			{apron === "EDA" ? (
				//East Apron
				<MapWrapper>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={17} pad={"AE1"} />
							<ParkingLocations parkingID={18} pad={"AC1"} />
							<ParkingLocations parkingID={19} pad={"AW1"} />
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>2</NumberTop>
							{filteredLocations.includes(21) &&
							filteredLocations.includes(22) ? (
								<FakePadDiv>
									<ParkingLocations
										parkingID={21}
										originalParkingLocationID={20}
										pad={"BE1"}
										isSplit={true}
									/>
									<ParkingLocations
										parkingID={22}
										originalParkingLocationID={20}
										pad={"BE3"}
										isSplit={true}
									/>
								</FakePadDiv>
							) : (
								<ParkingLocations
									id={20}
									parkingID={20}
									originalParkingLocationID={20}
									pad={"BE"}
									leftPad={"BE1"}
									rightPad={"BE3"}
									enableDrop={true}
								/>
							)}
							{filteredLocations.includes(24) &&
							filteredLocations.includes(25) ? (
								<FakePadDiv>
									<ParkingLocations
										parkingID={24}
										originalParkingLocationID={23}
										pad={"BC1"}
										isSplit={true}
									/>
									<ParkingLocations
										parkingID={25}
										originalParkingLocationID={23}
										pad={"BC3"}
										isSplit={true}
									/>
								</FakePadDiv>
							) : (
								<ParkingLocations
									parkingID={23}
									originalParkingLocationID={23}
									pad={"BC"}
									leftPad={"BC1"}
									rightPad={"BC3"}
								/>
							)}
							{filteredLocations.includes(27) &&
							filteredLocations.includes(28) ? (
								<FakePadDiv>
									<ParkingLocations
										parkingID={27}
										originalParkingLocationID={26}
										isSplit={true}
										pad={"BW1"}
									/>
									<ParkingLocations
										parkingID={28}
										originalParkingLocationID={26}
										isSplit={true}
										pad={"BW3"}
									/>
								</FakePadDiv>
							) : (
								<ParkingLocations
									parkingID={26}
									originalParkingLocationID={26}
									pad={"BW"}
									leftPad={"BW1"}
									rightPad={"BW3"}
								/>
							)}
						</div>
					</PadColumn>
					<NumberMiddle>3</NumberMiddle>
					<PadColumn>
						<div>
							{filteredLocations.includes(30) ||
							filteredLocations.includes(31) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={30} pad={"CE4"} />
									<ParkingLocations parkingID={31} pad={"CE5"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={29} pad={"CE"} />
							)}
							{filteredLocations.includes(33) ||
							filteredLocations.includes(34) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={33} pad={"CC4"} />
									<ParkingLocations parkingID={34} pad={"CC5"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={32} pad={"CC"} />
							)}
							{filteredLocations.includes(36) ||
							filteredLocations.includes(37) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={36} pad={"CW4"} />
									<ParkingLocations parkingID={37} pad={"CW5"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={35} pad={"CW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>5</NumberTop>
							{filteredLocations.includes(39) ||
							filteredLocations.includes(40) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={39} pad={"DE4"} />
									<ParkingLocations parkingID={40} pad={"DE6"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={38} pad={"DE"} />
							)}
							{filteredLocations.includes(42) ||
							filteredLocations.includes(43) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={42} pad={"DC4"} />
									<ParkingLocations parkingID={43} pad={"DC6"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={41} pad={"DC"} />
							)}
							{filteredLocations.includes(45) ||
							filteredLocations.includes(46) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={45} pad={"DW4"} />
									<ParkingLocations parkingID={46} pad={"DW6"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={44} pad={"DW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>6</NumberMiddle>
					<PadColumn>
						<div>
							{filteredLocations.includes(48) ||
							filteredLocations.includes(49) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={48} pad={"EE6"} />
									<ParkingLocations parkingID={49} pad={"EE7"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={47} pad={"EE"} />
							)}
							{filteredLocations.includes(51) ||
							filteredLocations.includes(52) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={51} pad={"EC6"} />
									<ParkingLocations parkingID={52} pad={"EC7"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={50} pad={"EC"} />
							)}
							{filteredLocations.includes(54) ||
							filteredLocations.includes(55) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={54} pad={"EW6"} />
									<ParkingLocations parkingID={55} pad={"EW7"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={53} pad={"EW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>7</NumberMiddle>
					<PadColumn>
						<div>
							{filteredLocations.includes(57) ||
							filteredLocations.includes(58) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={57} pad={"FE7"} />
									<ParkingLocations parkingID={58} pad={"FE9"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={56} pad={"CE"} />
							)}
							{filteredLocations.includes(60) ||
							filteredLocations.includes(61) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={60} pad={"FC7"} />
									<ParkingLocations parkingID={61} pad={"FC9"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={59} pad={"FC"} />
							)}
							{filteredLocations.includes(63) ||
							filteredLocations.includes(64) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={63} pad={"FW7"} />
									<ParkingLocations parkingID={64} pad={"FW9"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={63} pad={"FW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>9</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={65} pad={"GE9"} />
							<ParkingLocations parkingID={66} pad={"GC9"} />
							<ParkingLocations parkingID={67} pad={"GW9"} />
						</div>
					</PadColumn>
				</MapWrapper>
			) : (
				//West Apron
				<MapWrapper>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={2} pad={"AE1"} />
							<ParkingLocations parkingID={1} pad={"AW1"} />
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							{filteredLocations.includes(4) ||
							filteredLocations.includes(5) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={4} pad={"BE1"} />
									<ParkingLocations parkingID={5} pad={"BE2"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={3} pad={"BE"} />
							)}
							{filteredLocations.includes(7) ||
							filteredLocations.includes(8) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={7} pad={"BW1"} />
									<ParkingLocations parkingID={8} pad={"BW2"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={6} pad={"BW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>2</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>3</NumberTop>
							{filteredLocations.includes(10) ||
							filteredLocations.includes(11) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={10} pad={"CE2"} />
									<ParkingLocations parkingID={11} pad={"CE4"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={9} pad={"CE"} />
							)}
							{filteredLocations.includes(13) ||
							filteredLocations.includes(14) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={13} pad={"CW2"} />
									<ParkingLocations parkingID={14} pad={"CW4"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={12} pad={"CW"} />
							)}
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							{filteredLocations.includes(15) ||
							filteredLocations.includes(16) ? (
								<FakePadDiv>
									<ParkingLocations parkingID={15} pad={"D4"} />
									<ParkingLocations parkingID={16} pad={"D4"} />
								</FakePadDiv>
							) : (
								<ParkingLocations parkingID={15} pad={"D4"} />
							)}
						</div>
					</PadColumn>
				</MapWrapper>
			)}
		</TruckMapDiv>
	);
}

export default LocationMap;
