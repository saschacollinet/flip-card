import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    font-family: Montserrat, sans-serif;
}

body {
    height: 100vh;
    display: grid;
    place-items: center;
}
`;

export default GlobalStyles;
