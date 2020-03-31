import styled from "styled-components";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @category Styled Components
 * @module TV
 */

/**
 * Holds all the weather information in the sidebar displayed in the TV page
 **/
export const SideBar = styled.div`
	height: calc(100vh - 70px);
	width: 119px;
	float: right;
	text-align: center;
	border-left: 2px solid var(--border-color);
`;

/**
 * Base for weather icons
 */
const StatusIcon = styled.i`
	font-size: 90px;
	margin: 15px 0;
`;

export const SunIcon = styled(StatusIcon)`
	color: #eaab0ea3;
`;

export const WindIcon = styled(StatusIcon)`
	color: dimgrey;
`;

export const SnowIcon = styled(StatusIcon)`
	color: #9fc6ff;
`;

export const RainIcon = styled(StatusIcon)`
	color: #b2f3ff;
`;

export const CloudIcon = styled(StatusIcon)`
	color: #b2f3ff;
`;

export const AtmosphereIcon = styled(StatusIcon)`
	color: dodgerblue;
`;

export const WindArrow = styled(StatusIcon)`
	transform: rotate(${props => props.angle}deg);
`;

export const WeatherWording = styled.h4`
	margin-block-end: 0;
	margin-block-start: 0;
	text-transform: capitalize;
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
	padding-top: 25px;
`;

export const LaterTitle = styled.h2`
	background: white;
	width: min-content;
	margin: auto;
	position: absolute;
	margin: auto;
	right: 32px;
	bottom: 935px;
	color: black;
`;

export const LaterHourWrapper = styled.div`
	margin-block-end: 25px;
`;

export const LaterHourHead = styled(WeatherWording)`
	font-size: 22px;
	color: black;
`;

export const NowTitle = styled(LaterTitle)`
	bottom: 15px;
`;

export const LaterIcon = styled(StatusIcon)`
	font-size: 60px;
`;
