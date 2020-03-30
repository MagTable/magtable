import styled from "styled-components";

/**
 * @date 3/1/2020
 * @author Tom Allcock, Arran Woodruff
 * @category Styled Components
 * @module MagTable
 */

/**
 *
 **/
export const OverflowMenu = styled.div`
	position: relative;
	overflow: visible;

	#arrow {
		z-index: 100;
		position: absolute;
		left: 7px;
		top: 20px;
		width: 0;
		height: 0;

		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid var(--context-grey);
	}

	#container {
		z-index: 100;
		background: white;
		box-shadow: 2px 3px 3px #999;

		position: absolute;
		height: auto;
		right: calc(100% - 17px);
		top: 25px;
	}
`;

export const OverflowMenuButton = styled.button`
	transition: background 0.1s ease-in-out;

	z-index: 100;
	padding: 0.5rem;
	width: 160px;

	cursor: pointer;
	border: 0;
	color: black;
	text-align: left;

	:not(:last-child) {
		border-bottom: 2px solid var(--context-grey);
	}

	font-family: "Nanum Gothic", sans-serif;
	font-size: 15px;
	font-weight: bold;

	:hover {
		background: ${({ hoverColor }) =>
			hoverColor || "var(--context-grey-light)"};
	}

	${({ waiting }) =>
		waiting &&
		`
		background: var(--context-grey-light);
		cursor: wait;
	`}
`;

export const FilterIcon = styled.i`
	cursor: pointer;
	float: right;
	padding: 1px;
	width: 30px;
	text-align: center;

	${({ color }) =>
		color &&
		`
		color: ${color};
	`}

	${({ hoverColor }) =>
		hoverColor &&
		`
		:hover {
			color: ${hoverColor};
		}
	`}
`;
