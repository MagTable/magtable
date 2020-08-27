import styled from "styled-components";

/**
 * @date 2020-04-01
 * @author MJ Kochuk, Arran Woodruff
 * @module Styled
 */

export const TvViewContainer = styled.div`
	max-height: 100%;
	display: grid;
	grid-template-rows: 50px 1fr;
	position: relative;
`;

export const TvViewContent = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	max-height: 100%;

	${({ fullScreen }) =>
		fullScreen &&
		`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: white;
	`}
`;

export const ViewListContent = styled.div`
	position: relative;
	max-height: 100%;
	overflow-y: auto;
	border-right: 2px solid var(--navbar);
`;

export const SectionHeader = styled.h2`
	margin: 0;
	padding: 0.5rem;
	background: var(--navbar);
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ViewTruckList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ViewTruckListItem = styled.div`
	width: 50%;

	display: grid;
	grid-template-columns: auto 100px 1fr 1fr;
	grid-template-areas: "number location am pm";

	box-sizing: border-box;
	:nth-child(odd) {
		border-right: 2px solid var(--navbar-light);
	}
	:not(:last-child) {
		border-bottom: 2px solid var(--navbar-light);
	}

	${({ hasNotice }) =>
		hasNotice &&
		`
		background: var(--context-orange-light);
	`}
`;

export const ViewTruckNumber = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;

	h1 {
		margin: 0;
	}
`;

export const ViewTruckParkingLocation = styled.div`
	grid-area: location;

	font-family: "Consolas", sans-serif;

	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		margin: 0;
	}
`;

export const ViewTruckEmployees = styled.div`
	${({ am }) => am && `grid-area: am;`}
	${({ pm }) => pm && `grid-area: pm;`}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> * {
		margin: 0;
		text-align: center;
	}
`;

export const ViewTruckNotice = styled.span`
	padding: 0.5rem;
`;

export const ViewTruckNoticeListItem = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;

	box-sizing: border-box;
	:nth-child(odd) {
		border-right: 2px solid var(--navbar-light);
	}
	:not(:last-child) {
		border-bottom: 2px solid var(--navbar-light);
	}

	background: var(--context-orange-light);
`;

export const ViewTowerContainer = styled.div`
	position: absolute;
	width: 100%;
	bottom: 0;
	background: white;
`;

export const ViewTowerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

export const ViewTowerListType = styled(ViewTruckNumber)`
	width: 100%;
	h2 {
		margin: 0;
		padding: 0.5rem;
	}
`;

export const ViewTowerListItem = styled(ViewTruckListItem)`
	display: grid;
	grid-template-columns: 170px 1fr 1fr;
	grid-template-areas: "number am pm";

	> * {
		display: block;
		margin: 0;
	}
`;
