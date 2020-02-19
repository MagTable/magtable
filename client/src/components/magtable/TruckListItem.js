import React from "react";
import {
	TruckInfoDiv,
	TruckListItemDiv,
	TruckListItemEmployee,
	TruckListItemEmployeeList,
	TruckListItemLocation,
	TruckNumberDiv,
	TruckProblemsDiv
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
 * @returns {*} The TruckListItem component
 */
function TruckListItem({ truck, open }) {
	let colorCode;

	// Sets the color for the TruckNumberDiv based on the status of the truck
	switch (truck.status) {
		case "GO": {
			colorCode = "--context-green"; // Operational
			break;
		}
		case "INOP": {
			colorCode = "--context-red"; // Inoperable
			break;
		}
		case "CON": {
			colorCode = "--context-blue"; // Conditional
			break;
		}
		case "OOS": {
			colorCode = "--context-grey"; // Out of service
			break;
		}
		default: {
			// If an unknown tuck status is provided.
		}
	}

	return (
		<div>
			<TruckListItemDiv>
				<TruckNumberDiv colorCode={colorCode}>{truck.id}</TruckNumberDiv>
				<TruckInfoDiv>
					<TruckListItemEmployeeList>
						{truck.employees.map(employee =>
							employee === null ? null : (
								<TruckListItemEmployee key={employee}>
									{employee}
								</TruckListItemEmployee>
							)
						)}
					</TruckListItemEmployeeList>

					<TruckListItemLocation>{truck.location}</TruckListItemLocation>
				</TruckInfoDiv>
			</TruckListItemDiv>
			<TruckProblemsDiv open={open}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
				doloremque doloribus fuga ipsa necessitatibus nobis? Culpa eligendi est
				facere minima neque quod recusandae repudiandae. Aut dignissimos esse
				est iste laboriosam, libero maiores minima necessitatibus nostrum
				perferendis quae recusandae velit veniam veritatis voluptate! Aut
				cumque, earum et facere ipsa ipsam quod recusandae rem repellat sapiente
				sunt unde. Animi architecto autem consequuntur debitis fuga illum, ipsum
				quod veniam. Ad, architecto at dignissimos exercitationem inventore
				ipsum magni nisi perferendis recusandae rem rerum soluta temporibus!
				Atque consequuntur eius eveniet exercitationem facilis. Doloremque,
				perspiciatis, quibusdam.
			</TruckProblemsDiv>
		</div>
	);
}

export default TruckListItem;
