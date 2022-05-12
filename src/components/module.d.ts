import { Theme as BaseTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  interface Theme extends BaseTheme {}
}
