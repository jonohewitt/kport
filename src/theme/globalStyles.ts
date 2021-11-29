import { createGlobalStyle } from "styled-components"
import "./typography.css"

import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    color-scheme: var(--theme);
  }

  body {
    
    max-width: var(--fullWidth);
    color: var(--text);
    background: var(--background);
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
    color: var(--text);
    border-bottom: 1px solid var(--text);
    text-decoration: none;
    @media (hover: hover) {
    :hover {
      border-bottom: 2px solid var(--text);
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
