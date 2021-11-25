import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import categories from "../../data/category";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Dictionary"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            id="standard-basic"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id="outlined-select-currency"
            select
            className="select"
            label="Language"
            value={category}
            onChange={(e) => {
              handleChange(e.target.value);
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
