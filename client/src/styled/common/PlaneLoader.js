import styled, { keyframes } from "styled-components";
import { ReactComponent as NoTextLogo } from "../../res/Images/NoTextLogo.svg";

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
            transform: translate(-330px, -40px);
    }
    
    to {
            transform: translate(14px, -40px);
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
	font-size: 100px;

	animation: ${slide} 1s ease;
	-webkit-animation-delay: 2s;
	animation-delay: 0.7s;
	animation-fill-mode: forwards;
	transform: translate(-320px, 50px);
	font-family: "Bebas Neue", cursive;
`;

export const TextHolder = styled.div`
	position: absolute;
	z-index: -1;
	transform: translate(138px, -50px);
	overflow: hidden;
	padding-right: 22px;
`;
