import styled from "styled-components";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Styled Components
 * @module Common
 */

export const IconButton = styled.i`
	cursor: pointer;
	text-align: center;
	padding: 10px;

	${({ nohide }) => nohide && `opacity: 1 !important;`}
	${({ nopad }) => nopad && `padding: 0;`}
	
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
