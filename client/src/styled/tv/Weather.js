import styled from "styled-components";

/**
 * @date 2020-03-25
 * @author MJ Kochuk, Arran Woodruff
 * @category Styled Components
 * @module TV
 */

/**
 * Holds all the weather information in the sidebar displayed in the TV page
 **/
export const SideBar = styled.div`
	max-height: calc(100vh - 120px);
	text-align: center;
	border-left: 1px solid var(--border-color);

	display: block;

	@media (max-height: 1600px) {
		display: grid;

		grid-template-rows: auto 1fr;
		grid-template-columns: 50% 50%;
		grid-template-areas:
			"date date"
			"current later"
			"current later";

		#weather_current {
			grid-area: current;
			border-right: 1px solid var(--border-color);
		}

		#weather_later {
			grid-area: later;
		}

		#weather_date {
			grid-area: date;

			border-bottom: 1px solid var(--border-color);
			padding: 0.5rem 0;
			h1 {
				margin: 0;
			}
		}
	}
`;

export const WeatherWording = styled.h4`
	margin: 0.5rem 0 0.5rem 0;
	text-transform: capitalize;
`;

export const DescriptionWording = styled(WeatherWording)`
	font-size: 19px;
`;

export const TempHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
	padding: 0 10px;
`;

export const GreyTempHolder = styled(TempHolder)`
	background: #9fc6ff70;
	padding: 11px 0;
	flex-direction: column;
	margin: 15px 0;
`;

export const Temp = styled.h2`
	margin-block-end: 0;
	margin-block-start: 0;
`;

export const TimePeriodDiv = styled.div`
	position: relative;
	max-height: 100%;
	overflow-y: auto;
`;

export const TimePeriodTitle = styled.h2`
	position: sticky;
	top: 0;
	z-index: 1;
	margin: 0.5rem 0;
	background: white;

	@media (min-height: 1600px) {
		:before {
			border-top: 2px solid black;
			content: "";
			margin: 0 auto;
			position: absolute;
			top: 50%;
			left: 0;
			right: 0;
			bottom: 0;
			width: 95%;
			z-index: -1;
		}

		span {
			background: #fff;
			padding: 0 5px;
		}
	}
`;

export const LaterHourWrapper = styled.div`
	padding: 0.5rem;
	:nth-child(odd) {
		background: #9fc6ff70;
	}
`;

export const LaterHourHead = styled(WeatherWording)`
	font-size: 22px;
	color: black;
`;

/**
 * Base for weather icons
 */
const StatusIcon = styled.i`
	font-size: 40px;
	margin-bottom: 15px;
`;

export const SunIcon = styled(StatusIcon)`
	color: #eaab0ea3;
`;

export const ThunderstormIcon = styled(StatusIcon)`
	color: dimgrey;
`;

export const WindIcon = styled(StatusIcon)`
	color: dimgrey;
	font-size: 60px;
`;

export const SnowIcon = styled(StatusIcon)`
	color: #9fc6ff;
`;

export const RainIcon = styled(StatusIcon)`
	color: #b2f3ff;
`;

export const CloudIcon = styled(StatusIcon)`
	color: #4d6367;
`;

export const AtmosphereIcon = styled(StatusIcon)`
	color: #636363;
`;

export const WindArrow = styled(StatusIcon)`
	transform: rotate(${props => props.angle}deg);
	margin: 0;
	font-size: 45px;
`;

export const WindArrowWrap = styled.div`
	margin-top: 25px;
`;
