import styled from "styled-components";

export const AlertDiv = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  width: auto;

  z-index: 100;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);

  z-index: 1000;
`;

export const Alert = styled.div`
    padding: 5px;
    border-radius: 5px;
    ${({alerttype}) =>
    alerttype === "danger" &&
    `
      background: red;
    `};
    ${({alerttype}) =>
    alerttype === "success" &&
    `
      background: green;
      color: white;
    `};
    ${({alerttype}) =>
    alerttype === "warning" &&
    `
      background: orange;
    `};
`;
