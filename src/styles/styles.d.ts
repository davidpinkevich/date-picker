import "styled-components";

import { type TypesTheme } from "types/themeTypes";

declare module "styled-components" {
  export interface DefaultTheme extends TypesTheme {}
}
