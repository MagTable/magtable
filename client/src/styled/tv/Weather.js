import styled from "styled-components";

/**
 * @date 2020-03-25
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const SideBar = styled.div`
	height: calc(100vh - 50px);
	width: 100px;
	background-color: grey;
`;

export const StatusIcon = styled.i``;

export const SunIcon = styled(StatusIcon)`
	color: yellow;
`;
