import React from "react";
import { ListTitle, ListTitleText } from "../../styled/magtable/Titling";
import TruckListItem from "../magtable/TruckListItem";
import {
	TruckListDiv,
	TruckListDivWrapper
} from "../../styled/magtable/ListContent";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TruckList component
 */
function TruckList({ trucks }) {
	return (
		<TruckListDivWrapper>
			<ListTitle>
				<ListTitleText>Trucks</ListTitleText>
			</ListTitle>
			<TruckListDiv>
				{trucks.map(truck => (
					<TruckListItem key={truck.id} truck={truck} />
				))}
			</TruckListDiv>
		</TruckListDivWrapper>
	);
}

export default TruckList;
