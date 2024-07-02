import { PropTypes } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

export const DarkModeStyle = createGlobalStyle`
  body {
    background-color: ${({ mode }) => (mode ? "#1F1F21" : "white")};
    color : ${({mode})=> (mode ? "white" : "black")}
  }
  button{
    background-color: ${({ mode }) => (mode ? "white" : "")};
  }
  h1{
    color: ${({ mode }) => (mode ? "white" : "rgb(2 132 199)")}
  }
`;

DarkModeStyle.propTypes = {
  mode: PropTypes.bool
};
