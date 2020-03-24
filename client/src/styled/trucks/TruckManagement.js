import styled from "styled-components";
import { Button } from "../common/FormControl";

/**
 * @date 3/5/2020
 * @author MJ Kochuk
 * @module Styled
 */

export const TruckManagementListDiv = styled.div`
	transition: all 0.15s ease-in-out;
	display: flex;
	flex-direction: column;
	flex-grow: 1.2;
	flex-basis: 0;
	overflow-y: auto;
	overflow-x: auto;
	max-height: calc(100vh - 120px);
	width: 50%;
	margin: auto;
`;

export const TruckMgmtDiv = styled.div`
	width: 100%;
`;

/**
 *
 **/
export const EditTruckWrap = styled(TruckMgmtDiv)`
	border-right: 2px solid var(--border-color);
`;

/**
 *
 */
export const AddTruckWrap = styled.div`
	width: 80%;
	margin: auto;
	padding-top: 30px;
`;

/**
 *
 */
export const NoticeBox = styled.input`
	width: 100%;
`;

export const TruckMgmtWrap = styled.div`
	display: flex;
	flex-direction: row;
`;

export const AddTruckBtn = styled(Button)`
	width: 165px;
	margin-right: 30px;
	border-radius: 20px;
	height: 28px;
`;
