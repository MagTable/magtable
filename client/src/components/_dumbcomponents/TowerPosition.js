import React from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import { TowerPositionDiv } from "../../styled/magtable/Maps";

/**
 * @date 2020-02-17
 * @author MJ Kochuk
 * @module Component
 */

/**
 *
 * @constructor
 * @param props
 * @returns {*} The TowerPosition component
 */
function TowerPosition({ role }) {
	return (
		<TowerPositionDiv>
			<TowerTitle>
				<TowerTitleText>{role}</TowerTitleText>
			</TowerTitle>
		</TowerPositionDiv>
	);
}

export default TowerPosition;
