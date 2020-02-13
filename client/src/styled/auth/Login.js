import styled from "styled-components";
import { Button, Input } from "../common/FormControl";

/**
 * @date 2020-02-13
 * @author MJ Kochuk
 * @module Styled
 */

/**
 * Holds the login pane, centers content.
 **/
export const LoginPane = styled.div`
	width: 90vw;
	margin: auto;
	display: flex;
	justify-content: center;
	align-content: space-around;
	flex-direction: column;
	align-items: center;
`;

/**
 * Text boxes for username and password.
 */
export const LoginInput = styled(Input)`
	margin-top: 20px;
	padding: 7px;
	font-size: 20px;
	font-styling: bold;
	background-color: #eaeaea;
`;

/**
 * The submit button to log in to the app
 */
export const LoginBtn = styled(Button)`
	margin: auto;
	margin-top: 10px;
	padding: 3px 15px;
	font-size: 17px;
	display: flex;
	border: 2px solid #28aae177;
`;

/**
 * The container immediately surrounding the login elements, provides style and input positioning.
 */
export const LoginBlock = styled.div`
	max-width: 400px;
	min-width: 30vw;
	height: 40vh;
	display: flex;
	justify-self: center;
	align-self: center;
	justify-content: center;
	background-color: #dedede;
	// background-color: #28aae111;
	margin: auto;
	border-radius: 4px;
	flex-basis: auto;
	flex-grow: 1;
	margin-top: 90px;

	h1 {
		margin: 0;
	}
`;
