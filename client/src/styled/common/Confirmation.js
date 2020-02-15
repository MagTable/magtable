import styled from "styled-components";

export const ConfirmationBox = styled.div`
	position: relative;
	float: center;

	button {
		z-index: 5;
		padding: 1rem;
		position: absolute;
		top: 20px;
		border: 0;
		background: white;
		color: red;
	}

	${({ color }) =>
		color &&
		`
		color: ${color}
	`}

	${({ hoverColor }) =>
		hoverColor &&
		`
		:hover {
			color: ${hoverColor};
		}
	`}
`;
