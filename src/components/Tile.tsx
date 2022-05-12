import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import React, { FC, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

interface TileProps {
  children: React.ReactElement;
  delay?: number;
  title: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

export const Tile: FC<TileProps> = ({
  children,
  icon: Icon,
  delay = 0,
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Box width="100%">
      <Container ref={containerRef} />
      <ReactVisibilitySensor
        partialVisibility
        onChange={(v: boolean) => setVisible(v)}
      >
        <Fade
          in={visible}
          timeout={{ enter: 1200 + delay, exit: 0 }}
          style={{ transitionDelay: `${visible ? delay : 0}ms` }}
        >
          <div>
            <HideDelay delay={delay} visible={visible}>
              <Slide
                in={visible}
                direction="up"
                timeout={600 + delay}
                style={{ transitionDelay: `${visible ? delay : 0}ms` }}
                container={containerRef.current}
              >
                <Grid container>
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
              </Slide>
            </HideDelay>
          </div>
        </Fade>
      </ReactVisibilitySensor>
    </Box>
  );
};

const Background = styled.div`
  width: 64px;
  background-color: ${(props) => props.theme.palette.primary.dark};
  border-radius: 50%;
  padding: 20px;
`;

const Container = styled.div`
  position: absolute;
  height: 30px;
`;

const Center = styled.div`
  justify-content: center;
  display: flex;
`;

const hide = keyframes`
  from, to {
    visibility: visible;
  }
`;

const HideDelay = styled.div<{ delay: number; visible: boolean }>`
  visibility: hidden;
  animation: ${hide} 0ms ${({ visible, delay }) => (visible ? delay : 0)}ms
    forwards;
`;
