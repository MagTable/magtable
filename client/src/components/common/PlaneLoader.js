import React from "react";
import { ReactComponent as NoTextLogo } from "../../res/Images/NoTextLogo.svg";
import {
	LogoText,
	PlaneImg,
	PlaneLoaderDiv,
	TextHolder
} from "../../styled/common/PlaneLoader";

/**
 * @date 2020-03-22
 * @author MJ Kochuk, Steven Wong
 * @name PlaneLoader
 * @category Component/Common
 * @constructor
 * @param props
 * @returns {*} The PlaneLoader component
 */
function PlaneLoader(props) {
	return (
		<PlaneLoaderDiv>
			<PlaneImg src={NoTextLogo} />
			<TextHolder>
				<LogoText>MagTable</LogoText>
			</TextHolder>
		</PlaneLoaderDiv>
	);
}

export default PlaneLoader;
