import styled from "styled-components";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @module Styled
 */

export const IconButton = styled.i`
	cursor: pointer;
	text-align: center;
	padding: 10px;

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
