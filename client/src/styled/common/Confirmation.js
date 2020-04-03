import styled from "styled-components";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Styled Components
 * @module Common
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
		bottom: calc(-100%);

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#d00"};
		}
	}

	#arrow {
		position: absolute;

		width: 0;
		height: 0;
		left: calc(50% - 5px) !important;
		top: -5px !important;

		border-left: 5px solid transparent !important;
		border-right: 5px solid transparent !important;
		border-bottom: 5px solid ${({ color }) => color || `red`} !important;
	}
`;
