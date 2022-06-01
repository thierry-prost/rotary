import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Slide, { SlideProps } from "@mui/material/Slide";
import React, { FC, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

interface ScrollAnimateProps {
  delayMs?: number;
  durationMs?: number;
  heightPx?: number;
  children: React.ReactElement;
  direction?: SlideProps["direction"];
}

export const ScrollAnimate: FC<ScrollAnimateProps> = ({
  children,
  delayMs: delay = 0,
  durationMs: dur = 600,
  heightPx = 30,
  direction = "up",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Box style={{ height: "100%", position: "relative" }}>
      <Container
        $direction={direction}
        $heightPx={heightPx}
        ref={containerRef}
      />
      <ReactVisibilitySensor
        partialVisibility
        onChange={(v: boolean) => setVisible(v)}
      >
        <Fade
          in={visible}
          timeout={{ enter: 2 * dur + delay, exit: 0 }}
          style={{ transitionDelay: `${visible ? delay : 0}ms` }}
        >
          <div style={{ height: "100%" }}>
            <HideDelay $direction={direction} delay={delay} visible={visible}>
              <Slide
                in={visible}
                direction={direction}
                timeout={dur + delay}
                style={{ transitionDelay: `${visible ? delay : 0}ms` }}
                container={containerRef.current}
              >
                {children}
              </Slide>
            </HideDelay>
          </div>
        </Fade>
      </ReactVisibilitySensor>
    </Box>
  );
};

const Container = styled.div<{
  $heightPx: number;
  $direction: SlideProps["direction"];
}>`
  position: absolute;
  height: ${(props) => props.$heightPx}px;
  width: ${(props) => props.$heightPx}px;
  ${(props) => props.$direction === "right" && "right: 0;"}
  ${(props) => props.$direction === "left" && "left: 0;"}
`;

const hide = keyframes`
  from, to {
    visibility: visible;
  }
`;

const HideDelay = styled.div<{
  $direction: SlideProps["direction"];
  delay: number;
  visible: boolean;
}>`
  ${({ $direction }) =>
    $direction && ["up", "down"].includes($direction) && "display: flex;"}
  height: 100%;
  visibility: hidden;
  animation: ${hide} 0ms ${({ visible, delay }) => (visible ? delay : 0)}ms
    forwards;
`;
