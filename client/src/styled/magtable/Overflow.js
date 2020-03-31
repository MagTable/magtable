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
		right: 0;
		top: -8px;
		width: 0;
		height: 0;

		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		border-bottom: 8px solid var(--context-grey);
	}

	#container {
		border: 2px solid var(--context-grey);

		z-index: 100;
		background: white;
		box-shadow: 2px 3px 3px #999;

		position: absolute;
		height: auto;
		right: 25%;
		top: 2.5rem;
	}
`;

export const OverflowMenuButton = styled.button`
	position: relative;
	transition: background 0.1s ease-in-out;
	background: var(--header);

	z-index: 95;
	padding: 0.5rem;
	width: 180px;

	cursor: pointer;
	border: 0;
	color: black;
	text-align: left;

	font-family: "Nanum Gothic", sans-serif;
	font-size: 15px;
	font-weight: bold;

	:first-child,
	:not(:last-child) {
		border-bottom: 2px solid var(--context-grey);
	}

	:hover {
		background: ${({ hoverColor }) =>
			hoverColor || "var(--context-grey-light)"};
	}
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
