import React from "react";
import { ReactComponent as NoTextLogo } from "../../res/Images/NoTextLogo.svg";
import styled, { keyframes } from "styled-components";

/**
 * @date 2020-03-22
 * @author MJ Kochuk

 * @module Component
 */

const flyIn = keyframes`
  from {
    transform: translate(-350px, 150px);
  }

  to {
    transform: translate(4px,16px);
}
  }
`;

const slide = keyframes`
    from {
            transform: translatex(-330px);
    }
    
    to {
            transform: translateX(14px);
    }
`;

export const PlaneLoaderDiv = styled.div`
	width: 490px;
	height: 150px;
	overflow: hidden;
	position: relative;
	z-index: 10;
`;

export const PlaneImg = styled(NoTextLogo)`
    width: 150px;
    height: auto;
    position: absolute;
    animation: ${flyIn} 1s ease;
    transform: translate(4px,16px);
    z-index: 11;
}
`;

export const LogoText = styled.p`
	font-size: 71px;

	animation: ${slide} 1s ease;
	-webkit-animation-delay: 2s;
	animation-delay: 0.7s;
	animation-fill-mode: forwards;
	transform: translateX(-320px);
`;

export const TextHolder = styled.div`
	position: absolute;
	z-index: -1;
	transform: translate(138px, -50px);
	overflow: hidden;
	padding-right: 22px;
`;

/**
 *
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
