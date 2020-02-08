import styled from 'styled-components';

/**
 * @date 2020-02-05
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const Title = styled.h1`
	width: fit-content;
	margin: auto;
	// padding-top: 20px;
	flex-wrap: wrap;
`;

export const TitleDiv = styled.div`
    width: 100vw;
	margin: auto;
	position: absolute;
	top: 0;
	justify-content: space-around;
	// width: 100vw;
    z-index: 10;
    display: flex;
    `;

export const TitleDummy = styled.div`
    width: 50px;
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    top: 0;
    height: 85px;
    flex-wrap: nowrap;
    `;
