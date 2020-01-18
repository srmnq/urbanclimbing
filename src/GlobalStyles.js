import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scrollbar-width: none;
    }

:root{
    --lightgreen: #A0B4B7;
    --mediumgreen: #79898C
    --darkgreen: #5B797D;
    --gradientcolordark: #135058;
    --gradientcolorlight: #769094;
    --mainbg: #DBDBDB;
    --white: #EEEEEE;
    --boxshadow:  0px 2px 4px #000;


    background: var(--mainbg) ;
    text-align: left;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 62.5%;

   



}
`

export default GlobalStyle
