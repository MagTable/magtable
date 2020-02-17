import styled from "styled-components";

export const ConfirmationBox = styled.div`
	position: relative;

	button {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		border-radius: 999px;
		background: ${({ color }) => color || "red"};
		color: white;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 120px;
		left: -45px;
		top: 30px;

		:hover {
			background: ${({ hoverColor }) => hoverColor || "#d00"};
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

		border-bottom: 5px solid ${({ color }) => color || "red"};
	}
`;
