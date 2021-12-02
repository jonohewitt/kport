import "styled-components"
import { Theme } from "./theme/themeVariables"
import { ThemeName } from "./context/globalState"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare global {
  export interface NamedNodeMap {
    theme?: { value: ThemeName }
  }
}
