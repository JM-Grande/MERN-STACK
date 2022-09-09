import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

//mui theme
import getDesignTokens from "./theme/getDesignTokens";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState("light");

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={darkModeTheme}>
      <Box pl="2em" pr="2em" bgcolor="background.default">
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
