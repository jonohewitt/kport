import React from "react"
import { darkTheme, lightTheme } from "./src/theme/themeVariables"
import { Layout } from "./src/components/layout"
import { GlobalProvider } from "./src/context/globalState"

// Unfortunately this extremely hacky work around seems to be the only way
// to load in dark mode without flickering from light mode first

// Thanks to Josh W Comeau for sharing his solution that I've adapted below
// https://www.joshwcomeau.com/react/dark-mode/

const ScriptInjection = () => {
  let codeToRunOnClient = `(() => {
    const darkTheme = ${JSON.stringify(darkTheme)}
    const lightTheme = ${JSON.stringify(lightTheme)}

    const themePreviouslySet = localStorage.getItem("theme")
    const prefersDark = matchMedia?.("(prefers-color-scheme: dark)").matches

    let theme, themeName

    if (themePreviouslySet) {
      themeName = themePreviouslySet
      switch (themePreviouslySet) {
        case "dark":
          theme = darkTheme
          break
        case "light":
          theme = lightTheme
          break
        default:
          theme = lightTheme
      }
    } else if (prefersDark) {
      theme = darkTheme
      themeName = "dark"
    }
    else {
      theme = lightTheme
      themeName = "light"
    }

    Object.entries(theme).forEach(
      ([key, value]) => {
        const cssVarName = \`--\${key}\`
        document.documentElement.style.setProperty(cssVarName, value)
      }
    )
  })()`
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({
  setPreBodyComponents,
}: {
  setPreBodyComponents: any
}) => {
  setPreBodyComponents(<ScriptInjection key="🔑" />)
}

export const wrapRootElement = ({ element }: { element: any }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

export const wrapPageElement = ({ element }: { element: any }) => (
  <Layout>{element}</Layout>
)
