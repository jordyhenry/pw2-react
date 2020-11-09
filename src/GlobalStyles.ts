import { createGlobalStyle } from 'styled-components'

const breakpoints = {
  desktop: '1360px',
}

export const device = {
  desktop: `(min-width: ${breakpoints.desktop})`,
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
  }

  body {
    background-color: var(--secondary);
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
    overflow-x: hidden;
  }

  :root {
    --primary: #223843;
    --secondary: #EFF1F3;
    --tertiary: #C1292E;
    --quaternary: #F1D302;
    --quinary: #FEC601;
    --senary: #3FA34D;

    --bg-primary: var(--primary);
    --bg-secondary: var(--secondary);
  }
`

export default GlobalStyles