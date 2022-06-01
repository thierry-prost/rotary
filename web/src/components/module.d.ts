import { Theme as BaseTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  interface Theme extends BaseTheme {}
}

// declare module "react"{
//   function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
// }
// // function forwardRef<T, P = {}>(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;
