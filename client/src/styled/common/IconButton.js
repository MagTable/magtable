import styled from "styled-components";

export const IconButton = styled.i`
	cursor: pointer;
	text-align: center;
	width: 25px;

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
