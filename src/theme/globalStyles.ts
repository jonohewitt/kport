import { createGlobalStyle } from "styled-components"
import "./typography.css"

import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    color-scheme: ${({ theme }) => theme.theme};
  }

  body {
    
    max-width: ${({ theme }) => theme.fullWidth};
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.background};

    font-family: HK Grotesk, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .bold {
    font-weight: 500;
  }

  p, h2 {
    a {
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.text};
    text-decoration: none;
    @media (hover: hover) {
      :hover {
        border-bottom: 2px solid ${({ theme }) => theme.text};
      }
    }
    }
  }

  .screen-reader-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

    .no-break {
    white-space: nowrap;
  }
`
