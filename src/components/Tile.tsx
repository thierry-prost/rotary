import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { forwardRef } from "react";

interface TileProps {
  children: React.ReactElement;
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export const Tile = forwardRef<HTMLDivElement, TileProps>(
  ({ children, icon: Icon, title }, ref) => (
    <Grid container ref={ref}>
      <Grid item xs={12}>
        <Center>
          <Background>
            <Icon />
          </Background>
        </Center>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
);

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
