import styled, { keyframes } from "styled-components";
import { Form } from "formik";
import { DANGER, SUCCESS, WARNING } from "../../actions/constants";

/**
 * @date 3/24/2020
 * @author Arran Woodruff
 * @category Styled Components
 * @module MagTable
 */

export const getColor = type => {
	switch (type) {
		case DANGER:
			return "--context-red";
		case WARNING:
			return "--context-orange";
		case SUCCESS:
			return "--context-blue";
		default:
			return "--navbar";
	}
};

export const BrixWrapper = styled.div`
	display: grid;

	grid-template-columns: auto;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		"title"
		"form"
		"table-title"
		"table";

	// hide number increment arrows
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type="number"] {
		-moz-appearance: textfield;
	}

	input {
		width: 90%; // sorry - arran
	}
`;

export const BrixForm = styled(Form)`
	display: grid;

	grid-template-columns: 1fr 1fr;
	grid-auto-rows: auto;
	grid-gap: 1rem;
	grid-template-areas:
		"type1 type4"
		"nozzle purged"
		". ."
		"submit submit";

	#nozzle {
		grid-area: nozzle;
	}
	#type1 {
		grid-area: type1;
	}
	#type4 {
		grid-area: type4;
	}
	#purged {
		grid-area: purged;
	}
	#rowdata {
		grid-area: rowdata;
	}
	#submit {
		grid-area: submit;
		display: flex;
		justify-content: center;
		align-items: center;
		button {
			width: 100%;
			padding: 0.5rem;
		}
	}
`;

export const BrixWrapperTitle = styled.h2`
	grid-area: title;
	margin: 0;
`;

const fadeIn = keyframes`
  0% {
    background: var(--context-green-light);
  }
  100% {
    background: white;
  }
`;

export const BrixTableWrapper = styled.div`
	grid-area: table;

	overflow-y: auto;
	height: 20vh;
	max-height: 20vh;
	width: 30vw;

	border: 2px solid var(--border-color-light);

	tbody {
		tr {
			animation: 1s ${fadeIn} ease-out;
		}
	}
`;

export const ChartRowDataItem = styled.h4`
	margin: 0;

	${({ error }) =>
		error &&
		`
		color: var(--context-red);
	`}
`;

export const BrixTableTitle = styled.h3`
	grid-area: table-title;
`;

export const WeatherDataWrapper = styled.div`
	background: var(--navbar-light);
	padding: 0.75rem;
	max-height: 100%;
	overflow: hidden;
	border-radius: 0.45rem;
	color: var(--title-bright);
	position: relative;

	transition: box-shadow 0.5s ease-in-out;
	display: flex; // to display horizontally

	box-shadow: inset 0 0 7px 2px var(--context-green);

	border: 2px solid var(--navbar-light);

	${({ status }) =>
		status &&
		`
			box-shadow: inset 0 0 7px 2px var(${getColor(status)});
	`}
`;

export const WeatherDataItem = styled.h4`
	margin: 0;
	min-width: 83px;
	text-align: center;

	:not(:first-child) {
		padding: 0 1.25rem;
	}

	${({ large }) =>
		large &&
		`
			font-size: 130%; 
	`}

	${({ hideSm }) =>
		hideSm &&
		`
			@media (max-width: 1100px) {
				display: none;
			}
	`};
`;

export const DailyMixButtons = styled.div`
	display: flex;
	flex-direction: column;

	height: 2.5rem;

	position: absolute;
	right: 15px;
	top: calc(50% - 1.25rem);

	i {
		cursor: pointer;
		transition: color 0.25s ease-in-out;
		font-size: 120%;

		:hover {
			color: var(--shader-grey);
		}
	}
`;

export const BrixExportWrapper = styled.div`
	input[type="text"] {
		box-sizing: border-box;
	}

	h2 {
		margin-top: 0;
	}
	h4 {
		margin: 0 0 0.25rem 0;
	}
`;
