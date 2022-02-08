import "remove-focus-outline"

import { GatsbyBrowser } from "gatsby"
import React from "react"

import { Layout } from "./src/components/layout"
import { GlobalProvider } from "./src/context/globalState"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <GlobalProvider>{element}</GlobalProvider>

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <Layout>{element}</Layout>
