import styled, { keyframes } from "styled-components";
import { Form } from "formik";

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
	#submit {
		margin-top: 1rem;
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

export const BrixTableTitle = styled.h3`
	grid-area: table-title;
`;
