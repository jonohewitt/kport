import "styled-components"
import { Theme } from "./theme/themeVariables"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
