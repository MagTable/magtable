import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
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
 * @returns {*} The TruckMap component
 */
function TruckMap(props) {
	const apron = useSelector(state => state.magtable.selectedApron);

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
							<ParkingLocations parkingID={20} pad={"BE"} />
							<ParkingLocations parkingID={23} pad={"BC"} />
							<ParkingLocations parkingID={26} pad={"BW"} />
						</div>
					</PadColumn>
					<NumberMiddle>3</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={29} pad={"CE"} />
							<ParkingLocations parkingID={32} pad={"CC"} />
							<ParkingLocations parkingID={35} pad={"CW"} />
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>5</NumberTop>
							{/*No 5 is listed in Initial Parking Locations, assigning id's for 4, for now*/}
							<ParkingLocations parkingID={38} pad={"DE"} />
							<ParkingLocations parkingID={41} pad={"DC"} />
							<ParkingLocations parkingID={44} pad={"DW"} />
						</div>
					</PadColumn>
					<NumberMiddle>6</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={47} pad={"EE"} />
							<ParkingLocations parkingID={50} pad={"EC"} />
							<ParkingLocations parkingID={53} pad={"EW"} />
						</div>
					</PadColumn>
					<NumberMiddle>7</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={56} pad={"FE"} />
							<ParkingLocations parkingID={59} pad={"FC"} />
							<ParkingLocations parkingID={62} pad={"FW"} />
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
							<ParkingLocations parkingID={3} pad={"BE"} />
							<ParkingLocations parkingID={6} pad={"BW"} />
						</div>
					</PadColumn>
					<NumberMiddle>2</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>3</NumberTop>
							<ParkingLocations parkingID={9} pad={"CE"} />
							<ParkingLocations parkingID={12} pad={"CW"} />
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={15} pad={"D4"} />
							<FakePadDiv />
						</div>
					</PadColumn>
				</MapWrapper>
			)}
		</TruckMapDiv>
	);
}

export default TruckMap;
