import styled from "styled-components";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Styled Components
 * @module TV
 */

/**
 *
 **/
export const SideBar = styled.div`
	height: calc(100vh - 70px);
	width: 119px;
	float: right;
	text-align: center;
	border-left: 2px solid var(--border-color);
`;

export const StatusIcon = styled.i`
	font-size: 90px;
	margin: 15px 0;
`;

export const SunIcon = styled(StatusIcon)`
	color: #eaab0e;
`;

export const WindIcon = styled(StatusIcon)`
	color: dimgrey;
`;

export const SnowIcon = styled(StatusIcon)`
	color: dodgerblue;
`;

export const WindArrow = styled(StatusIcon)`
	transform: rotate(225deg);
`;

export const WeatherWording = styled.h4`
	margin-block-end: 0;
	margin-block-start: 0;
`;

export const TempHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
	padding: 0 10px;
`;

export const GreyTempHolder = styled(TempHolder)`
	background: var(--context-grey);
	padding: 11px 0;
	flex-direction: column;
`;

export const Temp = styled.h2`
	margin-block-end: 0;
	margin-block-start: 0;
`;

export const LaterDiv = styled.div`
	border-top: 2px solid var(--border-color);
	margin-top: 20px;
	position: relative;
	color: #a2a2a2;
`;

export const LaterTitle = styled.h2`
	background: white;
	width: min-content;
	margin: auto;
	position: absolute;
	margin: auto;
	right: 32px;
	bottom: 118px;
	color: black;
`;

export const LaterIcon = styled(StatusIcon)`
	font-size: 60px;
`;
