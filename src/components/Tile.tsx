import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { OverrideProps } from "@mui/material/OverridableComponent";
import Typography from "@mui/material/Typography";
import React, { ForwardedRef, forwardRef } from "react";

export type TileProps<
  D extends React.ElementType = TileTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TileTypeMap<P, D>, D>;

interface TileTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & {
    children?: React.ReactNode;
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };
  defaultComponent: D;
}

const TileRoot = forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>((props, ref) => <div {...props} ref={ref} />);

const Background = styled.div`
  width: 64px;
  background-color: ${(props) => props.theme.palette.primary.dark};
  border-radius: 50%;
  padding: 20px;
`;

const Center = styled.div`
  justify-content: center;
  display: flex;
`;

export const Tile = forwardRef(function <C extends React.ElementType>(
  {
    children,
    icon: Icon,
    component,
    title,
    ...rest
  }: {
    component?: C;
  } & OverrideProps<TileTypeMap, C>,
  ref: ForwardedRef<HTMLDivElement>
): JSX.Element {
  return (
    <TileRoot as={component} {...rest} ref={ref}>
      <Grid container>
        <Grid item xs={12} justifyContent="center" display="flex">
          <Center>
            <Background>
              <Icon color="white" />
            </Background>
          </Center>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" display="flex">
          {children}
        </Grid>
      </Grid>
    </TileRoot>
  );
});
