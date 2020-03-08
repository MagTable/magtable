import styled from "styled-components";

/**
 * @date 3/5/2020
 * @author Tom Allcock, MJ Kochuk
 * @module Styled
 */

const getTruckColorCode = status => {
	switch (status) {
		case "GO": {
			return "--context-green";
		}
		case "INOP": {
			return "--context-red";
		}
		case "CON": {
			return "--context-orange";
		}
		case "OOS": {
			return "--context-grey";
		}
		default: {
			return "#fff"; // If an unknown truck status is provided.
		}
	}
};

/**
 *
 **/
export const TruckManagementTitle = styled.div`
	background-color: var(--header);
	color: var(--header-text);
	display: flex;
	min-height: 50px;
	align-items: center;
	justify-content: space-between;
	height: 50px;
	text-align: center;
`;

export const TruckManagementWrapper = styled.div`
	border-right: 2px solid var(--border-color);
`;

export const TruckManagementListDiv = styled.div`
	transition: all 0.15s ease-in-out;
	margin: 0;
	display: flex;
	flex-direction: column;
	flex-grow: 1.2;
	flex-basis: 0;
	overflow-y: auto;
	overflow-x: hidden;
	max-height: calc(100vh - 70px);
`;

export const TruckManagementItemDiv = styled.div`
	display: flex;
	height: 60px;
`;

/**
 *
 */
export const TruckIdDiv = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	border-right: 10px solid var(${({ status }) => getTruckColorCode(status)});
	color: black;

	min-width: 60px;
	font-size: 30px;
	font-weight: bold;
`;

export const TruckManagementStatus = styled.h4`
	width: 5%;
	text-align: center;
	margin: 0;
	padding: 0.6rem 0;
	#status_code {
		background: var(${({ status }) => getTruckColorCode(status)});
		padding: 0.25rem 0.5rem;
	}
`;

export const TruckMgmtWrap = styled.div`
	width: 50%;
`;

/**
 *
 **/
export const EditTruckWrap = styled(TruckMgmtWrap)``;

/**
 *
 */
export const AddTruckWrap = styled(TruckMgmtWrap)``;

export const NoticeBox = styled.input`
	width: auto;
`;
