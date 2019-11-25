import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root{
    background: #DBDBDB;
    text-align: left;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 62.5%;

}
`

export default GlobalStyle
