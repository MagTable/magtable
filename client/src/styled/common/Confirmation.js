import styled from "styled-components";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @module Component
 */

export const ConfirmationBox = styled.div`
	position: relative;

	#confirmButton {
		position: absolute;
		z-index: 100;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		border-radius: 999px;
		background: ${({ color }) => color || "red"};
		color: white;

		box-shadow: 2px 2px 3px #999;

		width: 120px;
		left: calc(50% - 60px);
		top: calc(100% + 0.5rem);

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#d00"};
		}
	}

	#arrow {
		position: absolute;

		width: 0;
		height: 0;
		left: calc(50% - 5px);
		top: calc(100% + 0.5rem - 5px);

		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid ${({ color }) => color || `red`};
	}
`;
