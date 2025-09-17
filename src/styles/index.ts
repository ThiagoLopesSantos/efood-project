import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  bege: '#FFF8F2',
  bege2: '#FFEBD9',
  branco: '#FFFFFF'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.bege};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
