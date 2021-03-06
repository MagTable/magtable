import styled from "styled-components";
import { Button } from "../common/FormControl";

/**
 * @date 3/5/2020
 * @author MJ Kochuk
 * @category Styled Components
 * @module Trucks
 */

/**
 *
 */
export const TruckManagementListDiv = styled.div`
	transition: all 0.15s ease-in-out;
	overflow-y: auto;
	margin: auto;
	width: auto;
	//max-height: calc(100vh - 120px);
	padding: 0 40px;
	background: #f4f4f4;
	height: calc(100vh - 120px);
`;
/**
 *
 */
export const TruckManagementDiv = styled.div`
	margin: auto;
	width: 60%;
	padding: 14px 4rem 1rem 2rem;
	background: white;
	box-shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.75);
	/* min-height: 100%; */
	min-height: 100%;
`;
/**
 *
 */
export const TruckMgmtDiv = styled.div`
	width: 100%;
	height: 100vh;
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
/**
 *
 */
export const AddTruckBtn = styled(Button)`
	width: 165px;
	margin-right: 30px;
	border-radius: 0.45rem;
	min-height: 30px;

	:hover {
		background: white;
		color: #414244;
	}
`;
