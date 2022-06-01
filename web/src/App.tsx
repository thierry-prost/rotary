import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { FC, lazy } from "react";

const Home = lazy(() =>
  import("./routes/Home").then((module) => ({ default: module.Home }))
);

export const App: FC = () => (
  <BrowserRouter>
    <ThemeProvider
      theme={createTheme({
        palette: { primary: { main: "#005daa", contrastText: "white" } },
      })}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
