import styled from "styled-components";

/**
 * @date 3/26/2020
 * @author Steven Wong
 * @category Styled Components
 * @module Common
 */

export const StyledCheckBoxDiv = styled.div`
	background-color: #e5eaef;
	display: block;
	margin: 10px 0;
	position: relative;
`;

export const StyledCheckBoxLabel = styled.label`
	padding: 0.75rem;
	display: block;
	text-align: left;
	color: #3c454c;
	cursor: pointer;
	position: relative;
	z-index: 2;
	transition: color 200ms ease-in;
	overflow: hidden;
	&:before {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		content: "";
		background-color: #232f3d;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale3d(1, 1, 1);
		transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		z-index: -1;
	}
	&:after {
		width: 20px;
		height: 20px;
		content: "";
		border: 2px solid #d1d7dc;
		background-color: #fff;
		background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
		background-repeat: no-repeat;
		border-radius: 50%;
		z-index: 2;
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		transition: all 200ms ease-in;
	}
`;

export const StyledCheckBoxInput = styled.input`
	width: 100%;
	height: 100%;
	z-index: 100;
	order: 1;
	opacity: 0;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	&:checked + label {
		color: #fff;

		&:before {
			transform: translate(-50%, -50%) scale3d(56, 56, 1);
			opacity: 1;
		}

		&:after {
			background-color: #54e0c7;
			border-color: #54e0c7;
		}
	}
`;
