import { FunctionComponent } from "react";
import { ReactComponent as Education } from "../assets/Education.svg";
import { Tile } from "../components/Tile";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { ScrollAnimate } from "../components/ScrollAnimate";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate>
          <Tile title="We are so great" icon={Education}>
            <div>hi</div>
          </Tile>
        </ScrollAnimate>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate delayMs={md || lg ? 300 : 0}>
          <Tile title="We are so great" icon={Education}>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </Typography>
          </Tile>
        </ScrollAnimate>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate delayMs={lg ? 600 : 0}>
          <Tile title="We are so great" icon={Education}>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </Typography>
          </Tile>
        </ScrollAnimate>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate delayMs={md ? 300 : 0}>
          <Tile title="We are so great" icon={Education}>
            <div>hi</div>
          </Tile>
        </ScrollAnimate>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate delayMs={md ? 300 : 0}>
          <Tile title="We are so great" icon={Education}>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </Typography>
          </Tile>
        </ScrollAnimate>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ScrollAnimate delayMs={lg ? 600 : md ? 300 : 0}>
          <Tile title="We are so great" icon={Education}>
            <Typography variant="body2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </Typography>
          </Tile>
        </ScrollAnimate>
      </Grid>
    </Grid>
  );
};

export default Home;
