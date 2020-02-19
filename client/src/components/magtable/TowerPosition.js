import React from "react";
import { TowerTitle, TowerTitleText } from "../../styled/magtable/Titling";
import { TowerPositionDiv } from "../../styled/magtable/Maps";

const TowerPosition = ({ position }) => {
	return (
		<TowerPositionDiv>
			<TowerTitle>
				<TowerTitleText>{position}</TowerTitleText>
			</TowerTitle>
		</TowerPositionDiv>
	);
};

export default TowerPosition;
