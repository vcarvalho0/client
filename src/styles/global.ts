import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: url('/fonts/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-v20-latin-regular.eot'); /* IE9 Compat Modes */
    src: url('/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/poppins-v20-latin-600.eot'); /* IE9 Compat Modes */
    src: url('/fonts/poppins-v20-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/poppins-v20-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyle
