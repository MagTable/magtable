import styled from "styled-components";

/**
 * @date 3/1/2020
 * @author Tom Allcock
 * @module Styled
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
		border-bottom: 5px solid white};
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
	z-index: 100;
	padding: 0.5rem;
	width: 150px;

	cursor: pointer;
	border: 0;
	color: black;
	text-align: left;

	box-shadow: 2px 2px 3px #999;

	:hover {
		background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
	}
`;

export const FilterIcon = styled.i`
	cursor: pointer;
	float: right;
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
