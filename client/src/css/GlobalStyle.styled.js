import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html{
        scroll-behavior: smooth;
    }


    body{
        background-color: ${(props) => props.theme.background};
        min-height: 100vh;
        font-family: "Barlow";
        color: white;
        transition: all 300ms;
        font-size: 0.75em;
    }

    img{
        width: 100%;
    }

    .save{
        text-align: center;
        font-size: 3em;
        
    }
`;
