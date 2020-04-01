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
			background-color: #F1F1F1;
		`
			: `
		`}
`;

export const UnassignedWrap = styled(ListItemWrapper)`
	height: auto;
	outline: 1px solid grey;
	outline-offset: -1px;
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

export const TruckNum = styled.span`
	font-size: 20px;
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
	//border-right: 1px solid grey;
	outline-offset: -1px;
`;

export const PairedEmpDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	font-family: "Segoe UI", serif;
`;

export const AMEmp = styled(PairedEmpDiv)``;

export const PMEmp = styled(PairedEmpDiv)`
	//color: white;

	${({ isEven }) =>
		isEven
			? `
			background-color: #bdbdbd;
		`
			: `
			background-color: #d4d4d4;
		`}
`;

export const EmployeeDiv = styled.div`
	display: flex;
	flex-grow: 1;
	display: flex;
	align-items: center;
	padding-left: 10px;
`;
