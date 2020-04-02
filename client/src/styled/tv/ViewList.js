import styled from "styled-components";

/**
 * @date 2020-04-01
 * @author MJ Kochuk
 * @module Styled
 */

export const TVWrap = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
`;

/**
 *
 **/
export const ViewListDiv = styled.div`
	width: calc(100vw - 200px);
	justify-self: center;
	height: min-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

export const ListItemWrapper = styled.div`
	width: 100%;
	display: flex;
	//border-bottom: 1px solid grey;
	${({ isEven }) =>
		isEven
			? `
			background-color: #9fc6ff70;
		`
			: `
		`}
`;

export const UnassignedWrap = styled.div`
	width: 100%;
	background-color: #d3d3d3;
	:nth-child(odd) {
		background: #bdbdbd;
	}
`;

export const TruckNumDiv = styled.div`
	height: 50px;
	width: 50px;
	//border-left: 1px solid grey;
	border-right: 1px solid grey;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TruckNumDivUnassigned = styled(TruckNumDiv)`
	height: 30px;
`;

export const TruckNum = styled.span`
	font-size: 20px;
	width: 50px;
	text-align: center;
`;

export const AssignedToDiv = styled(TruckNumDiv)`
	width: 80px;
	outline: none;
`;

export const EmployeeWrap = styled.div`
	height: 50px;
	display: flex;
	flex-direction: row;
	width: 100%;
	border-left: 1px solid grey;
	//justify-content: space-between;
	white-space: nowrap;
	outline-offset: -1px;
	font-size: 20px;
`;

export const PairedEmpDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
	font-family: "Segoe UI", serif;
	justify-content: space-around;
	padding: 0 10px;
`;

export const AMEmp = styled(PairedEmpDiv)``;

export const PMEmp = styled(PairedEmpDiv)`
	//color: white;

	${({ isEven }) =>
		isEven
			? `
			background-color: #9fc6ff70;
		`
			: `
			background-color: #9fc6ff2b;
		`}
`;

export const EmployeeDiv = styled.div`
	display: flex;
	align-items: center;

	width: 50%;
	justify-content: center;
`;
