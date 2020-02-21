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
				<MapWrapper>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={12} pad={"AE"} />
							<ParkingLocations parkingID={13} pad={"AC"} />
							<ParkingLocations parkingID={14} pad={"AW"} />
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>2</NumberTop>
							<ParkingLocations parkingID={15} pad={"BE"} />
							<ParkingLocations parkingID={16} pad={"BC"} />
							<ParkingLocations parkingID={17} pad={"BW"} />
						</div>
					</PadColumn>
					<NumberMiddle>3</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={21} pad={"CE"} />
							<ParkingLocations parkingID={22} pad={"CC"} />
							<ParkingLocations parkingID={23} pad={"CW"} />
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>5</NumberTop>
							{/*No 5 is listed in Initial Parking Locations, assigning id's for 4, for now*/}
							<ParkingLocations parkingID={27} pad={"DE"} />
							<ParkingLocations parkingID={28} pad={"DC"} />
							<ParkingLocations parkingID={29} pad={"DW"} />
						</div>
					</PadColumn>
					<NumberMiddle>6</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={33} pad={"EE"} />
							<ParkingLocations parkingID={34} pad={"EC"} />
							<ParkingLocations parkingID={35} pad={"EW"} />
						</div>
					</PadColumn>
					<NumberMiddle>7</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={39} pad={"FE"} />
							<ParkingLocations parkingID={40} pad={"FC"} />
							<ParkingLocations parkingID={41} pad={"FW"} />
						</div>
					</PadColumn>
					<NumberMiddle>9</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={45} pad={"GE"} />
							<ParkingLocations parkingID={46} pad={"GC"} />
							<ParkingLocations parkingID={47} pad={"GW"} />
						</div>
					</PadColumn>
				</MapWrapper>
			) : (
				//West Apron
				<MapWrapper>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={1} pad={"AE"} />
							<ParkingLocations parkingID={2} pad={"AW"} />
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={4} pad={"BE"} />
							<ParkingLocations parkingID={3} pad={"BW"} />
						</div>
					</PadColumn>
					<NumberMiddle>2</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>3</NumberTop>
							<ParkingLocations parkingID={9} pad={"CE"} />
							<ParkingLocations parkingID={10} pad={"CW"} />
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<ParkingLocations parkingID={11} pad={"D"} />
							<FakePadDiv />
						</div>
					</PadColumn>
				</MapWrapper>
			)}
		</TruckMapDiv>
	);
}

export default TruckMap;
