import { ForwardedRef, forwardRef, FunctionComponent } from "react";
import { ReactComponent as Disease } from "../assets/Disease.svg";
import { ReactComponent as Economic } from "../assets/Economic.svg";
import { ReactComponent as Education } from "../assets/Education.svg";
import { ReactComponent as Environment } from "../assets/Environment.svg";
import { ReactComponent as Maternal } from "../assets/Maternal.svg";
import { ReactComponent as Peace } from "../assets/Peace.svg";
import { ReactComponent as RotaryLogo } from "../assets/RotaryLogo.svg";
import { ReactComponent as Water } from "../assets/Water.svg";
import { Tile } from "../components/Tile";
import { useTheme } from "@emotion/react";
import {
  AppBar,
  Container,
  Grid,
  Paper,
  PaperProps,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ScrollAnimate } from "../components/ScrollAnimate";
import { HideOnScroll } from "../components/HideOnScroll";

interface HomeProps {}

export const Home: FunctionComponent<HomeProps> = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.only("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Container sx={{ pt: [3, 5, 7, 9], pb: [1, 3, 5, 7] }}>
        <RotaryLogo />
      </Container>
      <Scrollbar />
      <Container maxWidth="sm" sx={{ pt: [1, 2, 3, 4], pb: [1, 2, 3, 4] }}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Rotary Club Luxembourg
        </Typography>
        <Typography
          textAlign="center"
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Our club is a network of neighbors, friends, leaders, and
          problem-solvers who see a world where people unite and take action to
          create lasting change – across the globe, in our communities, and in
          ourselves
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate>
              <Tile
                component={Background}
                title="Disease Prevention and Treatment"
                icon={Disease}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  We educate and equip communities to stop the spread of
                  life-threatening diseases. Rotary members have hundreds of
                  health projects underway around the world at any given time.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate delayMs={md || lg ? 300 : 0}>
              <Tile
                component={Background}
                title="Peace and Conflict Resolution"
                icon={Peace}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  By carrying out service projects and supporting peace
                  fellowships and scholarships, our members take action to
                  address the underlying causes of conflict, including poverty,
                  discrimination, ethnic tension, lack of access to education,
                  and unequal distribution of resources.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate delayMs={lg ? 600 : 0}>
              <Tile
                component={Background}
                title="Clean Water and Sanitation"
                icon={Water}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  When people have access to clean water and sanitation,
                  waterborne diseases decrease, children stay healthier and
                  attend school more regularly, and mothers can spend less time
                  carrying water and more time helping their families.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate delayMs={md ? 300 : 0}>
              <Tile
                component={Background}
                title="Maternal and Child Health"
                icon={Maternal}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  Rotary makes high-quality health care available to vulnerable
                  mothers and children so they can live longer and grow
                  stronger.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate delayMs={md ? 0 : 300}>
              <Tile
                title="Basic Education and Literacy"
                icon={Education}
                component={Background}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  Our goal is to strengthen the capacity of communities to
                  support basic education and literacy, reduce gender disparity
                  in education, and increase adult literacy. We support
                  education for all children and literacy for children and
                  adults.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate delayMs={lg ? 600 : md ? 300 : 0}>
              <Tile
                component={Background}
                title="Economic and Community Development"
                icon={Economic}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  We create opportunities to help individuals and communities
                  thrive financially and socially.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
          <Grid item xs={0} md={3} lg={4} />
          <Grid item xs={12} md={6} lg={4}>
            <ScrollAnimate>
              <Tile
                component={Background}
                title="Supporting the Environment"
                icon={Environment}
              >
                <Typography
                  textAlign="center"
                  variant="body2"
                  color="text.secondary"
                >
                  We are committed to supporting activities that strengthen the
                  conservation and protection of natural resources, advance
                  ecological sustainability, and foster harmony between
                  communities and the environment.
                </Typography>
              </Tile>
            </ScrollAnimate>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const Background = forwardRef(
  (props: PaperProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Paper
      sx={{
        p: 2,
        m: 1,
        mb: 4,
        height: "100%",
        //  boxSizing: "border-box", height: "100%"
      }}
      {...props}
      ref={ref}
    />
  )
);

const Scrollbar = () => (
  <HideOnScroll>
    <AppBar position="relative">
      <Toolbar>
        <Typography textAlign="center" variant="h6" color="inherit" noWrap>
          {/* Album layout */}
        </Typography>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);
