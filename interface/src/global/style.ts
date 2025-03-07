import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
    }

    html {
        font-size: 62.5%;
        font-family: "Press Start 2P", system-ui;
        font-weight: 400;
        font-style: normal;
    }

    button {
        cursor: pointer;
    }
`;

export { GlobalStyle };
