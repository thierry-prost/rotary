import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { FC } from "react";

interface Props {
  children: React.ReactElement;
}

export const HideOnScroll: FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger({ threshold: 150 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
