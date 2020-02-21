import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import { TruckMapDiv } from "../../styled/magtable/Maps";
import ApronToggle from "./ApronToggle";
import {
	FakePadDiv,
	MapWrapper,
	NumberMiddle,
	NumberTop,
	PadColumn,
	PadDiv
} from "../../styled/magtable/TruckMapMedia";
import { useSelector } from "react-redux";
import { SET_TRUCK_LOCATION } from "../../actions/constants";
import { useDrop, useDrag } from "react-dnd";
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
function TruckMap() {
	const apron = useSelector(state => state.magtable.selectedApron);

	// const [{ canDrop, isOver }, drop] = useDrop({
	// 	accept: SET_TRUCK_LOCATION,
	// 	drop: () => ({
	// 		locationID: parkingID
	// 	}),
	// 	canDrop: item => true,
	// 	collect: monitor => ({
	// 		isOver: monitor.isOver(),
	// 		canDrop: monitor.canDrop()
	// 	})
	// });

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
							<ParkingLocations parkingID={1} pad={"AE"}></ParkingLocations>
							<ParkingLocations parkingID={2} pad={"AC"}></ParkingLocations>
							<PadDiv parkingID={3}>AW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>2</NumberTop>
							<PadDiv>BE</PadDiv>
							<PadDiv>BC</PadDiv>
							<PadDiv>BW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>3</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>CE</PadDiv>
							<PadDiv>CC</PadDiv>
							<PadDiv>CW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>5</NumberTop>
							<PadDiv>DE</PadDiv>
							<PadDiv>DC</PadDiv>
							<PadDiv>DW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>6</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>EE</PadDiv>
							<PadDiv>EC</PadDiv>
							<PadDiv>EW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>7</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>FE</PadDiv>
							<PadDiv>FC</PadDiv>
							<PadDiv>FW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>9</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>GE</PadDiv>
							<PadDiv>GC</PadDiv>
							<PadDiv>GW</PadDiv>
						</div>
					</PadColumn>
				</MapWrapper>
			) : (
				<MapWrapper>
					<PadColumn>
						<div>
							<PadDiv>AE</PadDiv>
							<PadDiv>AW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>1</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>BE</PadDiv>
							<PadDiv>BW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>2</NumberMiddle>
					<PadColumn>
						<div>
							<NumberTop>3</NumberTop>
							<PadDiv parkingID={9}>CE</PadDiv>
							<PadDiv>CW</PadDiv>
						</div>
					</PadColumn>
					<NumberMiddle>4</NumberMiddle>
					<PadColumn>
						<div>
							<PadDiv>D</PadDiv>
							<FakePadDiv />
						</div>
					</PadColumn>
				</MapWrapper>
			)}
		</TruckMapDiv>
	);
}

export default TruckMap;
