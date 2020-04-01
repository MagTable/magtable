import styled from "styled-components";

/**
 * @date 2020-03-24
 * @author Arran Woodruff
 * @category Styled Components
 * @module Common
 */

export const Table = styled.table`
	border-spacing: 0;
	border-collapse: collapse;
	width: 100%;

	td,
	th {
		padding: 0.5rem;
		text-align: center;
	}
`;

export const Thead = styled.thead`
	border-bottom: 2px solid var(--border-color-light);
`;

export const Td = styled.td``;

export const Th = styled.th`
	// tbody scroll only
	position: sticky;
	top: 0;
	background: var(--modal-bg);
`;

export const Tr = styled.tr`
	:hover {
		background: var(--context-grey-light);
	}
	:not(:last-child) {
		border-bottom: 1px solid var(--border-color-light);
	}
`;
