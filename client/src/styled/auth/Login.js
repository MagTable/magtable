import styled from "styled-components";
import { OkButton } from "../common/FormControl";
import PlaneBG from "../../res/Images/Plane_BG.jpg";

/**
 * @date 2020-02-13
 * @author MJ Kochuk
 * @module Styled
 */

export const Background = styled.div`
	background-image: url(${PlaneBG});
	height: calc(100vh + 10px);
	background-size: calc(100vw + 20px);
	background-position: center;
	filter: blur(5px);
	width: calc(100vw + 20px);
	transform: translate(-10px, -10px);
`;

export const BGContainer = styled.div`
	overflow: hidden;
	position: absolute;
	z-index: -5;
`;

/**
 * The container immediately surrounding the login elements, provides style and input positioning.
 */
export const LoginBlock = styled.div`
	max-width: 350px;
	height: auto;
	padding: 2rem;
	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06), 0 0 6px rgba(0, 0, 0, 0.23);
	margin: auto;
	border-radius: 0.45rem;
	margin-top: 90px;
	background: white;
	position: relative;
	&:focus-within ${Background} {
		filter: blur(15px);
	}

	h1 {
		margin: 0 0 1rem 0;
	}
`;

/**
 * The submit button to log in to the app
 */
export const LoginBtn = styled(OkButton)`
	margin: auto;
	margin-top: 10px;
	padding: 10px;
`;
