import styled from "styled-components";

/**
 * @date 2020-02-20
 * @author MJ Kochuk
 * @module Styled
 */

/**
 *
 **/
export const TruckMapMedia = styled.svg``;

export const LocationLabel = styled.text`
	font-size: 48px;
	fill: #666;
	font-family: LucidaSans;
	translate: transform(${({ translate }) => translate});
`;

export const PadPath = styled.g`
	transform: translate(${({ translate }) => translate});
	d: path('${({ dimensions }) => dimensions}');
`;
