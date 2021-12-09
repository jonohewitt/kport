import "styled-components"
import { Theme } from "./src/theme/themeVariables"
import { ThemeName } from "./src/context/globalState"

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

declare global {
  export interface NamedNodeMap {
    theme?: { value: ThemeName }
  }
}

declare module "*.svg" {
  const content: any
  export default content
}
