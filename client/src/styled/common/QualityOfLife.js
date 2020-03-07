import styled from "styled-components";
import React from "react";
import FadeIn from "react-fade-in";

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
	width: fit-content;
	text-align: center;
`;

export const SpinnerWrap = styled.div`
	text-align: center;
`;

export const LoadingText = styled.p`
	font-size: 25px;
	margin-block-start: 0em;
`;

export const LoaderCover = styled.div`
	background-color: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(5px);
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	transform: translate(-32px, -32px);
`;

export const LoginLoader = styled(LoaderCover)`
	transform: translate(-2rem, -2rem);
	border-radius: 0.45rem;
	flex-direction: column;
`;

export function SpinningLoadIcon() {
	return (
		<LoaderCover>
			<LoadingImg className="fas fa-circle-notch" />
		</LoaderCover>
	);
}

export function LoginLoadIcon({ loading }) {
	if (!loading) return null;

	if (loading) {
		return (
			<LoginLoader>
				<FadeIn>
					<LoadingText>Logging in...</LoadingText>
					<SpinnerWrap>
						<LoadingImg className="fas fa-circle-notch" />
					</SpinnerWrap>
				</FadeIn>
			</LoginLoader>
		);
	}
}