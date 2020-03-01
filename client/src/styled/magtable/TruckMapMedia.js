import styled from "styled-components";

/**
 * @date 2020-02-20
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const PadDiv = styled.div`
	border-top: 3px solid black;
	border-bottom: 3px solid black;
	border-left: 4px solid black;
	border-right: 4px solid black;
	display: flex;
	width: 65px;
	flex-grow: 1;
	flex-basis: 0;
	align-items: center;
	justify-content: center;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
`;

export const FakePadDiv = styled.div`
	width: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
	flex-grow: 1;
	flex-basis: 0;
`;

export const PadColumn = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 20px;
	height: 90%;
`;

export const MapWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-around;
	overflow-y: auto;
	align-items: center;
`;

const NumberLabel = styled.div`
	color: grey;
	font-size: 130%;
	font-family: "Noto Sans KR", sans-serif;
`;

export const NumberMiddle = styled(NumberLabel)`
	height: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const NumberTop = styled(NumberLabel)`
	height: 40px;
	width: 100%;
	text-align: center;
`;
