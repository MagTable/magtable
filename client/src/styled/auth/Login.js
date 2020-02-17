import styled from "styled-components";
import { OkButton } from "../common/FormControl";

/**
 * @date 2020-02-13
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * The container immediately surrounding the login elements, provides style and input positioning.
 */
export const LoginBlock = styled.div`
	max-width: 350px;
	height: auto;
	padding: 2rem;

	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.06), 0 0 6px rgba(0, 0, 0, 0.23);

	margin: auto;
	border-radius: 0.45rem;
	margin-top: 90px;

	h1 {
		margin: 0 0 1rem 0;
	}
`;

/**
 * The submit button to log in to the app
 */
export const LoginBtn = styled(OkButton)`
	margin: auto;
	margin-top: 10px;
	padding: 10px;
`;
