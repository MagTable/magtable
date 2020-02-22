import styled from "styled-components";
import { TruckListDiv } from "./ListContent";

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
	height: 130px;
	width: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
`;

export const FakePadDiv = styled.div`
	height: 130px;
	width: 65px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
	color: grey;
`;

export const PadColumn = styled.div`
	height: 100%;
	width: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const MapWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-around;
`;

const NumberLabel = styled.div`
	color: grey;
	font-size: x-large;
	font-family: "Noto Sans KR", sans-serif;
`;

export const NumberMiddle = styled(NumberLabel)`
	height: 100%;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const NumberTop = styled(NumberLabel)`
	height: 0px;
	transform: translate(0px, -50px);
	width: 100%;
	text-align: center;
`;

export const TruckMapDivWrapper = styled(TruckListDiv)`
	border: 2px solid var(--border-color);
`;
