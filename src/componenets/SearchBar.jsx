import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 20,
      border: "1.2px solid #e3e3e3",
      p1: 2,
      boxshadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value=""
      OnChange={() => { }}
    />
    <IconButton type="submit" sx= {{ p: '9px', color:'red'}}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
