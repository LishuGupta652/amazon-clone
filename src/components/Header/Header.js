import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
