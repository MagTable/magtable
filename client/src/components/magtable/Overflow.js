import styled from "styled-components";

/**
 * @date 3/1/2020
 * @author Tom Allcock
 * @module Styled
 */

/**
 *
 **/
export const OverflowMenuItem = styled.div`
	position: relative;

	buttonAM {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 30px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}
	buttonPM {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 65px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}
	buttonTech {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 100px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}
	buttonTower {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 135px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}
	buttonRefresh {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 170px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}
	buttonShifts {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		background: ${({ color }) => color || "white"};
		color: black;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 140px;
		left: -130px;
		top: 170px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#c7c7c7"};
		}
	}

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
