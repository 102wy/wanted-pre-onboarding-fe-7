import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        list-style: none;
        text-decoration: none;
        outline-style: none;
        box-sizing: border-box;
        cursor: default;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
    }
    button{
        cursor: pointer;
        border: none;
        background-color: #fff;
    }
`;

export default GlobalStyle;
