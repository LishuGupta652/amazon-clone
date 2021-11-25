import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import categories from "../../data/category";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = ({ category, setCategory }) => {
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
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            helperText="Please select your language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
