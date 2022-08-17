import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
background-color:#1a1919;
        min-height: 100vh;
        font-family: "Barlow";
        color: white;
    }

    img{
        width: 100%;
    }
`;
