import styled from "styled-components";
import React from "react";

/**
 * @date 2020-03-03
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * @constructor
 * @returns {*} The NavBar component
 */

export const LoadingImg = styled.i`
	animation: loading-spin infinite 1s linear;
	font-size: 40px;
	height: fit-content;
`;

export const LoaderCover = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-content: center;
	position: absolute;
	z-index: 10;
`;

export const LoginLoader = styled(LoaderCover)`
	transform: translate(-2rem, -2rem);
`;

export function SpinningLoadIcon() {
	return (
		<LoaderCover>
			<LoadingImg className="fas fa-circle-notch" />
		</LoaderCover>
	);
}

// export function LoginLoadIcon(){
//     return (
//         <LoginLoader>
//             <LoadingImg className="fas fa-circle-notch"//>
//         </LoginLoader>
//     );
// }
