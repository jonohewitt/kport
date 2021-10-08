// import "@fontsource/quicksand/latin.css"
// import "remove-focus-outline"
import React from "react"
import { Layout } from "./src/components/layout"
import { GlobalProvider } from "./src/context/globalState"

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>
