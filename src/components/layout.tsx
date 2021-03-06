import React, { FC } from "react"
import styled, { DefaultTheme, ThemeProvider } from "styled-components"
import { GlobalStyles } from "../theme/globalStyles"
import { lightTheme } from "../theme/themeVariables"

import { Nav } from "./nav"
import { Footer } from "./footer"

export const Layout: FC = ({ children }) => {
  // Create an object mapping e.g props.theme.background to `var(--background)`
  const themeStrings = Object.keys(lightTheme).reduce(
    (theme, style) => ({
      ...theme,
      [style]: `var(--${style})`,
    }),
    {}
  ) as DefaultTheme

  return (
    <>
      <ThemeProvider theme={themeStrings}>
        <GlobalStyles />

        <Page>
          <Nav />
          <Content>{children}</Content>
          <Footer />
        </Page>
      </ThemeProvider>
    </>
  )
}

const Content = styled.main`
  flex-grow: 1;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
