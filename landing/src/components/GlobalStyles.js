import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        scroll-behavior: smooth;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .container{
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default GlobalStyles;
