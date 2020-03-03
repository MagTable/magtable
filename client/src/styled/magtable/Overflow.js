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

	#arrow {
		position: absolute;
		width: 120px;
		left: 7px;
		top: 25px;

		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;

		border-bottom: 5px solid ${({ color }) => color || "white"};
	}
`;

export const OverflowMenuButton = styled.button`
	z-index: 5;
	padding: 0.5rem;

	cursor: pointer;
	border: 0;
	background: ${({ color }) => color || "white"};
	color: black;
	text-align: left;

	box-shadow: 2px 2px 3px #999;

	position: relative;
	width: 180px;
	left: -50px;
	top: 100px;

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
