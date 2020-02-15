import styled from "styled-components";

export const ConfirmationBox = styled.div`
	position: relative;

	button {
		z-index: 5;
		padding: 0.5rem;

		cursor: pointer;
		border: 0;
		border-top: 2px solid black;
		// border-radius: 5px;
		background: red;
		color: white;

		box-shadow: 2px 2px 3px #999;

		position: absolute;
		width: 120px;
		left: -45px;
		top: 30px;

		:hover {
			background: #d00;
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

		border-bottom: 5px solid black;
	}
`;
